import { parseArray } from "../../../src/main/utils/parseArray";
import { describe, expect, it } from "vitest";

describe("Parse Array", () => {
    it("should parse undefined, null correctly", () => {
        expect(parseArray(undefined)).toStrictEqual([])
    })

    it("should parse empty string correctly", () => {
        expect(parseArray('')).toStrictEqual([])
    })

    it("Should parse one element perfectly", () => {
        expect(parseArray("one element")).toStrictEqual(["one element"])
    })

    it("Should parse comma seprated two or more elemets coreectly", () => {
        expect(parseArray("one,two")).toStrictEqual(["one", "two"])
        expect(parseArray("one,two,three")).toStrictEqual(["one", "two", "three"])
    })

    it("Should parse array correctly", () => {
        expect(parseArray([1,2,3])).toStrictEqual(["1","2","3"])
        expect(parseArray(["one", "two"])).toStrictEqual(["one", "two"])
    })
    it("should parse booleans correctly", () => {
        expect(parseArray([true, false])).toStrictEqual(["true", "false"])
    })

    it("should handle mix of elements correctly", () => {
        expect(parseArray(["hello", undefined, "world"])).toStrictEqual(["hello", "world"])
    })

    it("should parse stirng array correctly", () => {
        expect(parseArray("[hello,world]")).toStrictEqual(["hello", "world"]);
    })
})