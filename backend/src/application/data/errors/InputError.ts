import BaseError from "./BaseError";

export default class InputError extends BaseError {
    static statusCode = 400
    constructor(
        field: string,
    ) {
        super(InputError.statusCode, `[Validation Error]: Couldnt parse with error: ${field}`)
    }
}