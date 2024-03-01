function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 1,
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instruction-text");

  let key = "fed5efb5810a3ce4atecb36bcacfoaa9";
  let context = "You can create nice quotes";
  let prompt = `Create a 4 lines quote about ${instructionsInput.value} in basic HTML. Separate each line with a <br />. After the quote sign "SheCodes AI" in italic and in blue color. Do not use quotation marks`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `⏲ Generating a quote about ${instructionsInput.value}`;
  axios.get(apiUrl).then(displayQuote);
}

let peomFormElement = document.querySelector("#quote-generator-form");
peomFormElement.addEventListener("submit", generateQuote);
