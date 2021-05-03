import { createSlice } from "@reduxjs/toolkit";  

export const personSlice = createSlice({
    name: 'person',
    initialState: {
        name: '',
        height: 0,
        weight: 0,
        age: 0,
        weightgoal: 0,
        date: '', 
        exercises: []
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setHeight: (state, action) => {
            state.height = action.payload
        },
        setWeight: (state, action) => {
            state.weight = action.payload
        },
        setAge: (state,action) => {
            state.age = action.payload
        },
        setGoal: (state,action) => {
            state.weightgoal = action.payload
        },
        setDate: (state,action)=>{
                state.date = action.payload
        },
        addExercise: (state,action) => {
            state.exercises.push(action.payload)
        },
        filterExercise: (state, action) => {
            state.exercises = state.exercises.filter(exercise => {exercise.date == action.payload})
        }
    }
})

export const { setAge, setHeight, setWeight, setName, setGoal, setDate, addExercise, filterExercise, getExerciseName } = personSlice.actions

export default personSlice.reducer;