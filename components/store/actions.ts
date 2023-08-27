export const updateFormData = (key: any, value: any) => {
  return {
    type: 'UPDATE_FORM_DATA',
    payload: {key, value},
  };
};
