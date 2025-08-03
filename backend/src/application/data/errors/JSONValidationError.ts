import BaseError from "./baseError";

export default class JSONValidationError extends BaseError {
    static statusCode = 400
    constructor() {
        super(JSONValidationError.statusCode, "Invalid JSON. Hint: ensure if header is application/json and data sent is valid JSON format")
    }
}