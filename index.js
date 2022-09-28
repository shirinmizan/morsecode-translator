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
   "Z": "--.."
};


export const convertToMorse = (word) => {
    let finalMorseCode = '';

    for(let i=0; i<word.length; i++){
        finalMorseCode += morsecode[word[i]];
    };
    return finalMorseCode;
}

console.log(convertToMorse("ABC"));

