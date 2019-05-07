import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import TxDataListContainer from './containers/TxDataListContainer';
import UploadContainer from './containers/UploadContainer';
class App extends Component {
  render() {
    return (
      <Router>
      <div>
          <Header />
          <div className="content">
            <div className="sidebar">
            </div>
            <main className="main">
            </main>
          </div>
        </div>
        <Route path="/" exact component={Home} />
        <Route path="/txdata" component={TxDataListContainer} />
        <Route path="/txdata/upload" component={UploadContainer} />
      </Router>
    );
  }
}

export default App;
