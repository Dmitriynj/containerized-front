const SEND_SUBSCRIPTION_EMAIL = 'SEND_SUBSCRIPTION_EMAIL';

type SendSubscriptionEmail = {
  type: typeof SEND_SUBSCRIPTION_EMAIL;
  payload: {
    email: string;
  }
};

type UserActionTypes = SendSubscriptionEmail;

type UserState = {
  email: string;
}

export {SEND_SUBSCRIPTION_EMAIL};

export type {UserActionTypes, UserState};