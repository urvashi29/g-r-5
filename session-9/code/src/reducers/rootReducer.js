import React from "react";
import { ADD_TASK } from "../action/actionType";

// global state
const initState = {
  todo_list: [],
};

const rootReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TASK:
      return { ...state, todo_list: [...state.todo_list, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
