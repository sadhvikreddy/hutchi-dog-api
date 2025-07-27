import handleTimestamps from "../../../src/main/utils/handleTimestamps";
import { describe, expect, it } from "vitest";

describe("Handle Timestamps", () => {
    it("Should return correct string for created_at and updated_at", () => {
        const testDocument = {
            "id": "beagle",
            "created_at": {
                "_seconds": 0,
                "_nanoseconds": 0
            },
            "variants": [],
            "updated_at": {
                "_seconds": 0,
                "_nanoseconds": 0
            }
        } as any

        const resultDocument = handleTimestamps(testDocument);
        expect(resultDocument.created_at).toStrictEqual(new Date(0))
        expect(resultDocument.updated_at).toStrictEqual(new Date(0))
    })

    it("Should return correct document when updated_at is missing", () => {
        const testDocument = {
            "id": "beagle",
            "created_at": {
                "_seconds": 0,
                "_nanoseconds": 0
            },
            "variants": []
        }

        const resultDocument = handleTimestamps(testDocument);
        expect(resultDocument.created_at).toStrictEqual(new Date(0))
        expect(resultDocument.updated_at).toBeFalsy()
    })

        it("Should return correct document when created_at is missing", () => {
        const testDocument = {
            "id": "beagle",
            "updated_at": {
                "_seconds": 0,
                "_nanoseconds": 0
            },
            "variants": []
        }

        const resultDocument = handleTimestamps(testDocument);
        expect(resultDocument.updated_at).toStrictEqual(new Date(0))
        expect(resultDocument.created_at).toBeFalsy()
    })
})