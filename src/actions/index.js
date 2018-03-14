export const CALL_LIST = () => {
  return (dispatch) => {
    fetch('https://cors-anywhere.herokuapp.com/http://54.169.233.100:8080/favourite.json', )
      .then(function(response) {
        return response.json();
      }).then(function(j) {
          dispatch({
          type: 'CALL_LIST',
          payload: j
        });
      }).catch(function(error) {
        console.log('Request failed', error)
      });

  }
}
export const CHANGE_TAB = (a) => {
  return (dispatch) => {
    dispatch({
      type: 'CHANGE_TAB',
      payload: a
    });

  }
}
export const CURRENT_ITEM = (item) => {

  return (dispatch) => {
    dispatch({
      type: 'CURRENT_ITEM',
      payload: item
    });
  }
}
