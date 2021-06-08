import { useNavigation } from "@react-navigation/native"
import React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography } from "../../theme"

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
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

const LIST_ITEM: TextStyle = {
    fontSize: 20,
    marginBottom: 10,
    textTransform: 'uppercase',
    borderColor: "#636363",
  borderBottomWidth: 2,
  alignSelf: "flex-start",
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
