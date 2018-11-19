const initialState = {
  data: [],
  loading: false,
  error: null,
  modal: false,
}

export default function users(state=initialState, action){
  switch (action.type){
    case 'ADD_USER_REQUEST':
      return {
        ...state,
        loading: true,
      };

    case 'ADD_USER_SUCCESS':
      return {
        ...state,
        data:[...state.data, action.payload],
        error: null,
        loading: false,
        modal: false,
      };

    case 'ADD_USER_ERROR':
      return {...state,
        error: action.payload.message,
        loading: false,
        modal: true,
      };

    case 'UPDATE_MODAL':
      return {...state,
        modal: action.payload.modal,
      };

    default:
      return state;
  }
}
