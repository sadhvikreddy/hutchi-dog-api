import Controller from "@/infra/controller";
import CreateManyByJSONRepository from "@/application/data/contracts/create/create-many-by-json-repository";
import { RequestPayload } from "@/application/data/interfaces/core/RequestPayload";
import z, { boolean } from "zod";
import { CreateManyByJsonRequestInput } from "@/application/data/requests/create-many-by-json-request-input";
import InputError from "@/application/data/errors/inputError";

export default class CreateManyByJsonController extends Controller<CreateManyByJsonRequestInput> {
    constructor(
        private readonly usecase: CreateManyByJSONRepository
    ) {
        super()
    }

    async run(input: CreateManyByJsonRequestInput) {
        const { record, reset } = input
      if(Object.keys(record).length === 0) {
        return "JSON Parsed to be empty. No updates are made."
      }  
      const response = await this.usecase.execute(record, reset);
      return response;
    }

    buildValidator(payload: RequestPayload): CreateManyByJsonRequestInput  {
        const record: Record<string, string[]> = payload.body;

        if(record === undefined || record === null) {
            throw new InputError('body is missing')
        }
        const resetRaw = payload.query.reset ?? false
        const reset = resetRaw === "true" ? true : false;
        return {
            record,
            reset
        }
    }
}