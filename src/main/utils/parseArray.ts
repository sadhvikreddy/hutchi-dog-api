import { cleanTheString } from "./cleanTheString";

export function parseArray(token: any) {
    if(token === undefined || token === null || token.length === 0) {
        return [];
    }

    let array = Array(token);
    if(!Array.isArray(array) || array.length === 1) {
        token = token.toString()
        let items = token.split(',');
        if(!Array.isArray(items)) {
            array = [items]
        } else {
            array = items;
        }
    }

    return array.filter(item => (item !== undefined && item !== null && item.length !== 0)).map(s => cleanTheString(s))
}