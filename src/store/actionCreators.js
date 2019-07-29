import { apiCall } from "../services/api";
import { addError } from "./actions/errors";

export const GET_MY_HEADACHES = "GET_MY_HEADACHES";
export const ADD_HEADACHE = "ADD_HEADACHE";
export const UPDATE_MY_HEADACHE = "UPDATE_HEADACHE";
export const REMOVE_HEADACHE = "REMOVE_HEADACHE";

export const ADD_ERROR = "ADD_ERROR";
export const REMOVE_ERROR = "REMOVE_ERROR";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const remove = id => ({
  type: REMOVE_HEADACHE,
  id
});
function handleGetHeadaches(data) {
  return {
    type: GET_MY_HEADACHES,
    data
  };
}

export function getAllHeadaches() {
  return dispatch => {
    return fetch("http://localhost:3026/api/headaches")
      .then(res => res.json())
      .then(data => dispatch(handleGetHeadaches(data)))
      .catch(err => console.log("Something went wrong!", err));
  };
}

export function removeHeadache(user_id, headache_id) {
  console.log("removeHeadache called");
  return dispatch => {
    return apiCall("delete", `/api/users/${user_id}/myHeadaches/${headache_id}`)
      .then(() => dispatch(remove(headache_id)))
      .catch(err => {
        addError(err.message);
      });
  };
}

export function addHeadache() {
  return {};
}
