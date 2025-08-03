import Controller from "@/infra/controller";
import ReadOneRepository from "@/application/data/contracts/read/read-one-repository";
import { RequestPayload } from "@/application/data/interfaces/core/RequestPayload";
import z from "zod";
import InputError from "@/application/data/errors/InputError";
import InternalError from "@/application/data/errors/InternalError";

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

        if (name === ':name') {
            throw new InputError('Name parameter is missing')
        }

        const schema = z.string().min(1, "Name cannot be empty")

        try {
            name = schema.parse(name);
        } catch (e) {
            if (e instanceof z.ZodError) {
                console.log(e.message);
                throw new InputError(e.message)
            }

            throw new InternalError(JSON.stringify(e));
        }

        return name;
    }
}