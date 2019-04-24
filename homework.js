//1

const summation = function (n) {
    let sum = 0
    for (i = 1; i <= n; i++) {
        sum += i
    }
    console.log(sum);
}

//2
const summationEven = function (n) {
    let sum = 0
    for (i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i
        }
    } console.log(sum);
}

//3
const avg = function (n) {
    let sum = 0
    for (i = 0; i < n.length; i++) {
        sum += n[i]
    }
    console.log(sum / n.length);
}

//4
const reverse = function (n) {

    return n.split('').reverse().join('');
}

//5
const addDashes = function (n) {
    return n.join('-');
}

//6 **
const countUpAndDown = function (n) {
    let count = ""
    for (i = 0; i < n; i++) {
        count = n - 1
    }
    console.log(count);
}

//7 **
const wordsWithA = function (n) {
    for (i = 0; i < n.length; i++) {
        return n.search(['a']);
    }

}
//8 **


//9 **
const longestWord = function (n) {
    const nSplit = n.split(' ');
    let longestWord = 0;
    for (var i = 0; i < nSplit.length; i++) {
        if (nSplit[i].length > longestWord) {
            longestWord = nSplit[i];
        }
    }
    return longestWord;
}

//10 **
const largestEvenNumber = function (n) {
    let largeEven = 0;
    for (var i = 0; i < n.length; i++) {
        if (n[i] % 2 === 0) {
            largeEven += n[i];
        }
    }
    return largeEven;
}
