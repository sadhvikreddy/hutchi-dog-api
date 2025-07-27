import { removeElementFromArray } from "../../../src/main/utils/removeElementFromArray";
import { describe, expect, it } from "vitest";

describe("Remove Element From Array", ()=> {
    it("removes key correctly", () => {
        const array = ["bradford", "leeds", "manchester"]
        const keyToRemove = "bradford"

        expect(removeElementFromArray(array, keyToRemove)).toStrictEqual(['leeds', 'manchester'])
    })

    it("shouldn't do anyhtin if the element is not present", () => {
        const array = ['bradford', 'leeds', 'manchester']
        const keyToRemove = 'tiger';

        expect(removeElementFromArray(array, keyToRemove)).toStrictEqual(array);

    })
})