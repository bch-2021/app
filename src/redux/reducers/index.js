import { combineReducers } from 'redux';

import accountTokens from 'redux/reducers/src/account.tokens';

const RootReducer = combineReducers({
  accountTokens,
});

export default RootReducer;
