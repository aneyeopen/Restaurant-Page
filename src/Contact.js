function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");


    const phoneNumber = document.createElement("div");
    phoneNumber.textContent = "123 456 789";

    const address = document.createElement("div");
    address.textContent = "123 Scran St, Melbourne VIC 3001";


    contact.appendChild(phoneNumber);
    contact.appendChild(address);

    return contact;
}

function loadContact() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;