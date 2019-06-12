let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", () => {
  describe("#palindrome", () => { 
    it("should return false for a non-palindrome", () => {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return false for an empty string", () => {
      let emptyPhrase = new Phrase("");
      assert(!emptyPhrase.palindrome());
    });

    it("should return true for a plain palindrome", () => {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("should return true for a mixed-case palindrome", () => {
      let mixedCasePalindrome = new Phrase("RaceCar");
      assert(mixedCasePalindrome.palindrome());
    });
    it("should return true for a palindrome with punctuation", () => {
      let punctPalindrome = new Phrase("Madam, I'm Adam");
      assert(punctPalindrome.palindrome());
    });
  });
  describe("#letters", () => {
    it("should return only letters", () => {
      let punctPalindrome = new Phrase("Madam, I'm Adam");
      assert.strictEqual(punctPalindrome.letters(), "MadamImAdam");
    });
    it("should return the empty string on no match", () => {
      let noLetters = new Phrase("123.456");
      assert.strictEqual(noLetters.letters(), "");
    });
  });
});