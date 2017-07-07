function hangmanLite(word, guess) {
    let count = (word.split(guess).length -1);
    return count;
}

module.exports = hangmanLite;
