import { useNavigation } from "@react-navigation/native"
import React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { useDispatch, useSelector } from "react-redux"
import { Header, Screen, Text, Wallpaper } from "../../components"
import { setAge, setHeight, setName, setWeight, setPreference } from "../../models/redux/reducers/personSlice"
import { color, spacing, typography } from "../../theme"
import DropDownPicker from 'react-native-dropdown-picker'

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
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
  textTransform: "uppercase",
}

const CONTENT: TextStyle = {
  ...TEXT,
  fontSize: 15,
  width: "100%",
  lineHeight: 22,
  paddingBottom: 5,
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

export function ProfileScreen() {
  const name_state = useSelector((state) => state.person.name)
  const age_state = useSelector((state) => state.person.age)
  const height_state = useSelector((state) => state.person.height)
  const weight_state = useSelector((state) => state.person.weight)
  const preferance_state = useSelector((state) => state.person.preference)
  const person = useSelector((state) => state.person)
  const dispatch = useDispatch()
  const navigation = useNavigation()


  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(preferance_state);
  const [items, setItems] = React.useState([
    {label: 'Lost', value: 'lost'},
    {label: 'Ass', value: 'ass'},
    {label: 'Power', value: 'power'},
  ]);


  const setPreferenceValue = (callback) => {
    dispatch(setPreference(callback(callback)))
  }

  const home = () => {
    navigation.navigate("home")
  }

  return (
    <View testID="ProfileScreen" style={FULL}>
      <Wallpaper />
      <Screen style={CONTAINER} backgroundColor={color.transparent}>
        <Header headerText="Profile" leftIcon="back" titleStyle={TITLE} onLeftPress={home} />
        <Text tx={`infomationScreen.name`} />
        <TextInput
          onChangeText={(value) => dispatch(setName(value))}
          value={name_state}
          style={INPUT}
        />
        <Text tx={`infomationScreen.height`} />
        <View style={{ flexDirection: "row" }}>
          <TextInput
            onChangeText={(value) => dispatch(setHeight(value))}
            value={height_state}
            style={INPUT}
          />
          <Text style={{}}>cm</Text>
        </View>
        <Text tx={`infomationScreen.weight`} />
        <View style={{ flexDirection: "row" }}>
          <TextInput
            onChangeText={(value) => dispatch(setWeight(value))}
            value={weight_state}
            style={INPUT}
          />
          <Text style={{}}>kg</Text>
        </View>
        <Text tx={`infomationScreen.age`} />
        <TextInput
          onChangeText={(value) => dispatch(setAge(value))}
          value={age_state}
          style={INPUT}
        />
        <Text tx={`infomationScreen.preferances`} />
         <DropDownPicker
      open={open}
      value={Object.entries(items).filter(([key,value])=> value.value == preferance_state)[0][1].value}
      items={items}
      setOpen={setOpen}
      setValue={setPreferenceValue}
      setItems={setItems}
      style={PICKER}
      theme="DARK"
    />
      </Screen>
    </View>
  )
}
