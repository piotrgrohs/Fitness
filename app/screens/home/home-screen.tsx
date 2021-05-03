import React from "react"
import { observer } from "mobx-react-lite"
import { useSelector, useDispatch } from 'react-redux'
import { SafeAreaView, ViewStyle } from "react-native" 
import { Screen, Button, Text, Wallpaper, Header } from "../../components"
import { TextInput } from "react-native-gesture-handler"
import { View, TextStyle } from "react-native"
import { setAge, setName, setHeight, setWeight } from '../../models/redux/reducers/personSlice'
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
  fontFamily: typography.primary
}
const BOLD: TextStyle = { fontWeight: "bold" }
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
  paddingTop: 50,
  textTransform: 'uppercase'

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

const FOOTER: ViewStyle = {  }
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
}

const LIST_ITEM: TextStyle = {
    fontSize: 20,
    paddingBottom: 10,
    textTransform: 'uppercase'
}

export function HomeScreen() {
  const navigation = useNavigation(); 
  return (
    <View testID="HomeScreen" style={FULL}>
      <Wallpaper />
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Text style={TITLE} preset='header' text="Fitness" />
        <Text onPress={()=> navigation.navigate("exercise")}
                     style={LIST_ITEM}   >Exercises</Text>
        <Text onPress={()=> navigation.navigate("profile")}
        style={LIST_ITEM}   >Profile</Text>
         <Text onPress={()=> navigation.navigate("progress")}
        style={LIST_ITEM}   >Progress</Text>
        <Text onPress={()=> navigation.navigate("info")}
        style={LIST_ITEM}   >Start from begin</Text>
      </Screen>
      
    </View>
  )

}
