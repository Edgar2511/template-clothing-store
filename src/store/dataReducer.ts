import { ACTION_TYPES } from "./types";

export interface Data {
  name: string;
  email: string;
  message: string;
  subject: string;
}

export interface DataState {
  data: Data;
}

const initialState: DataState = {
  data: {
    email: "",
    message: "",
    name: "",
    subject: "",
  },
};

interface ActionTypes {
  type: ACTION_TYPES;
  payload: string | ChangeDataPayload;
}

export interface ChangeDataPayload {
  type: keyof Data;
  value: string;
}

export const dataReducer = (
  state = initialState,
  action: ActionTypes
): DataState => {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_DATA:
      const { type, value } = action.payload as ChangeDataPayload;

      return { ...state, data: { ...state.data, [type]: value } };
    case ACTION_TYPES.SET_NAME:
      return {
        ...state,
        data: { ...state.data, name: action.payload as string },
      };
    case ACTION_TYPES.SET_EMAIL:
      return {
        ...state,
        data: { ...state.data, email: action.payload as string },
      };
    case ACTION_TYPES.SET_MESSAGE:
      return {
        ...state,
        data: { ...state.data, message: action.payload as string },
      };
    case ACTION_TYPES.SET_SUBJECT:
      return {
        ...state,
        data: { ...state.data, subject: action.payload as string },
      };
    default:
      return state;
  }
};
