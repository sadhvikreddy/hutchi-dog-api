import Controller from "@/infra/controller";
import ReadAllRepository from "@/application/data/contracts/read/read-all-repository";
export default class ReadAllController extends Controller<void> {
    constructor(
        private readonly usecase: ReadAllRepository
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