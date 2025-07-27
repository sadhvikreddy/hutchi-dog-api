export function jsonize(protoObject: Object) {
    if(protoObject === undefined || protoObject === null) {
        return {}
    }
    try {
        return JSON.parse(JSON.stringify(protoObject))
    } catch(error) {
        throw new Error("Not Valid Json")
    }
}