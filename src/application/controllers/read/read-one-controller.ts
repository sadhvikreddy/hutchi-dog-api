import Controller from "@/infra/controller";
import ReadOneRepository from "@/application/data/contracts/read/read-one-repository";
import { RequestPayload } from "@/application/data/interfaces/core/RequestPayload";
import z from "zod";

export default class ReadOneController extends Controller<string> {
    constructor(
        private readonly usecase: ReadOneRepository
    ) {
        super()
    }

    async run(input: string) {
        return await this.usecase.execute(input);
    }

    buildValidator(payload: RequestPayload): string {
        let { name } = payload.params;

        const schema = z.object({
            name: z.string().min(1, "Name cannot be empty")
        })

        try {
            name = schema.parse(name);
        } catch (e) {
            if (e instanceof z.ZodError) {
                // throw 400
            }

            // throw 500 internal error
        }

        return name;
    }
}