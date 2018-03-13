import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import List from './List';
import {connect} from 'react-redux';
import {CALL_LIST,CHANGE_TAB} from './../actions';
import ConfigureStore from './../store/configureStore';

class LandingScreen extends Component {
constructor(props) {
  super();
  // _this=this;
}
  handleTabChange = (e, { activeIndex }) => {
this.props.CHANGE_TAB(activeIndex);
  };
render() {
  console.log('currenr',this.props.currentTab);
// const {currentTab}=
  const panes = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane size="massive"><List/></Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane size="massive">Tab 2 Content</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane size="massive">Tab 3 Content</Tab.Pane> },
  ]
    return (
  <Tab panes={panes}  size="large" activeIndex={this.props.currentTab} onTabChange={this.handleTabChange}/>
    );
  }
}
const mapStateToProps = ({main}) => {
  const {currentTab} = main;
  return {currentTab}
}
export default connect(mapStateToProps, {CHANGE_TAB})(LandingScreen);
// export default LandingScreen;
