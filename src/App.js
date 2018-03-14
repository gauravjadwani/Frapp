import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header';
import LandingScreen from './components/LandingScreen';
import './components/css/index.css';


class App extends Component {
      constructor (props) {
         super(props);
       }
  render() {
      console.log('App');
    return (
      <MuiThemeProvider>
      <div>
              <Header/>
        <div className="container">
        <LandingScreen/>


        </div>
      </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
