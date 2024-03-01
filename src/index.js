function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["love is beautiful"],
    autoStart: true,
    cursor: null,
    delay: 1,
  });
}

let peomFormElement = document.querySelector("#quote-generator-form");
peomFormElement.addEventListener("submit", generateQuote);
