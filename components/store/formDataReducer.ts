const initialState = {
  f_name: '',
  l_name: '',
  email: '',
  ph_no: '',
};

const formDataReducer = (state = initialState, action: { type: any; payload: { key: any; value: any; }; }) => {
  switch (action.type) {
    case 'UPDATE_FORM_DATA':
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    default:
      return state;
  }
};

export default formDataReducer;
