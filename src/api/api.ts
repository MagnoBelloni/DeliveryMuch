import axios from 'axios';

const apiRecipe = axios.create({
    baseURL: 'http://www.recipepuppy.com/api/',
});

const apiGiphy = axios.create({
    baseURL: 'http://api.giphy.com/v1/gifs/search',
});

export { apiRecipe, apiGiphy };
