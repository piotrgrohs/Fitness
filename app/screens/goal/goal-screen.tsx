import React from "react"
import { observer } from "mobx-react-lite"
import { useSelector, useDispatch } from 'react-redux'
import { SafeAreaView, ViewStyle } from "react-native"
import { Screen, Button, Text, Wallpaper } from "../../components"
import { TextInput } from "react-native-gesture-handler"
import { View, TextStyle } from "react-native"
import { setGoal } from '../../models/redux/reducers/personSlice'
import { CONNECTION_ERROR } from "apisauce"
import { color, spacing, typography } from "../../theme"
import { useNavigation } from "@react-navigation/native"

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}


const CONTINUE: TextStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: "#00eeff"
}

const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
  textTransform: 'uppercase'
}
const BOLD: TextStyle = { fontWeight: "bold" }
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
  paddingTop: 50
}

const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
}

const CONTENT: TextStyle = {
  ...TEXT,
  fontSize: 20,
  lineHeight: 22,
  marginBottom: spacing[5],

}

const FOOTER: ViewStyle = { }
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
}

export function GoalScreen() {
  const [weightGoal, setGoalInput] = React.useState(); 
  const dispatch = useDispatch();
  const navigation = useNavigation();
  
  const submit = () => { 
    dispatch(setGoal(weightGoal));
    navigation.navigate("home");
  }

  return (
    <View testID="GoalScreen" style={FULL}>
      <Wallpaper />
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Text style={TITLE} preset='header' text="Your aim" />
        <Text tx={`infomationScreen.name`} />
        <TextInput
          onChangeText={text => setGoalInput(text)} placeholder={"... kg"}
          value={weightGoal} style={CONTENT} placeholderTextColor="#e0e0e0"
        /> 
      </Screen>
      <SafeAreaView style={FOOTER}>
        <View style={FOOTER_CONTENT}>
          <Button style={CONTINUE}
           textStyle={CONTINUE_TEXT}
            onPress={() => submit()} text="GO!" />
        </View>
      </SafeAreaView>
    </View>
  )

}
