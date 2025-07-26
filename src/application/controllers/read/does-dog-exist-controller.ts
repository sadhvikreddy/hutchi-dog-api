import Controller from "@/application/data/contracts/controller";
import { DoesDogExistRepository } from "@/application/data/contracts/read/does-dog-exist-repository";
import { RequestPayload } from "@/application/data/interfaces/core/RequestPayload";
import z from "zod";

export default class DoesDogExistController extends Controller {
    constructor(
        private readonly usecase: DoesDogExistRepository
    ) {
        super()
    }

    async run (payload: RequestPayload) {
        const { name } = payload.params;

        return await this.usecase.execute(name);
    }

    async buildValidator(payload: RequestPayload) {
        let { params } = payload;

        const schema = z.object({
            name: z.string().min(1, "Name cant be empty")
        });

        try {
            params = schema.parse(params)
        } catch(e) {
            // throw 400
        }

        // throw 500
    }
}