import { RequestPayload } from "@/application/data/interfaces/core/RequestPayload";

export default abstract class Controller<T> {
    abstract run(payload: T): any;
    abstract buildValidator(payload: RequestPayload): T

    async validateAndRun(payload: RequestPayload): Promise<any> {
        const validatedData: T = this.buildValidator(payload);

        try {
            const response: any = await this.run(validatedData);
            return response
        } catch(error) {
           throw error
        }
    }
}