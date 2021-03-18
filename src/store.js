import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import gameReducers from './reducers/gameReducers';

const persistConfig = {
	key: 'persistedStore',
	storage,
};

const reducers = persistReducer(persistConfig, gameReducers);
const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);

export default store;
