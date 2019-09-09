import React, { useState } from 'react';

import { getQuote } from './quote';

const Quote = props => {
  return (
    <blockquote>
      <p id='text'>{props.quote.text}</p>
      <footer id='author'>
        <cite>{props.quote.author}</cite>
      </footer>
    </blockquote>
  );
};

const Tweet = props => {
  const textURL = `"${props.quote.text}" ${props.quote.author}&hashtags=quotes`;
  const url = `https://twitter.com/intent/tweet?text=${encodeURI(textURL)}`;
  return (
    <a href={url} target='_blank' rel='noopener noreferrer' id='tweet-quote'>
      <i className='fab fa-twitter'></i>
    </a>
  );
};

const NewQuote = props => {
  return (
    <button onClick={props.onClick} id='new-quote'>
      New quote
    </button>
  );
};

const RandomQuoteMachine = () => {
  const [quote, newQuote] = useState(getQuote());
  return (
    <div id='quote-box'>
      <Quote quote={quote} />
      <Tweet quote={quote} />
      <NewQuote onClick={() => newQuote(getQuote())} />
    </div>
  );
};

export default RandomQuoteMachine;
