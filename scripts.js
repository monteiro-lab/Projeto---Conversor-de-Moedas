const convertButton = document.querySelector(".convert-button");


function convertCurrency() {
    const inputCurrencyValue = document.querySelector(".currency-input").value;

    const dolarToday= 5.2;  
    const euroToday= 6.2;

    const convertedToDolar = inputCurrencyValue / dolarToday;
    const convertedToEuro = inputCurrencyValue / euroToday;
    console.log(convertedToDolar);
    console.log(convertedToEuro);
}


convertButton.addEventListener("click", convertCurrency);


