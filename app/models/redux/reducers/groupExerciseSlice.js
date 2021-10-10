import { createSlice } from "@reduxjs/toolkit";

export const groupExerciseSlice = createSlice({
    name: 'groupExercise',
    initialState: {
        list: [
            {
                name: "lost",
                exercises: [0,1,2,3,4,5,6,7,8]
            },
            {
                name: "ass",
                exercises: []
            },
            {
                name: "power",
                exercises: []
            }
        ]
    },
    reducers: {
        setList: (state, action) => {
            state.list = action.payload
        },


    }
})

export const { setList, getExerciseName} = groupExerciseSlice.actions

export default groupExerciseSlice.reducer;