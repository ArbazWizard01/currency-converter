let rates = {};
const fromCurrency = document.querySelector("#fromCurrency");
const toCurrency = document.querySelector("#toCurrency");
const finalResult = document.querySelector("#result");
const amountTag = document.querySelector("#amount");
const createOptions = () => {
  console.log(rates);
  const optionList = Object.keys(rates);

  optionList.forEach((optionText) => {
    const option = document.createElement("option");
    const toption = document.createElement("option");
    option.innerHTML = optionText;
    toption.innerHTML = optionText;
    option.value = optionText;
    toption.value = optionText;
    fromCurrency.add(option);
    toCurrency.add(toption);
  });
};

document.querySelector("#convert").onclick = () => {
  let amount = amountTag.value;
  const fromRate = rates[fromCurrency.value];
  const toRate = rates[toCurrency.value];

  const finalValue = (amount / fromRate) * toRate;

  finalResult.innerHTML = `Converted  : ${finalValue.toFixed(3)}`;

  return false;
};

fetch("https://api.apilayer.com/fixer/latest?base=USD", {
  headers: { apikey: "6P443cv40ElMpnFyjauqPh32PoMlDSNh" },
})
  .then((response) => response)
  .then((response) => response.json())
  .then((data) => {
    rates = data.rates;
    createOptions();
  });
