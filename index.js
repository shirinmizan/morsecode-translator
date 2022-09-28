//make a function convertToMorse 
//parameters {string}
//return: string (morse code)
//create an object with the morse code translation

const morsecode =
{
   "A": ".-",
   "B": "-...",
   "C": "-.-.",
   "D": "-..",
   "E": ".",
   "F": "..-.",
   "G": "--.",
   "H": "....",
   "I": "..",
   "J": ".---",
   "K": "-.-",
   "L": ".-..",
   "M": "--",
   "N": "-.",
   "O": "---",
   "P": ".--.",
   "Q": "--.-",
   "R": ".-.",
   "S": "...",
   "T": "-",
   "U": "..-",
   "W": ".--",
   "X": "-..-",
   "Y": "-.--",
   "Z": "--..",
   ".": ". _ . _ . _",
   " ": "/"

};

const englishText = document.getElementsByID("textInput");
const convertButton = document.getElementsByClassName ("fetch_code")[0];
const morseText = document.getElementById("textMorse");

export const convertToMorse = (word) => {
    let finalMorseCode = '';

    for(let i=0; i<word.length; i++){
        finalMorseCode += morsecode[word[i]];
    };
    return finalMorseCode;
}

console.log(convertToMorse("ABC"));

