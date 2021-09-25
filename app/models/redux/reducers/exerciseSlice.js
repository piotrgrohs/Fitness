import { createSlice } from "@reduxjs/toolkit";

export const exerciseSlice = createSlice({
    name: 'exercise',
    initialState: {
        name: 'Test',
        list: {
            0: {
                id: 0,
                title: 'Bodyweight Glute Pulses',
                sets:4,
                reps:13,
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
                sets:2,
                reps:18,
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
                sets:4,
                reps:13,
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
                sets:4,
                reps:11,
                data: [
                    'Bracing your core with knees and hips slightly bent, use your glute to kick your working leg directly back as high as it will go without compromising your hip position. ',
                    'Squeeze at the top.',
                    'Resist the weight and slowly lower your foot back to the starting position.'
                ]
            },
            4: {
                id: 4,
                title: 'Frog kicks',
                sets:2,
                reps:13,
                data: [
                    'Lay down.',
                    'Plant your hands next to your butt.',
                    'Kick your legs out as you lean back, then get your knees and chest as close as possible.'
                ]
            },
            5: {
                id: 5,
                title: 'Sumo lifts',
                sets:2,
                reps:10,
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
                sets:2,
                reps:10,
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
                sets:4,
                reps:11,
                data: [
                    ' Set up in a split stance position while grasping dumbbells by your side with a neutral grip.',
                    ' Position the back foot on a bench to increase the range of motion.',
                    ' Descend by flexing the front knee and continue until the back knee touches the ground directly beneath the hip.',
                    ' After completing the task, swich to the other leg.'
                ]
            },
            8: { 
                id: 8, 
                title: 'Barbell hip thrusts', 
                sets:3,
                reps:11,
                data: [
                    ' Drive your hips up lifting the bar.',
                    ' In the top position keep your knees s bent at 90° and your shoulders near the top of the bench, with your body forming a straight line between them.',
                    ' Pause at the top of the lift and squeeze your glutes, then lower your hips slowly.'
                ] },
            9: { 
                id: 9, 
                title: 'Occluded wall sits', 
                sets:3,
                reps:8,
                data: [
                        ' Stand up upon a wall with your feet slightly wider than your hips.',
                    ' Keep your arms alongside your body.',
                    ' Lower your hips down into a squat position.',
                    ' Press up to come back into standing and raise your arms overhead.',
                    ' Return to the starting position.'
            ] },
            10: { 
                id: 10, 
                title: 'Sumo squat variation',
                sets:2,
                reps:13,
                data: [
                    ' Stand up and put your feet wider than shoulder-width apart.',
                    ' Remember to keep your toes turned out and arms by your sides.',
                    ' Engage your core.',
                    ' Keep your chest lifted and back flat as you shift your weight into your heels.',
                    ' Push your hips back and bend your knees to lower into a squat.'
            ] },
            11: { 
                id: 11, 
                title: 'Side lunge variation',
                sets:2,
                reps:13,
                data: [
                    ' Start in a standing position. ',
                    ' Step forward with your right leg into a lunge.',
                    ' Press through the heel of the right foot to come back to start.',
                    ' Step the right foot backward into a lunge.',
                    ' Complete all reps on one side before switching to the other side.'
            ] },
            12: { 
                id: 12, 
                title: 'Sumo Squats/RDL',
                sets:0,
                reps:0,
                data: [
                    '  Stand with your feet slightly wider than hip-width apart.',
                    '  Turn your feet out, externally rotating your hips.',
                    '  With your hands clasped together at your chest, push your hips back and squat down, keeping your back straight and your upper body lifted. '
            ] },
            13: { 
                id: 13, 
                title: 'Lying hand to toe taps',
                sets:3,
                reps:10,
                data: [
                    ' Lie on your back on a mat, knees bent, feet on the floor, and palms facing down at your sides.', 
                    ' Inhale and brace your core. Push through your feet, raising your butt and back off the ground. ', 
                    ' Slowly lower back down to the ground.'
            ] },
            14: { 
                id: 14, 
                title: 'Crossovers to stretch out',
                sets:0,
                reps:0,
                data: [
                    ' Start by stepping your feet about shoulders width apart. ',
                    ' Take the right arm parallel to the floor and cross it over your body, bringing the upper arm into the chest.',
                    ' Take your left hand to the right elbow, pulling it even further across your body, and stay here for about 18 seconds. '
            ] },
            15: { 
                id: 15,
                title: 'In and out squat jumps',
                sets:4,
                reps:10,
                data: [
                    '  Stand with feet together, placing your hands in front of you on your thighs.',
                    '  Bend your legs, jump up, and separate your feet in mid-air.',
                    '  Land with feet wider than shoulder-width apart, lowering into a squat. ',
                    '  Jump up out of the squat and land back in the starting position, bringing your feet together on landing.'
            ] },
            16: { 
                id: 16,
                title: 'Scissors squat jumps',
                sets:4,
                reps:10,
                data: [
                    '  Set up with your feet about hip-width to shoulder-width apart.' ,
                    '  Squat down, sinking your butt down as you reach to touch the ground. ' ,
                    '  If you can\'t sink low enough, while keeping your heels down, to touch the ground, just reach as low as you can.'
            ] },
            17: { 
                id: 17,
                title: 'Criss-cross squats',
                sets:2,
                reps:11,
                data: [
                    '  Stand with feet a little wider than shoulder-width apart.',
                    '  Squat down.',
                    '  As you come up out of the squat criss-cross your feet in the air.',
                    '  Immediately spread your feet apart again to prepare for the next squat. This completes one rep.'
            ] },
            18: { 
                id: 18,
                title: '160 squat jumps',
                sets:2,
                reps:11,
                data: [
                    '  Start in a deep squat with your legs a bit wider than your hips and your toes pointed outward.',
                    '  Twist your torso to the right, reaching your right hand to the ceiling and your left hand toward the floor.',
                    '  Jump up, spinning to the left 160 degrees (halfway around), bringing both hands overhead.'
            ] },
            19: { 
                id: 19,
                title: 'Down dog to upward dog push up',
                sets:2,
                reps:4,
                data: [
                    '  Raise your right leg in the air behind you. ',
                    '  Inhale as you round your back and bring your right knee in, close to your nose, moving your shoulders directly above your hands. ',
                    '  Exhale as you shift your body back into the downward dog “V” and shoot your leg out behind you. ' 
                ] },
            20: { 
                id: 20,
                title: 'Bear plank',
                sets:3,
                reps:60,
                data: [
                    '  Begin on your hands and knees with your feet flexed and toes on the floor.',
                    '  Press into the ground to activate your shoulder and chest muscles. Your weight should be evenly distributed across your fingers, palms, and the heels of your hand.',
                    '  Engage your glutes to slightly tuck your tailbone.',
                    '  Contract your abdominals by taking a full breath and drawing them in as if you’re bracing for a punch. The bottom of your ribs should move slightly toward your pelvis.',
                    '  Lift your knees about 1 inch (2.54 cm) so that they’re floating just above the ground. Keep your chin and head in a neutral position, with your eyes fixed on the floor directly beneath your head.',
                    '  Breathe in and out in a controlled manner while maintaining your brace. Your lower and mid-back should be slightly rounded. Avoid arching your back or letting your stomach drop toward the floor.',
                    '  Hold this position for at least 18 seconds. '
                ] },
            21: { 
                id: 21,
                title: 'Plank',
                sets:2,
                reps:60,
                data: [
                    ' Lay on the floor with your elbows under your shoulders, hands flat on the floor and core engaged. ',
                    ' Keeping your forearms and knees on the floor slowly raise yourself upwards until your body is in a straight line from your knees to your head. '
                ] },
            22: { 
                id: 22,
                title: 'Leg raise variation',
                sets:3,
                reps:11,
                data: [
                    '  Lie faceup on the mat with knees bent, feet flat on floor, hands underneath glutes.',
                    '  Extend legs up towards the sky.',
                    '  Lift your glutes and lower back off of the ground, then return them to the mat.',
                    '  Then lower your legs, keeping them straight, until they are a few inches off the ground.'
                ] },    
            23: { 
                id: 23,
                title: 'Squat jumps',
                sets:3,
                reps:10,
                data: [
                    '  Stand with your feet shoulder-width apart.',
                    '  Start by doing a regular squat, engage your core, and jump up explosively.',
                    '  When you land, lower your body back into the squat position to complete one rep. 4. Make sure you land with your entire foot on the ground.'
                ] }
           
        }
    },
    reducers: {
        setList: (state, action) => {
            state.list = action.payload
        },


    }
})

export const { setList, getExerciseName} = exerciseSlice.actions

export default exerciseSlice.reducer;