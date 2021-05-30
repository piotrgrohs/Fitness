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
import { withRootStore } from "../../models"
import { autorun } from "mobx"

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
  textTransform: 'uppercase'

}

const CONTENT: TextStyle = {
  ...TEXT,
  fontSize: 15,
  width:'100%',
  lineHeight: 22,
  paddingBottom: 5
}

const INPUT: TextStyle = {
  fontSize: 20,
  color: 'white',
  width: '40%',
  lineHeight: 22,
  borderColor: '#636363',
  borderBottomWidth: 2,
  marginBottom: 30
}


export function ProfileScreen() {
  const name_state = useSelector(state => state.person.name)
  const age_state = useSelector(state => state.person.age)
  const height_state = useSelector(state => state.person.height)
  const weight_state = useSelector(state => state.person.weight)
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const home = () => { navigation.navigate("home")}   

  return (
    <View testID="ProfileScreen" style={FULL}>
      <Wallpaper />
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
      <Header headerText="Profile" leftIcon="back" titleStyle={TITLE} onLeftPress={home}  />
        <Text style={CONTENT}>Your name:</Text>
        <TextInput
          onChangeText={test => dispatch(setName(test))}
          value={name_state} style={INPUT} placeholderTextColor="#e0e0e0"
        />
          <Text style={CONTENT}>Height:</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            onChangeText={text => dispatch(setHeight(text))} 
            value={height_state } style={INPUT} placeholderTextColor="#e0e0e0"
            />
          <Text style={{}}>cm</Text>
          </View>
        <Text style={CONTENT}>Weight:</Text>
          <View style={{flexDirection: 'row'}}>
        <TextInput
          onChangeText={text => dispatch(setWeight(text))} 
          value={weight_state } style={INPUT} placeholderTextColor="#e0e0e0"
          />
          <Text style={{}}>kg</Text>
          </View>
        <Text style={CONTENT}>Age:</Text>
        <TextInput
          onChangeText={text => dispatch(setAge(text))} 
          value={age_state} style={INPUT} placeholderTextColor="#e0e0e0"
        />
      </Screen>
      
    </View>
  )

}
