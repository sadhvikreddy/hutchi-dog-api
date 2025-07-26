import Controller from "@/application/data/contracts/controller";
import ReadAllRepository from "@/application/data/contracts/read/read-all-repository";
import { RequestPayload } from "@/application/data/interfaces/core/RequestPayload";

export default class ReadAllController extends Controller {
    constructor(
        private readonly usecase: ReadAllRepository
    ) {
        super()
    }

    async run(payload: RequestPayload) {
        return await this.usecase.execute();
    }

    buildValidator() {
        // No validation needed here as there are no inputs for the controller
        // might change in future. but sticking to arch for consistency
    }
}