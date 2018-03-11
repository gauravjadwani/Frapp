import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import { Icon } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {CALL_LIST} from './../actions';
import ConfigureStore from './../store/configureStore';

class List extends Component{
  constructor(props) {
    super(props);
    this.state = {
    dataList: [],
    isloading: true
  };

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
render() {
  console.log('list',this.s)
  const style = {
    height: 150,
    width: 150,
    margin: 50,
    textAlign: 'center',
    display: 'inline-block',
  };
  let childrenn=function(obj){
    return(
      <div>
      <div className="row">
    <Avatar src={obj.imageUrl} className="image" size={60}/>
  </div>
<br/>
  <div className="row">
    <div className="col-md-4">
      <button className="btn btn-primary btn-xs">Details</button>
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
  const {dataList} = main;
  return {dataList}
}
export default connect(mapStateToProps, {CALL_LIST})(List);
// export default List;
