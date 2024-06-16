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
  // console.log(author, date)
  authorDate.textContent = `${author} in ${date || "an unknown date"}`
  widget1.appendChild(authorDate)

  // 👉 TASK 3 - Build a  `"Corporate Speak" widget
  // will cycle through 2 adverbs, 2 nouns, and 2 verbs
  const randomAdverb1 = adverbs[Math.floor(Math.random() * adverbs.length)]
  const randomAdverb2 = adverbs[Math.floor(Math.random() * adverbs.length)]
  const randomNoun1 = nouns[Math.floor(Math.random() * nouns.length)]
  const randomNoun2 = nouns[Math.floor(Math.random() * nouns.length)]
  const randomVerb1 = verbs[Math.floor(Math.random() * verbs.length)]
  const randomVerb2 = verbs[Math.floor(Math.random() * verbs.length)]

  const mumboJumbo = `We need to ${randomVerb1} our ${randomNoun1} ${randomAdverb1} in order to ${randomVerb2} our ${randomNoun2} ${randomAdverb2}.`
  const paragraph = document.createElement('p')
  paragraph.textContent = mumboJumbo
  document.querySelector(".corporatespeak").appendChild(paragraph)


  // 👉 TASK 4 - Build a "Countdown" widget
  // step 1: grab elements using the dom
  const countdownWidget = document.querySelector(".countdown");
  // const countdownNums = ["T-minus 5...", "T-minus 4...", "T-minus 3...", "T-minus 2...", "T-minus 1...", "Liftoff! 🚀"];

  let count = 5;
  const countdown = document.createElement('p')
countdown.textContent = `T-minus ${count}...`
countdownWidget.appendChild(countdown)

setInterval(() => {
  if (count === 1) {
    countdown.textContent = `Liftoff! 🚀`;
  } else {
count--;
countdown.textContent = `T-minus ${count}...`;
  }
}, 1000)


// document.querySelector(".countdown").appendChild(countdown);




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
