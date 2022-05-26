import React from "react";
import '@testing-library/jest-dom'

//import verify from "./inscription"
const inscr = require ('./inscription')

test("chek valid inscription", () => {
  expect(inscr.verify("Louis", "password_secret", "louis@student.com", "11/03/2001")).toBe(true)
});

test("chek unvalid inscription with an empty password", () => {
  expect(inscr.verify("Louis", "", "louis@student.com", "11/03/2001")).toBe(false)
});

test("chek unvalid inscription with an empty pseudo", () => {
  expect(inscr.verify("", "password_secret", "louis@student.com", "11/03/2001")).toBe(false)
});

test("chek unvalid inscription with an empty mail", () => {
  expect(inscr.verify("Louis", "password_secret", "", "11/03/2001")).toBe(false)
});

test("chek unvalid inscription with an empty birth", () => {
  expect(inscr.verify("louis", "password_secret", "louis@student.com", "")).toBe(false)
});

test("chek unvalid inscription with a too short pseudo", () => {
  expect(inscr.verify("ui", "password_secret", "louis@student.com", "11/12/2003")).toBe(false)
});

test("chek unvalid inscription with a too short password", () => {
  expect(inscr.verify("louis", "pa", "louis@student.com", "12/15/2006")).toBe(false)
});

test("chek unvalid inscription with a too short pseudo and password", () => {
  expect(inscr.verify("ui", "pa", "louis@student.com", "11/03/2002")).toBe(false)
});

test("chek unvalid inscription with an invalid email", () => {
  expect(inscr.verify("louis", "password_secret", "@student.com", "12/05/2004")).toBe(false)
});

test("chek unvalid inscription with an invalid email", () => {
  expect(inscr.verify("louis", "password_secret", "louis@student.comoeoe", "12/05/2004")).toBe(false)
});

test("chek unvalid inscription with an invalid email", () => {
  expect(inscr.verify("louis", "password_secret", "louis@", "12/05/2004")).toBe(false)
});

test("chek unvalid inscription with an invalid email", () => {
  expect(inscr.verify("louis", "password_secret", "louis@student.c", "12/05/2004")).toBe(false)
});

test("chek unvalid inscription with an invalid email", () => {
  expect(inscr.verify("louis", "password_secret", "louis", "12/05/2004")).toBe(false)
});

test("chek unvalid inscription with an invalid email", () => {
  expect(inscr.verify("louis", "password_secret", "@", "12/05/2004")).toBe(false)
});