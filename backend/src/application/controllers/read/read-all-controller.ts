import Controller from "@/infra/controller";
import ReadAllRepository from "@/application/data/contracts/read/read-all-repository";
import { RequestPayload } from "@/application/data/interfaces/core/RequestPayload";

export default class ReadAllController extends Controller<void> {
    constructor(
        private readonly usecase: ReadAllRepository
    ) {
        super()
    }

    async run(input: void) {
        return await this.usecase.execute();
    }

    buildValidator() {
        return;
    }
}