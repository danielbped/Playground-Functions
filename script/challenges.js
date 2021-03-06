"use strict";
// Desafio 1
const compareTrue = (num1, num2) => num1 && num2;
// Desafio 2
const calcArea = (base, height) => (base * height / 2);
// Desafio 3
const splitSentence = (nameToSplit) => nameToSplit.split(' ');
// Desafio 4
const concatName = (arrayOfStringsToConcat) => `${arrayOfStringsToConcat[arrayOfStringsToConcat.length - 1]}, ${arrayOfStringsToConcat[0]}`;
// Desafio 5
const footballPoints = (wins, ties) => (wins * 3) + ties;
// Desafio 6
const highestCount = (arrayToCount) => {
    let highestNumber = 0;
    let highestNumberCount = 0;
    for (let index = 0; index < arrayToCount.length; index += 1) {
        if (arrayToCount[index] > highestNumber) {
            highestNumber = arrayToCount[index];
            highestNumberCount = 0;
            highestNumberCount += 1;
        }
        else if (arrayToCount[index] === highestNumber) {
            highestNumberCount += 1;
        }
    }
    return highestNumberCount;
};
// Desafio 7
const catAndMouse = (mouse, cat1, cat2) => {
    let cat1ToMouse = Math.abs(mouse - cat1);
    let cat2ToMouse = Math.abs(mouse - cat2);
    if (cat1ToMouse > cat2ToMouse) {
        return 'cat2';
    }
    else if (cat1ToMouse < cat2ToMouse) {
        return 'cat1';
    }
    return 'os gatos trombam e o rato foge';
};
// Desafio 8
const fizzBuzz = (arrayToFizzBuzz) => {
    for (let index = 0; index < arrayToFizzBuzz.length; index += 1) {
        if (arrayToFizzBuzz[index] % 3 === 0 && arrayToFizzBuzz[index] % 5 === 0) {
            arrayToFizzBuzz[index] = 'fizzBuzz';
        }
        else if (arrayToFizzBuzz[index] % 3 === 0) {
            arrayToFizzBuzz[index] = 'fizz';
        }
        else if (arrayToFizzBuzz[index] % 5 === 0) {
            arrayToFizzBuzz[index] = 'buzz';
        }
        else {
            arrayToFizzBuzz[index] = 'bug!';
        }
    }
    return arrayToFizzBuzz;
};
// Desafio 9
const encode = (stringToEncode) => {
    stringToEncode = stringToEncode.toString().split('');
    for (let index = 0; index < stringToEncode.length; index += 1) {
        switch (stringToEncode[index]) {
            case 'a':
                stringToEncode[index] = 1;
                break;
            case 'e':
                stringToEncode[index] = 2;
                break;
            case 'i':
                stringToEncode[index] = 3;
                break;
            case 'o':
                stringToEncode[index] = 4;
                break;
            case 'u':
                stringToEncode[index] = 5;
                break;
        }
    }
    return stringToEncode.join('');
};
const decode = (stringToDecode) => {
    stringToDecode = stringToDecode.toString().split('');
    for (let index = 0; index < stringToDecode.length; index += 1) {
        switch (stringToDecode[index]) {
            case '1':
                stringToDecode[index] = 'a';
                break;
            case '2':
                stringToDecode[index] = 'e';
                break;
            case '3':
                stringToDecode[index] = 'i';
                break;
            case '4':
                stringToDecode[index] = 'o';
                break;
            case '5':
                stringToDecode[index] = 'u';
                break;
        }
    }
    return stringToDecode.join('');
};
module.exports = {
    calcArea,
    catAndMouse,
    compareTrue,
    concatName,
    decode,
    encode,
    fizzBuzz,
    footballPoints,
    highestCount,
    splitSentence,
};
