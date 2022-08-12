let foodName;
let drinkName;
let dessertName;
let total = 0;
let valueFood = 0;
let valueDrink = 0;
let valueDessert = 0;
let clientName, address;



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
        food.innerHTML = `<li><div class="mealTitle">${foodName}</div></li>`

        let priceFood = document.querySelector('.price-food');
        priceFood.innerHTML = ` <li><div class="price-food">$${valueFood.toFixed(2)}</div></li>`

        let drink = document.querySelector('.drinkTitle');
        drink.innerHTML = `<li><div class="drinkTitle">${drinkName}</div></li>`

        let priceDrink = document.querySelector('.price-drinnk');
        priceDrink.innerHTML = `<li><div class="price-drink">$${valueDrink.toFixed(2)}</div></li>`


        let dessert = document.querySelector(".dessertTitle");
        dessert.innerHTML = `<li> <div class="dessertTitle">${dessertName}</div></li>`

        let priceDessert = document.querySelector(".price-dessert");
        priceDessert.innerHTML = `<li><div class="price-dessert">$${valueDessert.toFixed(2)}</div></li>`






    }

}
