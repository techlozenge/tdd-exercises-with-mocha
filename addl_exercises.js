  function sum(a, b) {
    if (typeof(a) === 'number' && typeof(b) === 'number') {
      var x = (a + b).toFixed(0);
      return x;
    } else {
      return -1;
    }
  }

  function avg(a, b, c) {
    if (typeof(a) === 'number' && typeof(b) === 'number' && typeof(c) === 'number') {
      var x = ((a + b + c) / 3).toFixed(0)
      return x;
    } else {
      return -1;
    }
  }

  function greaterThan(a, b) {
    if (typeof(a) === 'number' && typeof(b) === 'number') {
      if (a > b) {
        return true;
      } else {
        return false;
      }
    } else {
        return -1;
    }
  }

  function secondHighest(nmbrArray) {
    if (nmbrArray.length == 0) {
      return -1;
    }
    let highest = Math.max.apply(null, nmbrArray);
    nmbrArray.splice(nmbrArray.indexOf(highest), 1);
    return Math.max.apply(null, nmbrArray);
  }

  function containsVowel(str) {
    if (str.length == 0) {
      return -1;
    }
    let vowel = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < vowel.length; i++) {
      for (let x = 0; x < str.length; x++) {
        if (str[x] == vowel[i]) {
          return true
        } // end if
      } // end inner for
    } // end outter for
    return false;
  }

  function pigLatin(str) {
    if (str.length == 0) {
      return -1;
    }
    let wordArray = str.split(" ");
    for (let i = 0; i < wordArray.length; i++) {
        let plSuffix = wordArray[i].charAt(0) + "ay";
        wordArray[i] = wordArray[i].slice(1, wordArray[i].lrngth) + plSuffix;
    }
    let newStr = wordArray.toString();
    for (let z = 0; z < newStr.length; z++) {
      newStr = newStr.replace(",", " ");
    }
    return newStr;
  }

  function longestWord(str) {
    if (str.length == 0) {
      return -1;
    }
    let wordArray = str.split(" ");
    let lastVal = 0;
    let lastWord = " ";
    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i].length > lastVal) {
        lastVal = wordArray[i].length;
        lastWord = wordArray[i];
      }
    }
    return lastWord;
  }

module.exports = {
  sum,
  avg,
  greaterThan,
  secondHighest,
  containsVowel,
  pigLatin,
  longestWord
};
