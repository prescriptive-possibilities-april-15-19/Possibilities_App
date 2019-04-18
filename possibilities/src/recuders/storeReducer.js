import { TRANSFER_START, TRANSFER_SUCCESS, TRANSFER_FAIL } from '../actions'

const initialState = {
  storedData: [],
  saving: false,
  error: ''
};

export const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSFER_START: 
      return {
        ...state,
        saving: true, 
        error: ''   
      }
    case TRANSFER_SUCCESS:
      return {
        ...state,
        saving: false,
        error: '',
        characters: action.payload
      }
    case TRANSFER_FAIL:
    default:
      return state;
  }
};
