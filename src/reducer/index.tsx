import { combineReducers } from "redux";
import counter from './counter';
import todos from './todos';

const rootreducer = combineReducers({
  counter,
  todos
});
export default rootreducer;

export type RootState = ReturnType<typeof rootreducer>;