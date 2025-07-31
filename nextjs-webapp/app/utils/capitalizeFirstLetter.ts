export function capitalizeFirstLetter(name: string): string {
    if(name === undefined || name === null || name.length === 0) {
        return '';
    }

    const firstLetter = name[0].toUpperCase();
    const rest = name.slice(1);

    return firstLetter + rest
}