import React from "react";
import '@testing-library/jest-dom'
//import verifyComment from "./post_comment"


const PostComment = require ('./post_comment')

test("tchek valid post_comment", () => {
    expect(PostComment.verifyComment("super")).toBe(true)
});


test("chek valid length", () => {
    expect(PostComment.verifyComment("",)).toBe(false)
});

test("chek valid length", () => {
    expect(PostComment.verifyComment("Ceci n'est qu'un test pour savoir si la longueur est correcte", "")).toBe(false)
});
