import {palindromic} from "./palindromic";

describe('palindromic', () => {
    test("palindromic should return 0 when string is empty", () => {
        expect(palindromic("", {})).toBe(0);
    });

    test("palindromic should return 0 when string is empty", () => {
        expect(palindromic("123", {})).toBe(2);
    });

    test("palindromic should return 0 when string is empty", () => {
        expect(palindromic("1231", {})).toBe(1);
    });
})

