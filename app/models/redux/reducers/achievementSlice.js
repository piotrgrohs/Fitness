import { createSlice } from "@reduxjs/toolkit";  

export const personSlice = createSlice({
    name: 'person',
    initialState: {
       achievements:{
           1: {
               name = "First training in day"
           }
       }
    },
    reducers: {
        setAchievements: (state, action) => {
            state.achievements = action.payload
        },
    }
})

export const { setAchievements } = personSlice.actions

export default personSlice.reducer;