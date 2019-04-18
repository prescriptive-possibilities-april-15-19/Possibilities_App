import { PROTEIN_DATA_FETCH, PROTEIN_DATA_SUCCESS, PROTEIN_DATA_FAIL, SMILES_DATA_FETCH, SMILES_DATA_SUCCESS, SMILES_DATA_FAIL } from '../actions'

const initialState = {
  smileData: [],
  proteinData: [],
  fetching: false,
  error: ''
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SMILES_DATA_FETCH: 
      return {
        ...state,
        fetching: true, 
        error: ''   
      }
    case SMILES_DATA_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: '',
        smileData: action.payload
      }
    case PROTEIN_DATA_FETCH: 
      return {
        ...state,
        fetching: true, 
        error: ''   
      }
    case PROTEIN_DATA_SUCCESS:
    console.log('state', state)
      return {
        ...state,
        fetching: false,
        error: '',
        proteinData: action.payload
      }
    case SMILES_DATA_FAIL:
    default:
      return state;
  }
};
