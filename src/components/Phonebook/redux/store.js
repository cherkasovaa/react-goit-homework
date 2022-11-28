import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { rootReducer } from './reducers';

const exhancer = devToolsEnhancer();
export const store = createStore(rootReducer, exhancer);
