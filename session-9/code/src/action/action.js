import { ADD_TASK } from "../action/actionType";

export const addTask = (task) => {
  return { type: ADD_TASK, payload: task };
};
