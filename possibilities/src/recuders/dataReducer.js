import { DATA_FETCH, DATA_SUCCESS, DATA_FAIL } from '../actions'

const initialState = {
  data: [],
  fetching: false,
  error: ''
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_FETCH: 
      return {
        ...state,
        fetching: true, 
        error: ''   
      }
    case DATA_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: '',
        characters: action.payload
      }
    case DATA_FAIL:
    default:
      return state;
  }
};
