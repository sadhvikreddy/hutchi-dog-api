import Controller from "@/infra/controller";
import { CreateBreedRepository } from "@/application/data/contracts/create/create-breed-repository";
import { RequestPayload } from "@/application/data/interfaces/core/RequestPayload";
import z from "zod";
import { CreateBreedRequestInput, createBreedRequestInputSchema } from "@/application/data/requests/create-breed-request-input";

export default class CreateBreedController extends Controller<CreateBreedRequestInput> {
    constructor(
        private readonly usecase: CreateBreedRepository
    ) {
        super()
    }

    async run(payload: CreateBreedRequestInput) {
        const { name, variants } = payload;
        const result = await this.usecase.execute(name, variants);
        return result;
    }

    buildValidator(payload: RequestPayload): CreateBreedRequestInput {
        let array;
        let toArray;
        const raw_body = payload?.body?.variants ?? ''
        const tryArrayParse = Array(raw_body);
        if(Array.isArray(tryArrayParse)) {
            array = tryArrayParse;
        } else {
            array = raw_body.split(',') ?? ''
            if(!Array.isArray(array)) {
                array = [`${array}`]
            }
        }
        let toReturn: CreateBreedRequestInput = {
            name: payload.params?.name ?? '',
            variants: array ?? []
        }

        console.log(toReturn);

        try {
            toReturn = createBreedRequestInputSchema.parse(toReturn);
        } catch (error) {
            if (error instanceof z.ZodError) {
                // throw 400 with ERROR
                throw new Error("Zod Error")
            }

            // throw 500 internal SERVER ERROR
        }

        return toReturn;
    }
}