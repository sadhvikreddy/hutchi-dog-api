import { Express } from 'express';
import { upsertBreedRouter, createManyByJsonRouter, createVariantRouter } from '../routers';
import bodyParser from 'body-parser';
import { deleteBreedRouter } from '../routers/delete-breed-router';
import { deleteVariantRouter } from '../routers/delete-variant-router';
import { readAllRouter } from '../routers/read-all-router';

// maybe todo: pure function maybe.
export const setupRouters = async (app: Express): Promise<void> => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Routes
    // create and upsert
    app.put('/upsert/dog-breed/:name', upsertBreedRouter())
    app.post('/json', createManyByJsonRouter())
    app.put('/create/dog-breed/:name/variant/:variant', createVariantRouter())

    // delete
    app.delete('/delete/dog-breed/:name', deleteBreedRouter())
    app.delete('/delete/dog-breed/:name/variant/:variant', deleteVariantRouter())

    // read
    app.get('/all', readAllRouter())
}