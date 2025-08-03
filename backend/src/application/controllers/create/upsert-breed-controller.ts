import Controller from "@/infra/controller";
import { UpsertBreedRepository } from "@/application/data/contracts/create/upsert-breed-repository";
import { RequestPayload } from "@/application/data/interfaces/core/RequestPayload";
import z from "zod";
import { parseArray } from "@/main/utils/parseArray";
import { cleanTheString } from "@/main/utils/cleanTheString";
import { UpsertBreedRequestInput, upsertBreedRequestInputSchema } from "@/application/data/requests/upsert-breed-request-input";
import InputError from "@/application/data/errors/InputError";
import InternalError from "@/application/data/errors/InternalError";

export default class UpsertBreedController extends Controller<UpsertBreedRequestInput> {
    constructor(
        private readonly usecase: UpsertBreedRepository
    ) {
        super()
    }

    async run(input: UpsertBreedRequestInput) {
        const { name, variants } = input;
        const result = await this.usecase.execute(name, variants);
        return result;
    }

    buildValidator(payload: RequestPayload): UpsertBreedRequestInput {
        let toReturn: UpsertBreedRequestInput = {
            name: cleanTheString(payload.params?.name ?? ''),
            variants: parseArray(payload.body.variants)
        }

        try {
            toReturn = upsertBreedRequestInputSchema.parse(toReturn);
        } catch (error) {
            if (error instanceof z.ZodError) {
                throw new InputError(error.message)
            }

            throw new InternalError(JSON.stringify(error))
        }

        return toReturn;
    }
}