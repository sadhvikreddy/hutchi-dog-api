import { RequestPayload } from "@/application/data/interfaces/core/RequestPayload";

export default abstract class Controller {
    abstract run(payload: RequestPayload): any;
    abstract buildValidator(payload: RequestPayload): void

    async validateAndRun(payload: RequestPayload) {
        this.buildValidator(payload);

        try {
            const response = await this.run(payload);
        } catch(error) {
            // throw INTERNAL ERROR (500)
        }
    }
}