import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import {GetProfil} from "../src/assets/Composants/getProfil";


//Création d'un container
let container = null;

//Avant chaque test
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

//Après chaque test
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});




it("Affichage donnée du profil", async () => {

    const bddResponse = [
        {
            "id": "1",
            "Nickname": "Raph",
            "PWD": "********",
            "Mail": "raphaelmarto@test.be",
            "Birth": "29/05/20"
        },
        {
            "id": "2",
            "Nickname": "",
            "PWD": "",
            "Mail": "",
            "Birth": ""
        },
    ];

    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeResponse)
        })
    );

    render(<GetProfil/>, container);

    expect(container.querySelector("[test-Nickname='card-title']")[0].textContent).toEqual("Raph"); //Test Nickname
    expect(container.querySelector("[test-Mail='card-title']")[0].textContent).toEqual("raphaelmarto@test.be"); //Test Mail
    expect(container.querySelector("[test-Birth='card-title']")[0].textContent).toEqual("29/05/20"); //Test Birth

    expect(container.querySelector("[test-Nickname='card-title']")[1].textContent).toEqual("undefine"); //Test Nickname
    expect(container.querySelector("[test-Mail='card-title']")[1].textContent).toEqual("undefine"); //Test Mail
    expect(container.querySelector("[test-Birth='card-title']")[1].textContent).toEqual("undefine"); //Test Birth

    global.fetch.mockRestore();
});