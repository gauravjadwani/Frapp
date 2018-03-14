import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import { Icon } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {CALL_LIST,CHANGE_TAB,CURRENT_ITEM} from './../actions';
import ConfigureStore from './../store/configureStore';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';

class Details extends Component{
  constructor(props) {
    super();
    this.holder=props.dataList[props.currentItem];
  }
render() {
  const style = {
    height: 350,
    width: 350,
    margin: 50,
    textAlign: 'center',
    display: 'inline-block'
  };
  let childrenn=function(obj){
    return(
      <div>
      <div className="row">
    <Avatar src={obj.imageUrl} className="image" size={100}/>
  </div>
  <div className="row">

  <List className="customList">
  <ListItem insetChildren={true} primaryText="Title" secondaryText={obj.title} disabled={true}/>
     <Divider inset={true} />
     <ListItem insetChildren={true} primaryText="Type" secondaryText={obj.type} disabled={true}/>
        <Divider inset={true} />
     <ListItem insetChildren={true} primaryText="Desc" secondaryText={obj.desc} disabled={true}/>
  </List>
</div>
<br/>
</div>
    );
  }
    return(
      <div>
        <Paper style={style} zDepth={4} className="customPaper" children={childrenn(this.holder)}/>
      </div>
    )
}
}
const mapStateToProps = ({main}) => {
  const {currentItem,dataList} = main;
  return {dataList,currentItem}
}
export default connect(mapStateToProps, {CALL_LIST,CURRENT_ITEM})(Details);
