function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    
    menu.appendChild(createMenuItem(
        "Avro FC Breakfast Wrap",
        "Sausages, Bacon, Egg, Hash Browns and Cheese",
        "£6",
        "92.1% Scran Rating",
        "../src/Resources/Menu-Images/Avro-Breakfast-Wrap.jpeg"
    ))

    menu.appendChild(createMenuItem(
        "FC Dallas Short Rib Grilled Cheese",
        "Five-hour braided beef short ribs, melted Monterey jack & cheddar slices grilled between two buttered sliced of Texas toast",
        "$14",
        "95.6% Scran Rating",
        "../src/Resources/Menu-Images/FC-Dallas-Braised-Ribs.jpeg"
    ))
    
    menu.appendChild(createMenuItem(
        "Grimsby Town Soy & Honey Beef Brisket Size 7 Sandwich",
        "Served with Waffle Chips and a Scotch Egg",
        "£8.50",
        "91.4% Scran Rating",
        "../src/Resources/Menu-Images/Beef-Brisket-Grimsby.jpeg"
    ))

    menu.appendChild(createMenuItem(
        "Rangers FC Signature Burger",
        "",
        "£5.90",
        "10.8% Scran Rating",
        "../src/Resources/Menu-Images/Rangers-Burger.jpeg"
    ))

    menu.appendChild(createMenuItem(
        "Aberdeen FC Chilli Dog",
        "Cheese, Jalapeños & Nachos",
        "£6.50",
        "87.9% Scran Rating",
        "../src/Resources/Menu-Images/Aberdeen-Chilli-Dog.jpeg"
    ))

    menu.appendChild(createMenuItem(
        "Tottenham Hotspur Fried Chicken",
        "Served with a bag of chips",
        "£8.95",
        "88.6% Scran Rating",
        "../src/Resources/Menu-Images/Spurs-Chicken.jpeg"
    ))

    menu.appendChild(createMenuItem(
        "Bristol Rovers Piggin Fries",
        "",
        "£6",
        "82.6% Scran Rating",
        "../src/Resources/Menu-Images/Bristol-Fries.jpeg"
    ))

    menu.appendChild(createMenuItem(
        "Birmingham City Butter Chicken",
        "Served with Chips & Rice",
        "£10",
        "91.2% Scran Rating",
        "../src/Resources/Menu-Images/Birmingham-Butter-Chicken.jpeg"
    ))

    menu.appendChild(createMenuItem(
        "Ionikos FC Jaffa Cake Donut",
        "",
        "€2.50",
        "83.9% Scran Rating",
        "../src/Resources/Menu-Images/Ionikos-Jaffa.jpeg"
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