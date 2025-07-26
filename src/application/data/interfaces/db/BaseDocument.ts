export default interface BaseDocument {
    id: string,
    created_at?: FirestoreTime | Date;
    updated_at?: FirestoreTime | Date;
}

export interface FirestoreTime {
    _seconds: Number,
    _nanoseconds: Number
}