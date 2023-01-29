const quotes = [
  {
    text: "Life is too short to learn German.",
    author: "Kurt Vonnegut"
  },
  {
    text: "Be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "If you want to achieve greatness, stop asking for permission.",
    author: "Unknown"
  }
];

const quoteText = document.getElementById("text");
const quoteAuthor = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

newQuoteBtn.addEventListener("click", displayNewQuote);

function displayNewQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.innerText = quotes[randomIndex].text;
  quoteAuthor.innerText = quotes[randomIndex].author;
}
