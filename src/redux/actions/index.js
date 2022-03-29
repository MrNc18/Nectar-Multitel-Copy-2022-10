import store from "../store.js";


export const CREATE_FORM = "CREATE_FORM";
export const UPDATE_FORM = "UPDATE_FORM";
export const CLEAR_FORM = "CLEAR_FORM";


export function createForm(formName, object) {
    return store.dispatch({ type: CREATE_FORM, formName, object });
  }
  export function updateForm(formName, object) {
    return store.dispatch({ type: UPDATE_FORM, formName, object });
  }
  export function clearForm(formName) {
    return store.dispatch({ type: CLEAR_FORM, formName });
  }