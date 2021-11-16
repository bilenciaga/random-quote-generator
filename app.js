const quoteContainer = document.querySelector('#quote-container');
const quoteText = document.querySelector('#quote');
const authorText = document.querySelector('#author');
const twitterButton = document.querySelector('#twitter');
const shuffleButton = document.querySelector('#shuffle');



let quotes = [];

// shuffle quote 
function shuffleQuote() {
    const shuffle = quotes[Math.floor(Math.random() * quotes.length )];
    // if shuffle.author is not found, replace authorText.textContent to 'unknown'
    if (!shuffle.author) {
        authorText.textContent = 'Unknown';
    }
    else{
        authorText.textContent = shuffle.author;
    }
    // if shuffle.text is too long:
    if (shuffle.text.length > 120) {
        quoteText.classList.add('long-quote');
    }
    quoteText.textContent = shuffle.text;


};


// get quote from api 
async function getQuotes() {
    const base = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(base);
        quotes = await response.json();
        shuffleQuote();
    } 
    catch (error){

    }
};

// tweet
function tweetQuote() {
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterURL, '_blank');
}

// add event listener 
shuffleButton.addEventListener('click',getQuotes);
twitterButton.addEventListener('click',tweetQuote);

getQuotes();



