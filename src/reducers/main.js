let INITIAL_STATE={
dataList:[],
currentTab:0,
currentItem:0
}
export default (state=INITIAL_STATE,action) => {
  console.log("current called",action);
  switch(action.type){
          case 'CALL_LIST':
            return {...state,
              dataList:action.payload
            }
            case 'CHANGE_TAB':
            return {...state,
              currentTab:action.payload
            }
            case 'CURRENT_ITEM':
            return {...state,
              currentItem:action.payload
            }
      default:
        return state;
  }
}
