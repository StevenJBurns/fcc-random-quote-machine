import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons"


const AppMain = (props) => {
  const { getQuote, quote, scheme } = props;

  return (
    <main id="app-main" style={{ backgroundColor: scheme["dark"] }}>
      <section id="quote-box" style={{ backgroundColor: scheme["light"] }}>
        <h2 id="text">&quot;{quote ? quote.quote : null}&quot;</h2>
        <h4 id="author">-- {quote ? quote.author : null}</h4>
        <div id="div-button-wrapper">
          <a id="tweet-quote" href="https://twitter.com/intent/tweet">
            <FontAwesomeIcon icon={faTwitterSquare} className="faIcon" color={scheme["dark"]} size="3x" />
          </a>
          <button id="new-quote" style={{ backgroundColor: props.scheme["dark"] }} onClick={getQuote}>New Quote</button>
        </div>
      </section>
    </main>
  );
};

export default AppMain;
