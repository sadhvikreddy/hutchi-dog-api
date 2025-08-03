import JSONValidationError from "@/application/data/errors/JSONValidationError"

export function jsonize(protoObject: Object) {
    if(protoObject === undefined || protoObject === null) {
        return {}
    }
    try {
        return JSON.parse(JSON.stringify(protoObject))
    } catch(error) {
        console.log(`error: ${error}`);
        throw new JSONValidationError()
    }
}