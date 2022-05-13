import {
    THEME
} from "../Actions/AppAction";

interface appStates{
  theme:string
}

const initialState : appStates = {
    theme:"dark"
};

const Reducer = (state = initialState, action:any) => {
  switch (action.type) {
    case THEME:
      return {...state , theme: action.payload};
    default:
      return state;
  }
};
export default Reducer;