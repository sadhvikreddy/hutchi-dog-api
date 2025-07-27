import Controller from "@/infra/controller";
import ReadJsonRepository from "@/application/data/contracts/read/read-json-repository";
export default class ReadJsonController extends Controller<void> {
    constructor(
        private readonly usecase: ReadJsonRepository
    ) {
        super()
    }

    async run() {
        return await this.usecase.execute();
    }

    buildValidator() {
        return;
    }
}