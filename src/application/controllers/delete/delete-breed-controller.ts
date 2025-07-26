import Controller from "@/application/data/contracts/controller";
import { DeleteBreedRepository } from "@/application/data/contracts/delete/delete-breed-repository";
import { RequestPayload } from "@/application/data/interfaces/core/RequestPayload";
import z from "zod";

export class DeleteBreedController extends Controller {
    constructor(
        private readonly usecase: DeleteBreedRepository
    ) {
        super();
    }

    async run(payload: RequestPayload) {
        const { params } = payload;
        return await this.usecase.execute(params);
    }

    buildValidator(payload: RequestPayload): void {
        let { params } = payload;

        const schema = z.object({
            name: z.string().min(1, "name cant be empty.")
        })

        try {
            params = schema.parse(params)
        } catch(error) {
            if(error instanceof z.ZodError) {
                // throw 400
            }

            // throw 500
        }
    }
}