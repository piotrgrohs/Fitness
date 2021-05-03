import { configureStore } from '@reduxjs/toolkit'
import exerciseReducer from './reducers/exerciseSlice'
import personReducer from './reducers/personSlice'
import { combineReducers, createStore } from 'redux'
 

const reducer = combineReducers({
    person: personReducer,
    exercise: exerciseReducer
})
 
export const store = configureStore({
    reducer
})
