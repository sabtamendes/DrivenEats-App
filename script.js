function foodCard(element, foodName, value) {
    const borderGreen = document.querySelector(".main-food .card-border");
    const check = document.querySelector(".main-food .card-border .check");
    if (borderGreen !== null) {
        borderGreen.classList.remove('card-border');
        check.classList.add('hidden');
    }
    element.classList.add('card-border');
    const tag = document.querySelector(".main-food .card-border .check");
    tag.classList.remove("hidden");
}

function drinkCard(element, drinkName, value){
    const borderGreen = document.querySelector(".main-drink .card-border");
    const check = document.querySelector(".main-drink .card-border .check");
    if(borderGreen !== null){
        borderGreen.classList.remove("card-border");
        check.classList.add("hidden");
    }
    element.classList.add("card-border");
    const tag = document.querySelector(".main-drink .card-border .check");
    tag.classList.remove("hidden");
}