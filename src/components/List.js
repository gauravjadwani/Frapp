import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import { Icon } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {CALL_LIST,CHANGE_TAB,CURRENT_ITEM} from './../actions';
import ConfigureStore from './../store/configureStore';

class List extends Component{
  constructor(props) {
    super(props);
 // this.onMouseOver = this.onMouseOver.bind(this);
 // this.onMouseOut = this.onMouseOut.bind(this);
 this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount = () => {
this.props.CALL_LIST();
  console.log(this.props,'len');
}

handleClick = (e) => {
  this.props.CURRENT_ITEM(parseInt(e.target.getAttribute("data-id")));
this.props.CHANGE_TAB(1);


 }

render() {
  let p=this;
  console.log('p',p);
  const style = {
    height: 170,
    width: 170,
    margin: 50,
    textAlign: 'center',
    display: 'inline-block',  };
  let childrenn=function(obj,id){
    return(
      <div>
      <div className="row">
    <Avatar src={obj.imageUrl} className="image" size={60}/>
  </div>
<br/>
  <div className="row">
    <div className="pull-left">
      <button data-id={id} className="btn btn-primary btn-xs detailsButton" onClick={p.handleClick}>Details</button>
    </div>
    <div className="pull-right t">
 <Icon name='eye' color="teal"/>
 <span className="viewCount">{((obj['view-count']/10000).toFixed(1)+'k')}</span>
    </div>
  </div>
  <div className="row customTitle">
{obj.title}
  </div>
</div>
    );
  }
  let componentList = this.props.dataList.map(function(obj,i){
           return (
          <Paper key={i} id='i' style={style} children={childrenn(obj,i)} transitionEnabled={true} zDepth={4}/>
           );
       });
  return(
    <div>
      {
        componentList
      }
    </div>
  );
}
}
const mapStateToProps = ({main}) => {
  const {dataList,currentTab} = main;
  return {dataList,currentTab}
}
export default connect(mapStateToProps, {CALL_LIST,CHANGE_TAB,CURRENT_ITEM})(List);
