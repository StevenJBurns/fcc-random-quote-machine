import React from "react";


const AppMain = (props) => {
  const { getQuote, quote, bg } = props;

  return (
    <main id="app-main" style={{ backgroundColor: bg }}>
      <section id="quote-box">
        <h2 id="text">&quot;{quote ? quote.quote : null}&quot;</h2>
        <h4 id="author">-- {quote ? quote.author : null}</h4>
        <a id="tweet-quote" href="https://twitter.com/intent/tweet">TWEET</a>
        <button id="new-quote" onClick={getQuote}>New Quote</button>
      </section>
    </main>
  );
};

export default AppMain;
