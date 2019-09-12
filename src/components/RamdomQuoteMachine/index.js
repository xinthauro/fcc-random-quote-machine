import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { getQuote } from './quote';
import style from './index.module.css';

const Quote = props => {
  return (
    <blockquote className={style.blockquote}>
      <p id='text'>{props.quote.text}</p>
      <footer id='author'>
        <cite>{props.quote.author}</cite>
      </footer>
    </blockquote>
  );
};

const TweetQuote = props => {
  const textURL = `"${props.quote.text}" ${props.quote.author}&hashtags=quotes`;
  const url = `https://twitter.com/intent/tweet?text=${encodeURI(textURL)}`;
  return (
    <a id='tweet-quote' className={style.button} href={url} target='_blank' rel='noopener noreferrer'>
      <FontAwesomeIcon icon={faTwitter} />
    </a>
  );
};

const NewQuote = props => {
  return (
    <button id='new-quote' className={style.button} type='button' onClick={props.onClick}>
      New quote
    </button>
  );
};

const RandomQuoteMachine = () => {
  const [quote, newQuote] = useState(getQuote());
  return (
    <div id='quote-box' className={style.container}>
      <Quote quote={quote} />
      <div className={style.buttongroup}>
        <TweetQuote quote={quote} />
        <NewQuote onClick={() => newQuote(getQuote())} />
      </div>
    </div>
  );
};

export default RandomQuoteMachine;
