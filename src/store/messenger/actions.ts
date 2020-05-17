import {
  FETCH_CONVERSATIONS,
  MessengerActionTypes,
  CREATE_CONVERSATION,
} from './types';

const fetchConversations = (): MessengerActionTypes => {
  return {
    type: FETCH_CONVERSATIONS,
  };
};

const createConversation = (emails: string[]): MessengerActionTypes => {
  return {
    type: CREATE_CONVERSATION,
    payload: {
      emails,
    },
  };
};

export { fetchConversations, createConversation };