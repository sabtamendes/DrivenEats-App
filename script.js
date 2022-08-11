let count = 0;

function foodCard(element, foodName, value) {
    const borderGreen = document.querySelector(".main-food .card-border");
    const check = document.querySelector(".main-food .card-border .check");
    if (borderGreen !== null) {
        borderGreen.classList.remove('card-border');
        check.classList.add('hidden');
        count = count - 1;
        console.log(count)
    }
    element.classList.add('card-border');
    const tag = document.querySelector(".main-food .card-border .check");
    tag.classList.remove("hidden");
    count = count + 1;
}


function drinkCard(element, drinkName, value) {
    const borderGreen = document.querySelector(".main-drink .card-border");
    const check = document.querySelector(".main-drink .card-border .check");
    if (borderGreen !== null) {
        borderGreen.classList.remove("card-border");
        check.classList.add("hidden");
        count = count - 1;
        console.log(count)
    }
    element.classList.add("card-border");
    const tag = document.querySelector(".main-drink .card-border .check");
    tag.classList.remove("hidden");
    count = count + 1;
}

function dessertCard(element, dessertName, value) {
    const borderGreen = document.querySelector(".main-dessert .card-border");
    const check = document.querySelector(".main-dessert .card-border .check");
    if (borderGreen !== null) {
        borderGreen.classList.remove('card-border');
        check.classList.add('hidden');
        count = count - 1;
        console.log(count)
    }
    element.classList.add('card-border');
    const tag = document.querySelector(".main-dessert .card-border .check");
    tag.classList.remove('hidden');
    count = count + 1;
}

function greenButton() {

    if (count === 3) {
        let green = document.querySelector('footer .border');
        green.classList.add('greenButton');
        green.innerHTML = `Complete Order`
        console.log(count)
    }
}
