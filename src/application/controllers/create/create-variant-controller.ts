import Controller from "@/infra/controller";
import CreateVariantRepository from "@/application/data/contracts/create/create-variant-repository";
import { RequestPayload } from "@/application/data/interfaces/core/RequestPayload";
import z from "zod";
import { CreateAndDeleteVariantRequestInput, createAndDeleteVariantRequestInputSchema } from "@/application/data/requests/create-variant-request-input";
import { cleanTheString } from "@/main/utils/cleanTheString";

export default class CreateVariantController extends Controller<CreateAndDeleteVariantRequestInput> {
    constructor(
        private readonly usecase: CreateVariantRepository
    ) {
        super()
    }

    async run(input: CreateAndDeleteVariantRequestInput) {
        const { name, variant } = input;
        const result = await this.usecase.execute(cleanTheString(name), cleanTheString(variant))
        return result
    }

    buildValidator(payload: RequestPayload): CreateAndDeleteVariantRequestInput {
        let params = payload.params;

        if(params.variant === ':variant') {
            // throw 400 bad request
            throw new Error("Variant not provided.")
        }

        try {
            params = createAndDeleteVariantRequestInputSchema.parse(params);
        } catch (error) {
            if (error instanceof z.ZodError) {
                // throw 400 bad request
            }

            // throw 500 internal server error
        }

        return params;
    }
}