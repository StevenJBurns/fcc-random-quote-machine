import React from 'react';

import AppMain from "./components/AppMain.jsx";
import AppHeader from "./components/AppHeader.jsx";
import AppFooter from "./components/AppFooter.jsx";

import './styles/App.css';


const urlQuotes = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

const colorSchemes = [
  /* red */     { dark: "#b71c1c", light: "#ffcdd2" },
  /* blue */    { dark: "#0d47a1", light: "#bbdefb" },
  /* purple */  { dark: "#311b92", light: "#d1c4e9" },
  /* orange */  { dark: "#bf360c", light: "#ffccbc" },
  /* green */   { dark: "#1b5e20", light: "#c8e6c9" },
  /* brown */   { dark: "#3e2723", light: "#d7ccc8" },
  /* gold */    { dark: "#ffab00", light: "#fff9c4" },
  /* grey */    { dark: "#424242", light: "#e0e0e0" }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      randomIndex: -1,
      randomScheme: 0
    };

    this.getRandomQuote = this.getRandomQuote.bind(this);
    this.getRandomColorScheme = this.getRandomColorScheme.bind(this);
  };

  getRandomQuote(e) {
    let length = this.state.quotes.length;
    let i = Math.floor(Math.random() * length);

    i === this.state.randomIndex ? this.getRandomQuote(e) : this.setState({ randomIndex: i});

    this.getRandomColorScheme();
  };

  getRandomColorScheme() {
    let r = Math.floor(Math.random() * colorSchemes.length);

    r === this.state.randomScheme ? this.getRandomColorScheme() : this.setState({ randomScheme: r });
  }

  componentDidMount() {
    fetch(urlQuotes)
      .then(res => res.json())
      .then(resJSON => this.setState({ quotes: [...resJSON["quotes"]] }))
      .then(this.getRandomQuote)
      .then(this.getRandomColorScheme);
  };

  render() {
    let q = this.state.quotes[this.state.randomIndex];

    return (
      <React.Fragment>
        <AppHeader scheme={colorSchemes[this.state.randomScheme]} />
        <AppMain getQuote={this.getRandomQuote} quote={q} scheme={colorSchemes[this.state.randomScheme]} />
        <AppFooter scheme={colorSchemes[this.state.randomScheme]} />
      </React.Fragment>
    );
  };
};

export default App;
