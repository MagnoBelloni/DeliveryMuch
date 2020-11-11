import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class RecipesController {
    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        try {
            const { i } = request.params;

            return response.json('controller');
        } catch (error) {
            return response.status(400).json({ message: error });
        }
    }
}
