import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import { Icon } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {CALL_LIST,CHANGE_TAB,CURRENT_ITEM} from './../actions';
import ConfigureStore from './../store/configureStore';

class Details extends Component{
render() {
  const style = {
    height: 350,
    width: 350,
    margin: 50,
    textAlign: 'center',
    display: 'inline-block' };
  console.log(this.props.currentItem,'details');
    return(
      <div>
        <Paper style={style} zDepth={4} className="customPaper"/>
      </div>
    )
}
}
const mapStateToProps = ({main}) => {
  const {currentItem,dataList} = main;
  return {dataList,currentItem}
}
export default connect(mapStateToProps, {CALL_LIST,CURRENT_ITEM})(Details);
// export default List;
