import Dog from "../../../src/application/data/interfaces/db/dog";
import dogToJson from '../../../src/main/utils/dogToJson';
import { describe, expect, it } from "vitest";

describe("Dog to Json", () => {
    it("should return data correctly", () => {
      const input: Dog[] = [{
        id: 'one',
        name: 'one',
        variants: [] 
      },{
        id: 'two',
        name: 'two',
        variants: ["2.1", "2.2"] 
    }];

    expect(dogToJson(input)).toBe({
        "one": [],
        "two": ["2.1", "2.2"]
    })
    })
})