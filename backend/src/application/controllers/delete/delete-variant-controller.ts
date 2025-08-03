import Controller from "@/infra/controller";
import { DeleteVariantRepository } from "@/application/data/contracts/delete/delete-variant-repository";
import { RequestPayload } from "@/application/data/interfaces/core/RequestPayload";
import z from "zod";
import { CreateAndDeleteVariantRequestInput, createAndDeleteVariantRequestInputSchema } from "@/application/data/requests/create-variant-request-input";
import InputError from "@/application/data/errors/inputError";
import InternalError from "@/application/data/errors/InternalError";

export default class DeleteVariantController extends Controller<CreateAndDeleteVariantRequestInput> {
    constructor(
        private readonly usecase: DeleteVariantRepository
    ) {
        super()
    }

    async run(input: CreateAndDeleteVariantRequestInput) {
        const { name, variant } = input;

        return await this.usecase.execute(name, variant);

    }

    buildValidator(payload: RequestPayload): CreateAndDeleteVariantRequestInput {
                let params = payload.params;

        if(params.variant === ':variant') {
            throw new InputError('variant params is missing (:variant)')
        }

        try {
            params = createAndDeleteVariantRequestInputSchema.parse(params);
        } catch (error) {
            if (error instanceof z.ZodError) {
                throw new InputError(error.message)
            }

            throw new InternalError(JSON.stringify(error));
        }

        return params;
    }
}