import { configureStore } from '@reduxjs/toolkit'
import exerciseReducer from './reducers/exerciseSlice'
import personReducer from './reducers/personSlice'
import AsyncStorage from '@react-native-community/async-storage'
import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER} from 'redux-persist'

// const persistConfig = {
//     key: 'root',
//     storage
// }

const reducer = combineReducers({
    person: personReducer,
    exercise: exerciseReducer
})

// const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer,
})

export default store

// export default configureStore({ reducer })
// //const store = configureStore({reducer: persistedReducer})

// let persistor = persistStore(store)
// export {store, persistor}