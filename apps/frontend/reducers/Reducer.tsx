import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import userReducer from './UserSlice';



const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;