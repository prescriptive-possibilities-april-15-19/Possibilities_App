import { PROTEIN_START, PROTEIN_SUCCESS, PROTEIN_FAIL, SMILES_START, SMILES_SUCCESS, SMILES_FAIL } from '../actions'

const initialState = {
  proteinDataC: [],
  smilesDataC: [],
  searching: false,
  error: ''
};

export const searchReducer = (state = initialState, action) => {
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
        proteinDataC: action.payload
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
        smilesDataC: action.payload
      }
    case SMILES_FAIL:
    default:
      return state;
  }
};
