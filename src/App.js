import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import TxDataAssignContainer from './containers/TxDataAssignContainer';
import TxDataListContainer from './containers/TxDataListContainer';
import UploadContainer from './containers/UploadContainer';
import RulesListContainer from './containers/RulesListContainer';
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
        <Route path="/txdata/:id/assign" component={TxDataAssignContainer} />
        <Route path="/txdata/upload" component={UploadContainer} />
        <Route path="/txdata" exact component={TxDataListContainer} />
        <Route path="/rules" component={RulesListContainer} />
      </Router>
    );
  }
}

export default App;
