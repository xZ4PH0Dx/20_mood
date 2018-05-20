function getNewQuote(){
var quotes = JSON.parse(document.getElementById('quotes_json').innerHTML);
var quote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById("quoteSpace").innerHTML = quote.phrase;
  if (quote.signature){
    var signature = document.createElement('p');
    document.getElementById("quoteSpace").appendChild(signature);
    signature.innerHTML = quote.signature;
  }
}
getNewQuote()