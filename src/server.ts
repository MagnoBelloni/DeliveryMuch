import 'reflect-metadata';
import 'dotenv/config';

import express, { json, Request, Response, NextFunction } from 'express';

// import cors from 'cors';

import AppError from './errors/AppError';
import routes from './routes';

const app = express();

// app.use(cors());
app.use(json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message,
        });
    }

    return response.status(500).json({
        message: 'Internal server error',
    });
});

app.use((request: Request, response: Response, _: NextFunction) => {
    return response.status(404).json({
        mensagem: 'Rota não encontrada',
    });
});

app.listen(3333, () => {
    console.log('Server started!!');
});
