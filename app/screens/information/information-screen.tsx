import React from "react"
import { observer } from "mobx-react-lite"
import { useSelector, useDispatch } from 'react-redux'
import { SafeAreaView, ViewStyle } from "react-native" 
import { Screen, Button, Text, Wallpaper, Header } from "../../components"
import { TextInput } from "react-native-gesture-handler"
import { View, TextStyle } from "react-native"
import { setAge, setName, setHeight, setWeight, setDate} from '../../models/redux/reducers/personSlice'
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

export function InformationScreen() {
  const [name, setNameInput] = React.useState(''); 
  const [height, setHeightInput] = React.useState();
  const [weight, setWeigthInput] = React.useState();
  const [age, setAgeInput] = React.useState();
  const name_state = useSelector(state => state.person.name)
  const age_state = useSelector(state => state.person.age)
  const height_state = useSelector(state => state.person.height)
  const weight_state = useSelector(state => state.person.weight)
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const submit = () => {
    dispatch(setAge(age));
    dispatch(setHeight(height));
    dispatch(setWeight(weight));
    dispatch(setName(name));
    const date = new Date();
    dispatch(setDate(date.toString()));
    navigation.navigate("goal");
  }

  return (
    <View testID="InformationScreen" style={FULL}>
      <Wallpaper />
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Text style={TITLE} preset='header' text="About You" />
        <Text tx={`infomationScreen.name`} />
        <TextInput
          onChangeText={test => setNameInput(test)} placeholder={"..."}
          value={name} style={CONTENT} placeholderTextColor="#e0e0e0"
        />
        <Text tx={`infomationScreen.height`} />
        <TextInput
          onChangeText={text => setHeightInput(text)} placeholder={"... cm"}
          value={height} style={CONTENT} placeholderTextColor="#e0e0e0"
        />
        <Text tx={`infomationScreen.weight`} />
        <TextInput
          onChangeText={text => setWeigthInput(text)} placeholder={".. kg"}
          value={weight} style={CONTENT} placeholderTextColor="#e0e0e0"
        />
        <Text tx={`infomationScreen.age`} />
        <TextInput
          onChangeText={text => setAgeInput(text)} placeholder={".."}
          value={age} style={CONTENT} placeholderTextColor="#e0e0e0"
        />
      </Screen>
      <SafeAreaView style={FOOTER}>
        <View style={FOOTER_CONTENT}>
          <Button style={CONTINUE}
           textStyle={CONTINUE_TEXT}
            onPress={() => submit()} text="SAVE" />
        </View>
      </SafeAreaView>
    </View>
  )

}
