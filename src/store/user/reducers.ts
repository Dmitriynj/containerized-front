import { UserState, UserActionTypes, SEND_SUBSCRIPTION_EMAIL } from './types';

const initialState: UserState = {
  email: '',
};

const userReducers = (
  state: UserState = initialState,
  action: UserActionTypes
): UserState => {
  switch(action.type) {
    case SEND_SUBSCRIPTION_EMAIL: 
      console.log('reducer');
      return {
        ...state,
        email: action.payload.email
      }
    default:
      return state;

  }
};

export {userReducers};
