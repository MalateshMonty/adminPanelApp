import { Profile } from "../actions/type";
const inistialState = {
  id: "",
};

export default (state = inistialState, action) => {
  switch (action.type) {
    case Profile:
      console.log("log", action.payload);
      return { ...state, id: action.payload };
    default:
      return state;
  }
};
