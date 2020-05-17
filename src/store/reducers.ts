import { combineReducers } from 'redux';
import { userReducers } from './user/reducers';

const rootReducer = combineReducers({
  user: userReducers,
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };

export type { RootState };
