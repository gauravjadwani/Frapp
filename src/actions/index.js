
export const CALL_LIST = () => {
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify('payload'),
    cors: false, // allow cross-origin HTTP request
    credentials: '*' // This is similar to XHR’s withCredentials fl
  };
console.log('CALL_LIST()');
    return(dispatch) => {
      // var request = new Request('http://54.169.233.100:8080/favourite.json');
      fetch('https://cors-anywhere.herokuapp.com/http://54.169.233.100:8080/favourite.json',)
      .then(function(response) {
              console.log(response,'res0');
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
export const CHANGE_TAB = (a) => {
  console.log('change clicked',a);

    return(dispatch) => {
            dispatch({type: 'CHANGE_TAB', payload:a});

}
}
export const CURRENT_ITEM = (item) => {
  console.log('current item is ',item);

    return(dispatch) => {
            dispatch({type: 'CURRENT_ITEM', payload:item});

}
}
