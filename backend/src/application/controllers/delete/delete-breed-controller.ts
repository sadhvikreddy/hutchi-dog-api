import Controller from "@/infra/controller";
import { DeleteBreedRepository } from "@/application/data/contracts/delete/delete-breed-repository";
import { RequestPayload } from "@/application/data/interfaces/core/RequestPayload";
import z from "zod";
import InputError from "@/application/data/errors/inputError";

export class DeleteBreedController extends Controller<string> {
    constructor(
        private readonly usecase: DeleteBreedRepository
    ) {
        super();
    }

    async run(input: string) {
        return await this.usecase.execute(input);
    }

    buildValidator(payload: RequestPayload): string {
        let { params } = payload;

        const schema = z.object({
            name: z.string().min(1, "name cant be empty.")
        })

        try {
            params = schema.parse(params)
        } catch (error) {
            if (error instanceof z.ZodError) {
                throw new InputError(error.message)
            }

            throw new InputError(JSON.stringify(error));
        }

        return params.name;
    }
}