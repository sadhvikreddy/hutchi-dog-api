export function cleanTheString(str: string) {
    const removeSquareBrackets1 = str.replace('[', '')
    const removeSquareBrackets2 = removeSquareBrackets1.replace(']', '')
    const removecomma = removeSquareBrackets2.replace(',', '')
    const removeqbsp = removecomma.replaceAll('\"', '')
    if(removeqbsp.startsWith(" ") || removeqbsp.endsWith(" ")) {
        const removedWhitespaces = removeqbsp.replaceAll(" ", '')
        return removedWhitespaces
    }

    return removeqbsp;
}