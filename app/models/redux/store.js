import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import exerciseReducer from './reducers/exerciseSlice';
import groupExerciseReducer from './reducers/groupExerciseSlice';
import personReducer from './reducers/personSlice';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['person','exercise','groupExercise']
  }

const reducer = combineReducers({
    person: personReducer,
    exercise: exerciseReducer,
    groupExercise: groupExerciseReducer
})

const pReducer = persistReducer(persistConfig, reducer);
export const store = createStore(pReducer);
export const persistor = persistStore(store);
