function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    
    menu.appendChild(createMenuItem(
        "Avro FC Breakfast Wrap",
        "Sausages, Bacon, Egg, Hash Browns and Cheese",
        "£6",
        "92.1% Scran",
        "../src/Resources/Menu-Images/Avro-Breakfast-Wrap.jpeg"
    ))
    
    return menu;
}

function createMenuItem(title, desc, price, scranPer, image){
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodTitle = document.createElement("h2");
    foodTitle.classList.add("food-title");
    foodTitle.textContent = title;

    const foodDesc = document.createElement("p");
    foodDesc.classList.add("food-desc");
    foodDesc.textContent = desc;

    const foodPrice = document.createElement("h3");
    foodPrice.classList.add("food-price");
    foodPrice.textContent = price;

    const foodScranPer = document.createElement("h5");
    foodScranPer.classList.add("food-scran-per");
    foodScranPer.textContent = scranPer;

    const foodImage = document.createElement("img");
    foodImage.classList.add("food-image");
    foodImage.src = image;
    foodImage.alt = `${title}`;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodTitle);
    menuItem.appendChild(foodDesc);
    menuItem.appendChild(foodPrice);
    menuItem.appendChild(foodScranPer);
    
    

    return menuItem;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;