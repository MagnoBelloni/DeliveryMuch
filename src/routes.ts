import { Router } from 'express';
import RecipesController from './controller/RecipesController';

const routes = Router();

const recipesController = new RecipesController();

routes.get('/recipes/:i', recipesController.index);

export default routes;
