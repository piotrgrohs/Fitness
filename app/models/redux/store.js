import { configureStore } from '@reduxjs/toolkit'
import exerciseReducer from './reducers/exerciseSlice'
import personReducer from './reducers/personSlice'
import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';


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

// export const store = configureStore({
//     reducer
// })
