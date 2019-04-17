import React, { Component } from 'react';
import './App.css';
import './Upload';
import UploadContainer from './containers/UploadContainer';

class App extends Component {
  render() {
    return (
      <div>
        <UploadContainer />
      </div>
    );
  }
}

export default App;
