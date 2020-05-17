import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { SEND_SUBSCRIPTION_EMAIL } from './types';
import { API_URL } from '../../config/constants';
import { RootState } from '../reducers';

const sendSubscriptionEmail = (
  email: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  console.log(`${API_URL}graphql`);
  const requestBody = {
    query: `
      sendConfirmationEmail(email: "${email}") {
        email
      } 
    `,
  };

  const response = await fetch(`${API_URL}graphql`, {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  let data = await response.json();
  dispatch({
    type: SEND_SUBSCRIPTION_EMAIL,
    payload: data.email,
  });
};

export { sendSubscriptionEmail };
