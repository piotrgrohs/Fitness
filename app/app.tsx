/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigation, so head over there
 * if you're interested in adding screens and navigators.
 */
import "./i18n"
import "./utils/ignore-warnings"
import React, { useState, useEffect, useRef } from "react"
import { NavigationContainerRef } from "@react-navigation/native"
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"
import { initFonts } from "./theme/fonts" // expo
import * as storage from "./utils/storage"
import { Provider } from 'react-redux';
import {store, persistedStore} from './models/redux/store';
import { PersistGate } from 'redux-persist/integration/react'


import {
  useBackButtonHandler,
  RootNavigator,
  canExit,
  setRootNavigation,
  useNavigationPersistence,
} from "./navigation"
import { RootStore, RootStoreProvider, setupRootStore } from "./models"
import { ToggleStorybook } from "../storybook/toggle-storybook"

import { enableScreens } from "react-native-screens"
enableScreens()

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE"

function App() {
  const navigationRef = useRef<NavigationContainerRef>()
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined)

  setRootNavigation(navigationRef)
  useBackButtonHandler(navigationRef, canExit)
  const { initialNavigationState, onNavigationStateChange } = useNavigationPersistence(
    storage,
    NAVIGATION_PERSISTENCE_KEY,
  )

  useEffect(() => {
    ; (async () => {
      await initFonts() // expo
      setupRootStore().then(setRootStore)
    })()
  }, [])

  if (!rootStore) return null

  return (
    <ToggleStorybook>
      <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistedStore}> */}
        <RootStoreProvider value={rootStore}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <RootNavigator
              ref={navigationRef}
              initialState={initialNavigationState}
              onStateChange={onNavigationStateChange}
            />
          </SafeAreaProvider>
        </RootStoreProvider>
        {/* </PersistGate> */}
      </Provider>
    </ToggleStorybook>
  )
}

export default App
