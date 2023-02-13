function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    
    menu.appendChild(createMenuItem(
        "Avro FC Breakfast Wrap",
        "Sausages, Bacon, Egg, Hash Browns and Cheese",
        "£6",
        "../src/Resources/Menu-Images/Avro-Breakfast-Wrap.jpeg"
    ))
    
    return menu;
}

function createMenuItem(title, desc, price, image){
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodTitle = document.createElement("h2");
    foodTitle.textContent = title;

    const foodDesc = document.createElement("p");
    foodDesc.textContent = desc;

    const foodPrice = document.createElement("h3");
    foodPrice.textContent = price;

    const foodImage = document.createElement("img");
    foodImage.src = image;
    foodImage.alt = `${title}`;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodTitle);
    menuItem.appendChild(foodDesc);
    menuItem.appendChild(foodPrice);
    

    return menuItem;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;