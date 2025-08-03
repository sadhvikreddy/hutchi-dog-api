import BaseError from "./baseError"

export default class InternalError extends BaseError {
    static statusCode = 500
    constructor(
        errorMessage: string
    ) {
        super(InternalError.statusCode, `[Internal Server Error]: ${errorMessage}`)
    }
}