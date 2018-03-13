import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import { Icon } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {CALL_LIST,CHANGE_TAB} from './../actions';
import ConfigureStore from './../store/configureStore';

class List extends Component{
  constructor(props) {
    super(props);
  //   this.state = {
  //   dataList: [],
  //   isloading: true
  // };
 this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount = () => {
//     var _this=this;
//     var request = new Request('http://54.169.233.100:8080/favourite.json');
//     fetch('http://54.169.233.100:8080/favourite.json',{mode: 'cors'})
//     .then(function(response) {
//         return response.json();
// }).then(function(j){
//       console.log(j);
//         _this.setState({dataList: j});
//     }).catch(function(error) {
//       console.log('Request failed', error)
//     });
this.props.CALL_LIST();
}
handleClick = () => {
  console.log('handleclicked',this);
this.props.CHANGE_TAB(1);
 }

render() {
  let p=this;
  console.log('p',p);
  const style = {
    height: 150,
    width: 150,
    margin: 50,
    textAlign: 'center',
    display: 'inline-block',  };
  let childrenn=function(obj){
    // console.log(this,'List');
    return(
      <div>
      <div className="row">
    <Avatar src={obj.imageUrl} className="image" size={60}/>
  </div>
<br/>
  <div className="row">
    <div className="col-md-4">
      <button className="btn btn-primary btn-xs" onClick={p.handleClick}>Details</button>
    </div>
    <div className="col-md-8">
 <Icon name='eye' color="teal"/>
 <span>{(obj['view-count']+'').substr(0,4)}</span>
    </div>
  </div>
</div>
    );
  }
  let componentList = this.props.dataList.map(function(obj){
    console.log(p,'map');
           var i = 0;
           return (
          <Paper style={style} zDepth={4} children={childrenn(obj)}/>
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
export default connect(mapStateToProps, {CALL_LIST,CHANGE_TAB})(List);
// export default List;
