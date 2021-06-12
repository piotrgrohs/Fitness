/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import {
  WelcomeScreen,
  InformationScreen,
  GoalScreen,
  ExerciseScreen,
  ExerciseDoScreen,
  ExerciseDescriptionScreen,
  ProgressScreen,
  HomeScreen,
  ProfileScreen,
} from "../screens"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type PrimaryParamList = {
  home: undefined
  welcome: undefined
  info: undefined
  goal: undefined
  exercise: undefined
  exercisedo: undefined
  exercisedescription: undefined
  profile: undefined
  progress: undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createStackNavigator<PrimaryParamList>()

export function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="info" component={InformationScreen} />
      <Stack.Screen name="goal" component={GoalScreen} />
      <Stack.Screen name="exercise" component={ExerciseScreen} />
      <Stack.Screen name="exercisedo" component={ExerciseDoScreen} />
      <Stack.Screen name="exercisedescription" component={ExerciseDescriptionScreen} />
      <Stack.Screen name="profile" component={ProfileScreen} />
      <Stack.Screen name="progress" component={ProgressScreen} />
    </Stack.Navigator>
  )
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["welcome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
