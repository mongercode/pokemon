import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props){
  super(props);

  this.state = {
    OlaOne : 1
  };

  this.AddOnClick = this.AddOnClick.bind(this);
  this.SubOnClick = this.SubOnClick.bind(this);
}

AddOnClick() {
    this.setState({OlaOne: this.state.OlaOne +1});
  }

  SubOnClick() {
      this.setState({OlaOne: this.state.OlaOne -1});
    }


    componentDidMount() {
      setInterval(function() {
          this.setState({OlaOne: this.state.OlaOne +1})
      }.bind(this), 1000);
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <p>{this.state.OlaOne}</p>
          <button onClick={this.AddOnClick}>Add</button> | <button onClick={this.SubOnClick}>Subtract</button>
        </p>
      </div>
    );
  }
}

export default App;
