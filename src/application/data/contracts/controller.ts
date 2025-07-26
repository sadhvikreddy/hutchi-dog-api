import { RequestPayload } from "@/application/data/interfaces/core/RequestPayload";

export default abstract class Controller {
    abstract run(payload: RequestPayload): Promise<Response>
    abstract buildValidator(payload: RequestPayload): boolean

    async validateAndRun(payload: RequestPayload) {
        const validationError = this.buildValidator(payload)

        if(!validationError) {
            // throw BAD REQUEST (400)
        }

        try {
            const response = await this.run(payload);
        } catch(error) {
            // throw INTERNAL ERROR (500)
        }
    }
}