import $ from "jquery";
import "./App.css";
import React from "react";

const quote = [
  {
    quote:
      "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
    author: "Jesse Owens",
  },
  {
    quote:
      "It’s not the years in your life that count. It’s the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "The most common way people give up their power is by thinking they don’t have any.",
    author: "Alice Walker",
  },
  {
    quote:
      "I am not a product of my circumstances. I am a product of my decisions.",
    author: "Stephen Covey",
  },
  {
    quote:
      "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
    author: "Aristotle",
  },
  {
    quote: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford",
  },
  {
    quote:
      "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
    author: "Oprah Winfrey",
  },
  {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
  },
  {
    quote:
      "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    quote:
      "In order to succeed, your desire for success should be greater than your fear of failure.",
    author: "Bill Cosby",
  },
];

const colors = [
  "grey",
  "red",
  "aqua",
  "charteuse",
  "lime",
  "beige",
  "coral",
  "gold",
  "pink",
  "violet",
];

function randomIndex() {
  var randomIndex = Math.floor(Math.random() * 9);
  return randomIndex;
}

//Constructor
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxColor: "",
    };
  }

  getRandomColor() {
    const randomColor = randomIndex();
    return colors[randomColor];
  }

  handleClick() {
    this.setState(({ boxColor }) => ({
      boxColor: this.getRandomColor(),
    }));
    var randomQuote = quote[randomIndex()];
    $("#text").html(randomQuote.quote);
    $("#author").html(randomQuote.author);
  }

  render() {
    var randomQuote = quote[randomIndex()];
    return (
      <div className="wrapper">
        <div id="quote-box" style={{ backgroundColor: this.state.boxColor }}>
          <h1 id="text">{randomQuote.quote}</h1>
          <p id="author">{randomQuote.author}</p>
          <button id="new-quote" onClick={() => this.handleClick()}>
            Button
          </button>
          <a id="tweet-quote" href="twitter.com/intent/tweet">
            Twitter
          </a>
        </div>
      </div>
    );
  }
}

export default App;
