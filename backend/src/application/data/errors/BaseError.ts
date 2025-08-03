export default class BaseError extends Error {
    statusCode: number
    description: string
    constructor(
        code: number,
        description: string
    ) {
        super(description);
        this.statusCode = code
        this.description = description
    }
}