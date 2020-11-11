import { Router } from 'express';

const routes = Router();

const recipesController = new RecipesController();

routes.get('/recipes/:i', recipesController.index);

export default routes;
