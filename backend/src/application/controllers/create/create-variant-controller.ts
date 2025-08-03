import Controller from "@/infra/controller";
import CreateVariantRepository from "@/application/data/contracts/create/create-variant-repository";
import { RequestPayload } from "@/application/data/interfaces/core/RequestPayload";
import z from "zod";
import { CreateAndDeleteVariantRequestInput, createAndDeleteVariantRequestInputSchema } from "@/application/data/requests/create-variant-request-input";
import { cleanTheString } from "@/main/utils/cleanTheString";
import InputError from "@/application/data/errors/InputError";
import InternalError from "@/application/data/errors/InternalError";

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

        if (params.variant === ':variant') {
            throw new InputError('parameter Variant is missing')
        }

        try {
            params = createAndDeleteVariantRequestInputSchema.parse(params);
        } catch (error) {
            if (error instanceof z.ZodError) {
                throw new InputError(error.message)
            }

            throw new InternalError(JSON.stringify(error))
        }

        return params;
    }
}