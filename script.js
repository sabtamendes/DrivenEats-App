let foodName, drinkName, dessertName, clientName, address;
let total = 0;
let valueFood = 0;
let valueDrink = 0;
let valueDessert = 0;




let count = 0;

function foodCard(element, food, value) {
    const borderGreen = document.querySelector(".main-food .card-border");
    const check = document.querySelector(".main-food .card-border .check");
    if (borderGreen !== null) {
        borderGreen.classList.remove('card-border');
        check.classList.add('hidden');
        count = count - 1;
    }
    element.classList.add('card-border');
    const tag = document.querySelector(".main-food .card-border .check");
    tag.classList.remove("hidden");
    count = count + 1;

    foodName = food;
    valueFood = value;


    actionButton();
}


function drinkCard(element, drink, value) {
    const borderGreen = document.querySelector(".main-drink .card-border");
    const check = document.querySelector(".main-drink .card-border .check");
    if (borderGreen !== null) {
        borderGreen.classList.remove("card-border");
        check.classList.add("hidden");
        count = count - 1;
    }
    element.classList.add("card-border");
    const tag = document.querySelector(".main-drink .card-border .check");
    tag.classList.remove("hidden");
    count = count + 1;


    drinkName = drink;
    valueDrink = value;


    actionButton();
}

function dessertCard(element, dessert, value) {
    const borderGreen = document.querySelector(".main-dessert .card-border");
    const check = document.querySelector(".main-dessert .card-border .check");
    if (borderGreen !== null) {
        borderGreen.classList.remove('card-border');
        check.classList.add('hidden');
        count = count - 1;
    }
    element.classList.add('card-border');
    const tag = document.querySelector(".main-dessert .card-border .check");
    tag.classList.remove('hidden');
    count = count + 1;

    dessertName = dessert;
    valueDessert = value;



    actionButton();
}

function actionButton() {

    if (count === 3) {
        let green = document.querySelector('footer .border');
        green.classList.add('greenButton');
        green.innerHTML = `Complete Order`
    }
    resetCards();
}

function resetCards() {
    if (count !== 3) {
        const greenButton = document.querySelector(".border");
        greenButton.classList.remove('greenButton');
        greenButton.innerHTML = `Select  3 items <br />to complete the order`;
    }
}

function orderFood() {

    if (count === 3) {
        clientName = prompt("Tell us your name, please! 😊");
        address = prompt("Now, your address!");

        const showModal = document.querySelector(".modal-container");
        showModal.classList.remove('ocult');


        let food = document.querySelector('.mealTitle');
        food.innerHTML = `<div class="mealTitle">${foodName}</div>`;

        let priceFood = document.querySelector('.price-food');
        priceFood.innerHTML = `<div class="price-food">$${valueFood.toFixed(2)}</div>`;

        let drink = document.querySelector(".drinkTitle");
        drink.innerHTML = `<div class="drinkTitle">${drinkName}</div>`;

        let priceDrink = document.querySelector(".price-drink");
        priceDrink.innerHTML = `<div class="price-drink">$${valueDrink.toFixed(2)}</div>`;

        let dessert = document.querySelector(".dessertTitle");
        dessert.innerHTML = `<div class="dessertTitle">${dessertName}</div>`;

        let dessertValue = document.querySelector(".price-dessert");
        dessertValue.innerHTML = `<div class="price-dessert">$${valueDessert.toFixed(2)}</div>`;

        total = document.querySelector(".value");
        total.innerHTML = ` <div class="value">$${(valueFood + valueDrink + valueDessert).toFixed(2)}</div>`
    }

}


function orderConfirm() {
    console.log('funciona')
    let mensage = `    Hi, I would like to order:\n- Dish: ${foodName}\n- Drink: ${drinkName} \n- Dessert: ${dessertName}\nTotal: ${(valueFood + valueDrink + valueDessert).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}\nName: ${clientName}\nAddress: ${address}
    `
    mensage = encodeURIComponent(mensage);
    let whatsapp = `https://wa.me/5592995049656?text=`;
    window.open(whatsapp + mensage)
}

function orderCancel() {
    const removeModal = document.querySelector(".modal-container");
    removeModal.classList.add("ocult");
    refreshPage();
}

function refreshPage() {
    location.reload();
}