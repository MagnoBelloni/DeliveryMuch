import { Request, Response } from 'express';
import { container } from 'tsyringe';
import RecipesService from '../services/RecipesService';

export default class RecipesController {
    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        try {
            const { i } = request.params;

            const recipesService = container.resolve(RecipesService);

            const recipes = await recipesService.index(i);

            return response.json(recipes);
        } catch (error) {
            return response.status(400).json({ message: error });
        }
    }
}
