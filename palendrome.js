function palendrome(word) {

  let wordReversed = "";

  for (x = word.length - 1; x >= 0; x--) {
      wordReversed += word[x];
  }

  if (wordReversed == word) {
        return true;
    } else {
        return false;
    }

} // end palendrome

module.exports = palendrome;
