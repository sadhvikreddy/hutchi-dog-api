export function removeElementFromArray(array: string[], keyToRemove: string) {
    const arrayToReturn: string[] = [];

    array.forEach(item => {
        if(item !== keyToRemove) {
            arrayToReturn.push(item);
        }
    })

    return arrayToReturn;
}