const quoteContainer = document.getElementById('quote-cont');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];
// Show New Quote
function newQuote() {
  // pick a random quote from the apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // Check if Author field is blank and replace it with 'Unknown'
  if (!quote.author) {
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = quote.author;
  }
  // Check Quote length to determine styling
  if (quote.text.length > 50) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
  quoteText.textContent = quote.text;
} //newQuote close

// Get Quotes from API
async function getQuotes() {
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    const resp = await fetch(apiUrl);
    apiQuotes = await resp.json();
    newQuote();
  } catch (error) {
    // Catch Error Here
  }
} //aysnc close

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();
