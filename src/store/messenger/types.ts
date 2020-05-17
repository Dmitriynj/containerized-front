const FETCH_CONVERSATIONS = 'FETCH_CONVERSATIONS';
const CREATE_CONVERSATION = 'NEW_CONVERSATION';

type  FetchConversationsAction = {
  type: typeof FETCH_CONVERSATIONS;
}

type  CreateConversationAction = {
  type: typeof CREATE_CONVERSATION;
  payload: {
    emails: string[]
  }
}

type MessengerActionTypes = FetchConversationsAction | CreateConversationAction;

export { FETCH_CONVERSATIONS, CREATE_CONVERSATION };

export type { MessengerActionTypes };
