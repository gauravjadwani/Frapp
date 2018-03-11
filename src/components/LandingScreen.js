import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import List from './List';
// import {BootstrapTable, TableHeaderColumn,SearchField } from 'react-bootstrap-table';
// import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
// import Paper from 'material-ui/Paper';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Table from './Table';
// import Chart from './Chart';
class LandingScreen extends Component {
render() {
  const panes = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane size="massive"><List/></Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane size="massive">Tab 2 Content</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane size="massive">Tab 3 Content</Tab.Pane> },
  ]
    return (
  <Tab panes={panes}  size="large" activeIndex={0}/>
    );
  }
}

export default LandingScreen;
