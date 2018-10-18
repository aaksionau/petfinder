import { Reducer } from "redux";

const locationReducer: Reducer<string> = (
  state: string = "Minneapolis, MN",
  action
) => {
  if (action.type === "SET_LOCATION") {
    return action.payload;
  } else {
    return state;
  }
};

export default locationReducer;
