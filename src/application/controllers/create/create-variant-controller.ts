import Controller from "@/application/data/contracts/controller";
import CreateVariantRepository from "@/application/data/contracts/create/create-variant-repository";
import { RequestPayload } from "@/application/data/interfaces/core/RequestPayload";
import z from "zod";

export default class CreateVariantController extends Controller {
    constructor(
        private readonly usecase: CreateVariantRepository
    ) {
        super()
    }

    async run(payload: RequestPayload) {
        const { name, variant } = payload.params;
        const result = await this.usecase.execute(name, variant)
        return result
    }

    buildValidator(payload: RequestPayload): void {
        let params = payload.params;
        const schema = z.object({
            name:  z.string().min(1, "Name cant be empty - Send name in Url Params"),
            variant: z.string().min(1, "Variant cant be empty - Send variant in Url Params")
        })

        try {
            params = schema.parse(params);
        } catch (error) {
            if(error instanceof z.ZodError) {
                // throw 400 bad request
            }

            // throw 500 internal server error
        }
    }
}