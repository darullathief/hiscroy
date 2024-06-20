import { authentication } from "./account/loginReducer";
import { registerUser } from "./account/registerReducer";
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  authentication,
  registerUser
  })