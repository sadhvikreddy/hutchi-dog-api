import Controller from "@/infra/controller";
import { DeleteVariantRepository } from "@/application/data/contracts/delete/delete-variant-repository";
import { RequestPayload } from "@/application/data/interfaces/core/RequestPayload";
import z from "zod";
import { CreateAndDeleteVariantRequestInput, createAndDeleteVariantRequestInputSchema } from "@/application/data/requests/create-variant-request-input";

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