import { Express } from 'express';
import { 
    upsertBreedRouter, 
    createManyByJsonRouter, 
    createVariantRouter,
    deleteBreedRouter,
    deleteVariantRouter,
    readAllRouter,
    readRouter
} from '../routers';
import bodyParser from 'body-parser';

// maybe todo: pure function maybe.
export const setupRouters = async (app: Express): Promise<void> => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Routes
    // create and upsert
    app.post('/json', createManyByJsonRouter())
    app.put('/upsert/dog-breed/:name', upsertBreedRouter())
    app.put('/create/dog-breed/:name/variant/:variant', createVariantRouter())

    // delete
    app.delete('/delete/dog-breed/:name', deleteBreedRouter())
    app.delete('/delete/dog-breed/:name/variant/:variant', deleteVariantRouter())

    // read
    app.get('/all', readAllRouter())

    app.get('/dog-breed/:name', readRouter())
}