function createHome() {

    const home = document.createElement("div");
    home.classList.add("home");

    home.appendChild(createPara("SCRAN IS A WAY OF LIFE ... ONE THAT EMBRACES ENTROPY AND UNFETTERED CULINARY CREATIVITY"));

    const homeImg = document.createElement("img");
    homeImg.src = '../src/resources/Styling-Images/PitchBG.jpg'

    home.appendChild(homeImg);

    home.appendChild(createPara("Scran is, in essence, the obscene but delightful sustenance available for purchase at stadiums. “Footy,” of course, comes from “football”, a sport that inspires a certain level of mania around the world"))
    home.appendChild(createPara("It describes the object, the act, and the spirit of hearty, enthusiastic eating. The unrepentant gluttony implied by the term is crucial to its core: sloppy, drunken scran is far more enjoyable at a soccer match than a delicate epicurean nibble. Footy Scran reflects that ethos; each food item shared on the account can best be described as “unrestrained.”"));



    return home;
}


function createPara(text) {
    const para = document.createElement("p");
    para.textContent = text;
    return para;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;