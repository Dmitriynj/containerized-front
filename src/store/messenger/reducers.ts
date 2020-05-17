import {
  FETCH_CONVERSATIONS,
  CREATE_CONVERSATION,
  MessengerActionTypes,
} from './types';

const initialState = {
  items: [],
  item: {},
};

const messengerReducer = (
  state = initialState,
  action: MessengerActionTypes
) => {
  switch (action.type) {
    case FETCH_CONVERSATIONS:
      return {
        ...state,
      };
    case CREATE_CONVERSATION:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};

export { messengerReducer };
