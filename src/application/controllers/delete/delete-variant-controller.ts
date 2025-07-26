import Controller from "@/application/data/contracts/controller";
import { DeleteVariantRepository } from "@/application/data/contracts/delete/delete-variant-repository";
import { RequestPayload } from "@/application/data/interfaces/core/RequestPayload";
import z from "zod";

export default class DeleteVariantController extends Controller {
    constructor(
        private readonly usecase: DeleteVariantRepository
    ) {
        super ()
    }

    async run(payload: RequestPayload) {
        const { name, variant } = payload.params;

        return await this.usecase.execute(name, variant);

    }

    buildValidator(payload: RequestPayload) {
        let { params } = payload;
        const schema = z.object({
            name: z.string().min(1, "Name cant be empty"),
            variant: z.string().min(1, "variant cant be empty"),
        });

        try {
            params = schema.parse(params)
        } catch(error) {
            if(error instanceof z.ZodError) {
                // throw 400
            }

            // internal error 500
        }
    }
}