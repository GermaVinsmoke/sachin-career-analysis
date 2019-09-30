import {
  ADD_DATA_REQUEST,
  ADD_DATA_SUCCESS,
  ADD_DATA_FAILED,
  READ_DATA_REQUEST,
  READ_DATA_SUCCESS,
  READ_DATA_FAILED
} from './types';

const initial_state = {
  requesting: false,
  successful: false,
  id: undefined,
  data: [],
  error: null
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case ADD_DATA_REQUEST:
      return { ...state, requesting: true, successful: false };
    case ADD_DATA_SUCCESS:
      return {
        ...state,
        requesting: false,
        successful: true,
        id: action.response
      };
    case ADD_DATA_FAILED:
      return {
        ...state,
        requesting: false,
        successful: false,
        error: action.error
      };

    case READ_DATA_REQUEST:
      return { ...state, requesting: true, successful: false };
    case READ_DATA_SUCCESS:
      return {
        ...state,
        requesting: false,
        successful: true,
        data: action.response
      };
    case READ_DATA_FAILED:
      return {
        ...state,
        requesting: false,
        successful: false,
        error: action.error
      };
    default:
      return { ...state };
  }
};
