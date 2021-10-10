import { useNavigation } from "@react-navigation/native"
import React from "react"
import { SafeAreaView, TextStyle, View, ViewStyle } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { useDispatch, useSelector } from "react-redux"
import DropDownPicker from 'react-native-dropdown-picker'
import { Button, Screen, Text, Wallpaper } from "../../components"
import {
  setAge,
  setDate,
  setHeight,
  setName,
  setWeight,
  setPreference
} from "../../models/redux/reducers/personSlice"
import { color, spacing, typography } from "../../theme"

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}

const CONTINUE: TextStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: "#00eeff",
}

const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
}
const BOLD: TextStyle = { fontWeight: "bold" }
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
  paddingTop: 50,
  textTransform: "uppercase",
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

const INPUT: TextStyle = {
  fontSize: 20,
  color: "white",
  width: "40%",
  lineHeight: 22,
  borderColor: "#636363",
  borderBottomWidth: 2,
  marginBottom: 30,
}

const PICKER: TextStyle = {
  ...INPUT,
  backgroundColor: "black"
}

const FOOTER: ViewStyle = {}
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
}

export function InformationScreen() {
  const [name, setNameInput] = React.useState("")
  const [height, setHeightInput] = React.useState()
  const [weight, setWeigthInput] = React.useState()
  const [preference, setPreferencePicker] = React.useState()
  const [age, setAgeInput] = React.useState()
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    {label: 'Lost', value: 'lost'},
    {label: 'Ass', value: 'ass'},
    {label: 'Power', value: 'power'},
  ]);


  const submit = () => {
    dispatch(setAge(age))
    dispatch(setHeight(height))
    dispatch(setWeight(weight))
    dispatch(setName(name))
    dispatch(setPreference(value))
    const date = new Date()
    dispatch(setDate(date.toString()))
    navigation.navigate("goal")
  }

  return (
    <View testID="InformationScreen" style={FULL}>
      <Wallpaper />
      <Screen style={CONTAINER} backgroundColor={color.transparent}>
        <Text style={TITLE} preset="header" text="About You" />
        <Text tx={`infomationScreen.name`} />
        <TextInput
          onChangeText={(test) => setNameInput(test)}
          value={name}
          style={INPUT}
          placeholderTextColor="#e0e0e0"
        />
        <Text tx={`infomationScreen.height`} />
        <View style={{ flexDirection: "row" }}>
          <TextInput
            onChangeText={(text) => setHeightInput(text)}
            value={height}
            style={INPUT}
            placeholderTextColor="#e0e0e0"
          />
          <Text style={{}}>cm</Text>
        </View>
        <Text tx={`infomationScreen.weight`} />
        <View style={{ flexDirection: "row" }}>
          <TextInput
            onChangeText={(text) => setWeigthInput(text)}
            value={weight}
            style={INPUT}
            placeholderTextColor="#e0e0e0"
          />
          <Text style={{}}>kg</Text>
        </View>
        <Text tx={`infomationScreen.age`} />
        <TextInput
          onChangeText={(text) => setAgeInput(text)}
          value={age}
          style={INPUT}
          placeholderTextColor="#e0e0e0"
        />
        <Text tx={`infomationScreen.preferances`} />
        <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={(value)=> setValue(value)}
      setItems={setItems}
      style={PICKER}
      theme="DARK"
    />
      </Screen>
      <SafeAreaView style={FOOTER}>
        <View style={FOOTER_CONTENT}>
          <Button style={CONTINUE} textStyle={CONTINUE_TEXT} onPress={() => submit()} text="SAVE" />
        </View>
      </SafeAreaView>
    </View>
  )
}
