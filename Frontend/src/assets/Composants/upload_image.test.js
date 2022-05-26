import React from "react";
import '@testing-library/jest-dom'

//import verify from "./inscription"
const uploadImage = require ('./upload_image')

test("chek valid inscription", () => {
  expect(uploadImage.verifyUploadImage("https://i.goopics.net/knofc6.jpg", "Description")).toBe(true)
});

test("chek valid inscription", () => {
    expect(uploadImage.verifyUploadImage("", "Description")).toBe(false)
});

test("chek valid inscription", () => {
    expect(uploadImage.verifyUploadImage("https://i.goopics.net/knofc6.jpg", "")).toBe(false)
});

test("chek valid inscription", () => {
    expect(uploadImage.verifyUploadImage("", "")).toBe(false)
});

test("chek valid inscription", () => {
    expect(uploadImage.verifyUploadImage("https://", "Description")).toBe(false)
});

test("chek valid inscription", () => {
    expect(uploadImage.verifyUploadImage("https://i.goopics.net/knofc6.jpg", "T")).toBe(true)
});

test("chek valid inscription", () => {
    expect(uploadImage.verifyUploadImage("https://i.goopics.net/knofc6iuhiuaghdiughaiudghaiuhdiyghaupijiopjfpoijziopjfpozjoizfjoijoihdaiuhoauhoihjod.jpg", "Description")).toBe(false)
});