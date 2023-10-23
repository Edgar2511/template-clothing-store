import { ChangeDataPayload } from "./dataReducer";
import { ACTION_TYPES } from "./types";

export const changeDataAction = (payload: ChangeDataPayload) => ({
  type: ACTION_TYPES.CHANGE_DATA,
  payload,
});

export const setName = (name: string) => ({
  type: ACTION_TYPES.SET_NAME,
  payload: name,
});

export const setEmail = (email: string) => ({
  type: ACTION_TYPES.SET_EMAIL,
  payload: email,
});

export const setMessage = (message: string) => ({
  type: ACTION_TYPES.SET_MESSAGE,
  paylaod: message,
});

export const setSubject = (subject: string) => ({
  type: ACTION_TYPES.SET_SUBJECT,
  payload: subject,
});
