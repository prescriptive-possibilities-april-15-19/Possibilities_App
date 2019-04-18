import { PROTEIN_START, PROTEIN_SUCCESS, PROTEIN_FAIL, SMILES_START, SMILES_SUCCESS, SMILES_FAIL } from '../actions'

const initialState = {
  proteinData: [],
  smilesData: [],
  searching: false,
  error: ''
};

export const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROTEIN_START: 
      return {
        ...state,
        searching: true, 
        error: ''   
      }
    case PROTEIN_SUCCESS:
      return {
        ...state,
        searching: false,
        error: '',
        characters: action.payload
      }
    case SMILES_START: 
      return {
        ...state,
        searching: true, 
        error: ''   
      }
    case SMILES_SUCCESS:
      return {
        ...state,
        searching: false,
        error: '',
        characters: action.payload
      }
    case TRANSFER_FAIL:
    default:
      return state;
  }
};
