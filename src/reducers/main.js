let INITIAL_STATE={
dataList:[[],[]]
}
export default (state=INITIAL_STATE,action) => {
  switch(action.type){
          case 'WEB_SOCKETS':
            return {...state,
              dataList:action.payload
            }
      default:
        return state;
  }
}
