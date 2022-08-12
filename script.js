let count = 0;

function foodCard(element, foodName, value) {
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
    actionButton();
}


function drinkCard(element, drinkName, value) {
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
    actionButton();
}

function dessertCard(element, dessertName, value) {
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

function resetCards(){
    if(count !== 3){
        const greenButton = document.querySelector(".border");
        greenButton.classList.remove('greenButton');
        greenButton.innerHTML = `Select  3 items <br />to complete the order`;
    }
}