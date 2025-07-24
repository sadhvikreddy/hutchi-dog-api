import { Express, Router } from 'express';

export const setupRouters = async (app: Express): Promise<void> => {
    const router = Router()
    app.use(router);
}