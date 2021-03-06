const Quote = props => {
  return (
      <blockquote className='blockquote'>
        <p className='mb-0 text-muted text-center' id='text'>{props.quote.text}</p>
        <footer className='blockquote-footer text-right' id='author'><cite>{props.quote.author}</cite></footer>
      </blockquote>
  );
}

const Tweet = props => {
  const textURL = `"${props.quote.text}" ${props.quote.author}&hashtags=quotes`;
  const url = `https://twitter.com/intent/tweet?text=${encodeURI(textURL)}`;
  return (
    <a href={url} target='_blank' rel='noopener noreferrer' className='btn btn-light' id='tweet-quote'><i className="fab fa-twitter"></i></a>
  );
}

const NewQuote = props => {
  return (
    <button onClick={props.onClick} className='btn btn-light' id='new-quote'>New quote</button>
  );
}

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: getRandomQuote(),
    }

    this.handleNewQuote = this.handleNewQuote.bind(this);
  }

  handleNewQuote() {
    this.setState({
      quote: getRandomQuote(),
    });
  }

  render() {
    return (
      <div className='container-fluid' id='quote-box'>
        <div className='container'>
          <div className='d-flex justify-content-center my-5'>
            <Quote quote={this.state.quote} />
          </div>
          <div className='d-flex justify-content-center my-3'>
            <Tweet quote={this.state.quote} />
            <NewQuote onClick={this.handleNewQuote} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<QuoteBox />, document.getElementById('root'));

