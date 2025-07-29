export function capitalizeFirstLetter(name: string): string {
    if(name.length === 0) {
        return name;
    }

    const firstLetter = name[0].toUpperCase();
    const rest = name.slice(1);

    return firstLetter + rest
}