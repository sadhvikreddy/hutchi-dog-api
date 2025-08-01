export default function lesserOf(q:number, w: number): number {
    if(q > w) {
        return w;
    } else {
        return q;
    }
}