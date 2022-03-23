const btn = document.querySelector('#main-btn');

function generate() {
  const quotes = {
    '- Deepak Chopra':
      'Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions.',
    '- C.S. Lewis ':
      'I was not born to be free---I was born to adore and obey.',
    '― Charlotte Eriksson':
      "There are very few friends that will lie down with you on empty streets in the middle of the night, without a word. No questions, no asking why, just quietly lay there with you, observing the stars, until you're ready to get back up on your feet again and walk the last bit home, softly holding your hand as a quiet way of saying I'm here     It was a beautiful night",
  };
  const authors = Object.keys(quotes);
  const author = authors[Math.floor(Math.random() * authors.length)];

  const quote = quotes[author];

  document.getElementById('quote').innerHTML = quote;
  document.getElementById('author').innerHTML = author;
}

btn.addEventListener('click', generate);
