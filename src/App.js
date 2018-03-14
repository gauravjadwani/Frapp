import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import LandingScreen from './components/LandingScreen';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header';
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

          {this.props.children}

        </div>
      </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
