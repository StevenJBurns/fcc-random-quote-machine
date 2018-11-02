import React from 'react';

import AppMain from "./components/AppMain.jsx";
import AppHeader from "./components/AppHeader.jsx";
import AppFooter from "./components/AppFooter.jsx";
import AppNav from "./components/AppNav.jsx";

import './styles/App.css';
// import logo from './assets/logo.svg';


const urlQuotes = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

const colorSchemes = {
  red : [],
  blue: [],
  purple: [],
  orange: [],
  green: [],
  brown: [],
  gold: [],
  grey: []
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      randomQuote: {},
      randomIndex: -1
    };

    this.getRandomQuote = this.getRandomQuote.bind(this);
  };

  getRandomQuote(e) {
    let length = this.state.quotes.length;
    let i = Math.floor(Math.random() * length);
    this.setState({ randomIndex: i});
  };

  componentDidMount() {
    fetch(urlQuotes)
      .then(res => res.json())
      .then(resJSON => this.setState({ quotes: [...resJSON["quotes"]] }))
      .then(this.getRandomQuote);
  };

  render() {
    let q = this.state.quotes[this.state.randomIndex]

    return (
      <React.Fragment>
        <AppHeader>
          <AppNav />
        </AppHeader>
        <AppMain getQuote={this.getRandomQuote} quote={q} />
        <AppFooter>
          <AppNav />
        </AppFooter>
      </React.Fragment>
    );
  };
};

export default App;
