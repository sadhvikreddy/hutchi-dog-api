export function cleanTheString(str: string) {
    const removeSquareBrackets1 = str.replaceAll('[', '')
    const removeSquareBrackets2 = removeSquareBrackets1.replaceAll(']', '')
    const removecomma = removeSquareBrackets2.replaceAll(',', '')
    const removeqbsp = removecomma.replaceAll('\"', '')
    const removeWhitespaces = removeqbsp.replace(/\s+/g, '');

    return removeWhitespaces;
}