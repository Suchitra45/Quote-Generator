const quotes = [
  { quote: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { quote: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { quote: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
  { quote: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { quote: "First, solve the problem. Then, write the code.", author: "John Johnson" }
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex].quote;
  document.getElementById("author").innerText = "- " + quotes[randomIndex].author;
}