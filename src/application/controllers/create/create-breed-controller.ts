import Controller from "@/application/data/contracts/controller";
import { CreateBreedRepository } from "@/application/data/contracts/create/create-breed-repository";
import { RequestPayload } from "@/application/data/interfaces/core/RequestPayload";
import z from "zod";

export default class CreateBreedController extends Controller {
    constructor(
        private readonly usecase: CreateBreedRepository
    ) {
        super()
    }

    async run(payload: RequestPayload) {
        const { name, variants } = payload.body;
        const result = await this.usecase.execute(name, variants)
        return result;
    }

    buildValidator(payload: RequestPayload) {
        let body = payload.body;
        const schema = z.object({
            name: z.string().min(1, "Name cant be empty"),
            variants: z.optional(z.array(z.string().min(1, "variants has empty string.")))
        })

        try{ 
            body = schema.parse(body);
        } catch(error) {
            if(error instanceof z.ZodError) {
                // throw 400 with ERROR
            }

            // throw 500 internal SERVER ERROR
        }
    }
}