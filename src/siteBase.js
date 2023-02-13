import loadHome from "./Home"
import loadMenu from "./Menu"
import loadContact from "./Contact"



function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    const restaurantName = document.createElement('div');
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Scran St Radio";

    header.appendChild(restaurantName);
    header.appendChild(createNav());


    return header;
}

function createNav() {
    const navBar = document.createElement("div");
    navBar.classList.add("nav-bar");

    const homeButton = document.createElement("button");
    homeButton.classList.add("nav-button");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        loadHome();
    })

    const menuButton = document.createElement("button");
    menuButton.classList.add("nav-button");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        loadMenu();
    })

    const contactButton = document.createElement("button");
    contactButton.classList.add("nav-button");
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        loadContact();
    })

    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton);

    return navBar;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".nav-button");

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    })

    button.classList.add("active");
}

function createMain() {
    const main = document.createElement("div");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}



function startWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());


    setActiveButton(document.querySelector(".nav-button"));
    loadHome();

}


export default startWebsite;