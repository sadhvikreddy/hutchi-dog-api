import { Express } from 'express';
import { createBreedRouter, CreateManyByJsonRouter } from '../routers';
import bodyParser from 'body-parser';

// maybe todo: pure function maybe.
export const setupRouters = async (app: Express): Promise<void> => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Routes
    app.put('/dog-breed/:name', createBreedRouter())
    app.post('/json', CreateManyByJsonRouter())
}