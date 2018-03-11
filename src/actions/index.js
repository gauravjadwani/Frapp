
export const CALL_LIST = () => {

    return(dispatch) => {
      var request = new Request('http://54.169.233.100:8080/favourite.json');
      fetch('http://54.169.233.100:8080/favourite.json',{mode: 'cors'})
      .then(function(response) {
          return response.json();
  }).then(function(j){
        console.log(j);
            dispatch({type: 'CALL_LIST', payload:j});
          // _this.setState({dataList: j});
      }).catch(function(error) {
        console.log('Request failed', error)
      });

}
}
