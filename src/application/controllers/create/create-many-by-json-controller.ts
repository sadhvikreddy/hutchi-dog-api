import Controller from "@/application/data/contracts/controller";
import CreateManyByJSONRepository from "@/application/data/contracts/create/create-many-by-json-repository";
import { RequestPayload } from "@/application/data/interfaces/core/RequestPayload";
import z from "zod";

export default class CreateManyByJsonController extends Controller {
    constructor(
        private readonly usecase: CreateManyByJSONRepository
    ) {
        super()
    }

    async run(payload: RequestPayload) {
        const json = JSON.parse(payload.body);

        const record: Record<string, string[]> = json;

        return await this.usecase.execute(record);

    }

    buildValidator(payload: RequestPayload): void {
        const { body } = payload.body;
        try {
            const parsedJson = JSON.parse(body);
            return parsedJson;
        } catch(error) {
            // bad request 400 - couldnt parse JSON
        }
    }
}