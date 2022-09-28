import { convertToMorse } from "./index";
import {it, expect} from "@jest/globals";

//check a word
it("check for a character SHIRIN", () =>{
    const morsecode = convertToMorse("SHIRIN");
    expect(morsecode).toBe("..........-...-.");
})

//check a character
it("check for a character A", () =>{
    const morsecode = convertToMorse("A");
    expect(morsecode).toBe(".-");
})

//check a sentence
it("check for a character TEST MY SENTENCE", () =>{
    const morsecode = convertToMorse("TEST MY SENTENCE");
    expect(morsecode).toBe("-....-/---.--/....-.-.-.-.-..");
})
