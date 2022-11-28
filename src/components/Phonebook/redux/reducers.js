// const KEY = 'contacts';
// JSON.parse(localStorage.getItem(KEY)) ??
const initialState = {
  contacts: [
    { id: '1', name: 'alina', number: '123456' },
    { id: '2', name: 'polina', number: '123456' },
    { id: '3', name: 'kristina', number: '123456' },
    { id: '4', name: 'pall', number: '123456' },
  ],
  filter: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case 'contacts/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };

    case 'filters/setFilter':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
