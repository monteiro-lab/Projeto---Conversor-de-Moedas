const convertButton = document.querySelector(".convert-button");
const selectCurrency = document.querySelector(".currency-select");

function convertCurrency() {
    const inputCurrencyValue = document.querySelector(".currency-input").value;
    const currencyValueToConvert = document.querySelector("#real-value");
    const convertedCurrencyValue = document.querySelector("#dolar-value");

    console.log(selectCurrency.value);
    const dolarToday= 5.2;  
    const euroToday= 6.2;

    const convertedToDolar = inputCurrencyValue / dolarToday;

    if(selectCurrency.value === "dolar") {
        convertedCurrencyValue.innerHTML = new  Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedToDolar);

    }
    
    if(selectCurrency.value === "euro") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    }


    currencyValueToConvert.innerHTML = new  Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);


}


convertButton.addEventListener("click", convertCurrency);


