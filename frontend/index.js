function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
const widgets = document.querySelectorAll("section>div");
widgets.forEach(widget => {
  widget.classList.add("widget")
});

  // console.log(widgets)

// 👉 TASK 2 - Build a "Quote of the Day" widget
const randomIdx = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[randomIdx];
// flesh out quote
const quote = document.createElement("div") //create a div
const quoteText = randomQuote.quote // grabs the data
quote.textContent = quoteText //modify text content of the quote
const widget1 = document.querySelector(".quoteoftheday")
widget1.appendChild(quote)
//flesh out author & date
const authorDate = document.createElement('div')
const { author, date } = randomQuote
console.log(author, date)
authorDate.textContent = `${author} in ${date || "an unknown date"}`
widget1.appendChild(authorDate)

  // 👉 TASK 3 - Build a  `"Corporate Speak" widget
  //  ✨ add your code here

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
