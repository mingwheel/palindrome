module.exports = Phrase;

// Reverses a string.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join('');
}
// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns a string in lower case.
  this.processor = function(string) {
    return string.toLowerCase();
  }
  // Returns the letters in the content.
  this.letters = function letters() {
    let theLetters = [];
    for (let i = 0; i < this.content.length; i++) {
      if (this.content.charAt(i).match(/[a-zA-Z]/)) {
        theLetters.push(this.content.charAt(i));
      }
    }
    return theLetters.join("");
  }
  
  // Returns content processed for palindrome test.
  this.processedContent = function processedContent() {
    return this.processor(this.letters());
  }
  // Returns true for palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

// // Defines a TranslatedPhrase object.
// function TranslatedPhrase(content, translation) {
//   this.content = content;
//   this.translation = translation;

//   // Returns translation processed for palindrome test.
//   this.processedContent = function processedContent() {
//     return this.processor(this.translation);
//   }
// }  

