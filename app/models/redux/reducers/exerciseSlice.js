import { createSlice } from "@reduxjs/toolkit";

export const exerciseSlice = createSlice({
    name: 'exercise',
    initialState: {
        name: 'Test',
        list: {
            0: {
                id: 0,
                title: 'Bodyweight Glute Pulses',
                data: [
                    'Kneeling push up position, arms spaced shoulder width.',
                    'Extend the left hip in the air until the thigh is parallel to the floor.',
                    'Remember to keep the left knee straight.',
                    'Contract the glutes and hamstrings to pulse the hip up and down.',
                    'After completing the task, switch to the other leg.'
                ]
            },
            1: {
                id: 1,
                title: 'Hip thrusts',
                data: [
                    'Lie down on your back.',
                    'Put your arms by your sides, your knees bent and your feet planted on the ground.',
                    'Squeeze your glutes, press through your heels and drive your hips up so you form a straight line from your knees to your shoulders.',
                    'Hold for a second at the top of the move, then lower slowly.'
                ]
            },
            2: {
                id: 2,
                title: 'Split squats',
                data: [
                    'From a standing position, take a long step forward.',
                    'Remember to raise the heel of your back foot. ',
                    'Keeping your torso straight, lower slowly until your back knee almost touches the floor, then push back up.',
                    'After completing the task, swich to the other leg. '
                ]
            },
            3: {
                id: 3,
                title: 'Donkey kicks',
                data: [
                    'Bracing your core with knees and hips slightly bent, use your glute to kick your working leg directly back as high as it will go without compromising your hip position. ',
                    'Squeeze at the top.',
                    'Resist the weight and slowly lower your foot back to the starting position.'
                ]
            },
            4: {
                id: 4,
                title: 'Frog kicks',
                data: [
                    'Lay down.',
                    'Plant your hands next to your butt.',
                    'Kick your legs out as you lean back, then get your knees and chest as close as possible.'
                ]
            },
            5: {
                id: 5,
                title: 'Sumo lifts',
                data: [
                    'Push your knees out.',
                    'Track your knee – bend and straighten it – over the imagined line going through the middle of your foot, your heel and your toes.',
                    'Keep your back flat in order to protect your spine.',
                    'Breath in.',
                    'Flex your lats.'
                ]
            },
            6: {
                id: 6,
                title: 'Straight leg glute bridge',
                data: [
                    ' Flat on your back keep your legs bent at a 90-degree angle and feet placed flat on the ground.',
                    ' Raise 1 leg off the ground straight up in the air.',
                    ' Drive your weight downward through the leg on the floor.',
                    ' Keep your hips squared.'
                ]
            },
            7: {
                id: 7,
                title: 'DB Bulgarian split squat',
                data: [
                    ' Set up in a split stance position while grasping dumbbells by your side with a neutral grip.',
                    ' Position the back foot on a bench to increase the range of motion.',
                    ' Descend by flexing the front knee and continue until the back knee touches the ground directly beneath the hip.',
                    ' After completing the task, swich to the other leg.'
                ]
            },
            8: { id: 8, 
                title: 'Barbell hip thrusts', 
                data: [
                    ' Drive your hips up lifting the bar.',
' In the top position keep your knees s bent at 90° and your shoulders near the top of the bench, with your body forming a straight line between them.',
' Pause at the top of the lift and squeeze your glutes, then lower your hips slowly.'
                ] },
            9: { id: 9, 
                title: 'Occluded wall sits', 
            data: [
                ' Stand up upon a wall with your feet slightly wider than your hips.',
                ' Keep your arms alongside your body.',
                ' Lower your hips down into a squat position.',
                ' Press up to come back into standing and raise your arms overhead.',
                ' Return to the starting position.'
            ] },
            10: { id: 10, 
                title: 'Single leg hamstring curl', 
            data: [
                ' Lay down on your back.',
                ' Keep both legs straight and rest the heels on top of a stability ball.',
                ' Press through the heels and raise the hips off the ground.',
                ' Lift one leg straight up into the air directly up from the hips, and drive the other heel into the ball.',
                ' After completing the task, swich to the other leg.'
            ] },
            11: { id: 11, 
                title: 'Sumo squat variation',
             data: [
                ' Stand up and put your feet wider than shoulder-width apart.',
                ' Remember to keep your toes turned out and arms by your sides.',
                ' Engage your core.',
                ' Keep your chest lifted and back flat as you shift your weight into your heels.',
                ' Push your hips back and bend your knees to lower into a squat.'
            ] },
        }
    },
    reducers: {
        setList: (state, action) => {
            state.list = action.payload
        },

        getExerciseName: (state,action) => {
            return "Hello"
       }

    }
})

export const { setList, getExerciseName} = exerciseSlice.actions

export default exerciseSlice.reducer;