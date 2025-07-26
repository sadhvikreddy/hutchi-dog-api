import Controller from "@/application/data/contracts/controller";
import ReadOneRepository from "@/application/data/contracts/read/read-one-repository";
import { RequestPayload } from "@/application/data/interfaces/core/RequestPayload";
import z from "zod";

export default class ReadOneController extends Controller {
    constructor(
        private readonly usecase: ReadOneRepository
    ) {
        super()
    }

    async run(payload: RequestPayload) {
        const { name } = payload.params
        return await this.usecase.execute(name);
    }

    buildValidator(payload: RequestPayload) {
        let { params } = payload;

        const schema = z.object({
            name: z.string().min(1, "Name cannot be empty")
        })

        try {
            params = schema.parse(params);
        } catch(e) {
            if(e instanceof z.ZodError) {
                // throw 400
            }

            // throw 500 internal error
        }
    }
}