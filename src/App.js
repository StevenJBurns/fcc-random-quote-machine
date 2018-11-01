import React from 'react';

import AppMain from "./components/AppHeader.jsx";
import AppHeader from "./components/AppHeader.jsx";
import AppFooter from "./components/AppFooter.jsx";
import AppNav from "./components/AppNav.jsx";

import './styles/App.css';
import logo from './assets/logo.svg';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppHeader />
        <AppNav />
        <AppMain />
        <AppFooter />
      </React.Fragment>
    );
  }
}

export default App;

{/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>Edit <code>src/App.js</code> and save to reload.</p>
  <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
</header>
</div> */}
