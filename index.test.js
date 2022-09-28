import { convertToMorse } from "./index";
import {it, expect} from "@jest/globals";

//check if it's a string (not number)


//check a word

//check a character
it("check for a character A", () =>{
    const morsecode = convertToMorse("A");
    expect(morsecode).toBe(".-");
})

//check a sentence

