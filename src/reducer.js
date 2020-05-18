import { Action } from "./actions";


const initialState = {
  isWaiting:false,
  items: [ ],
};

function reducer(state = initialState,action){
  switch (action.type) {
  case Action.LoadItems:
    return {
      ...state,
      items: action.payload,
    };
  case Action.FinishAddingItem:
    return {
      ...state,
      items: [{...action.payload, isEditing: true}, ...state.items],
      };
      case Action.EnterEditMode:
        return {
          ...state,
          items: state.items.map(item => {
            if(item.id === action.payload.id){
              return {...item, isEditing: true};
            } else {
              return item;
            }
          }),
      };
      case Action.LeaveEditMode:
        return {
          ...state,
          items: state.items.map(item => {
            if(item.id === action.payload.id){
              return {...item, isEditing: undefined};
            } else {
              return item;
            }
          }),
      };
      case Action.FinishSavingItem:
        return {
          ...state,
          items: state.items.map(item => {
            if(item.id === action.payload.id){
              return action.payload;
            } else {
              return item;
            }
          }),
      };
      case Action.FinishDeletingItem:
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id),
      };
  default:
    return state;
  }
}

export default reducer;