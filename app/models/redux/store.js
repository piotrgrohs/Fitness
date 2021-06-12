import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import exerciseReducer from './reducers/exerciseSlice';
import personReducer from './reducers/personSlice';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['person','exercise']
  }

const reducer = combineReducers({
    person: personReducer,
    exercise: exerciseReducer
})

const pReducer = persistReducer(persistConfig, reducer);
export const store = createStore(pReducer);
export const persistor = persistStore(store);
