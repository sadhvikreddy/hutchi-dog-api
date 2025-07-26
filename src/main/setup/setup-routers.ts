import express, { Express, Router } from 'express';
import { createBreedRouter } from '../routers/create-breed-router';
import bodyParser from 'body-parser';

// maybe todo: pure function maybe.
export const setupRouters = async (app: Express): Promise<void> => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/dog-breed/:name', createBreedRouter())
}