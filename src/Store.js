import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const Store = createStore(rootReducer, composeWithDevTools());

export default Store;