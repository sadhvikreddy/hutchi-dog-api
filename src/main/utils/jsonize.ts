export function jsonize(protoObject: Object) {
    return JSON.parse(JSON.stringify(protoObject))
}