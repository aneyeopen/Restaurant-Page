function createHome() {

    const home = document.createElement("div");
    home.classList.add("home");

    home.appendChild(createPara("This is just placeholder text"));

    




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