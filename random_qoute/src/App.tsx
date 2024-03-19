import { useState } from 'react'
import quotes from './assets/qoutes.json'
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './App.css'


interface Quote {
  quote: string;
  author: string;
}

const getRandomQoute = (): Quote => {
  return quotes[Math.floor(Math.random () * quotes.length)]
};

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`;
}

function App() {
  const [quote, setQoute] = useState<Quote>(getRandomQoute());

  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote =  () => {
    setQoute(getRandomQoute())
    setRandomColor(getRandomColor())

  }

  const transition = "all 1s"

  return (
    <div className='background' style={{backgroundColor: randomColor, transition}}>
      <div id='quote-box'>
        <div className="quote-content" style={{color: randomColor, transition}}>
          <h2 id='text'>
          <FaQuoteLeft size={30} style={{marginRight: '10px'}} />
            {quote.quote}
          <FaQuoteRight size={30} style={{marginLeft: '10px'}} />
          </h2>
          <h4 id='author'>- {quote.author}</h4>
        </div>
        <div className='buttons'>
        <a id="tweet-quote" title="Tweet this quote!" target="_top" 
        href={`https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=${quote.quote}`} 
        style={{backgroundColor: randomColor, marginRight: '10px', transition}} >
          <FaTwitter color='white' />
          </a>
          <button id='new-quote' onClick={changeQuote} style={{backgroundColor: randomColor, transition}}>Change Quote</button>
        </div>
      </div>
      
    </div>
  )
}

export default App
