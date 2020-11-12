import { injectable } from 'tsyringe';
import AppError from '../errors/AppError';
import { apiGiphy, apiRecipe } from '../api/api';

interface IRecipes {
    title: string;
    ingredients: string[];
    link: string;
    gif: string;
}

interface IResponse {
    keywords: string[];
    recipes: Array<IRecipes>;
}

interface IAPIRecipeResponse {
    results: [
        {
            title: string;
            ingredients: string;
            href: string;
        },
    ];
}

interface IAPIGiphyResponse {
    data: [
        {
            url: string;
        },
    ];
}

@injectable()
export default class RecipesService {
    public async index(i: string): Promise<IResponse> {
        const keywords = i.split(',');

        const { data } = await apiRecipe.get<IAPIRecipeResponse>('', {
            params: {
                i,
            },
        });

        if (!data) {
            throw new AppError(
                'We have a problem with RecipeAPI, try again later',
            );
        }

        const recipes = data.results.map(async response => {
            const { title, ingredients, href } = response;

            const ingredientsWithoutSpace = ingredients
                .split(',')
                .map(ingredient => ingredient.trim());

            const ingredientsAlphabeticOrder = ingredientsWithoutSpace.sort();

            const formattedTitle = title
                .trim()
                .replace('\n', '')
                .replace('\t', '')
                .replace('\r', '');

            const apiGiphyResponse = await apiGiphy.get<IAPIGiphyResponse>('', {
                params: {
                    q: formattedTitle,
                    api_key: process.env.GIPHY_API_KEY?.toString(),
                    limit: '1',
                },
            });

            if (!apiGiphyResponse) {
                throw new AppError(
                    'We have a problem with GiphyAPI, try again later',
                );
            }

            const gifUrl = apiGiphyResponse.data.data.map(gif => gif.url);

            if (!gifUrl) {
                throw new AppError(
                    'We have a problem with GiphyAPI, try again later',
                );
            }

            return {
                title: formattedTitle,
                ingredients: ingredientsAlphabeticOrder,
                link: href,
                gif: gifUrl[0],
            };
        });

        const formattedRecipes = await Promise.all(recipes);

        return {
            keywords,
            recipes: formattedRecipes,
        };
    }
}
