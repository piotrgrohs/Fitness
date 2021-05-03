import React from "react"
import { observer } from "mobx-react-lite"
import { useSelector, useDispatch } from 'react-redux'
import { FlatList, SafeAreaView, SectionList, ViewStyle } from "react-native"
import { Screen, Button, Text, Wallpaper, Header } from "../../components"
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
    backgroundColor: "#00eeff"
}

const TEXT: TextStyle = {
    color: color.palette.white,
    fontFamily: typography.primary,
}
const BOLD: TextStyle = { fontWeight: "bold" }
const TITLE: TextStyle = {
    ...TEXT,
    ...BOLD,
    textTransform: 'uppercase',
    fontSize: 28,
    lineHeight: 38,
    textAlign: "center",
}

const CONTINUE_TEXT: TextStyle = {
    ...TEXT,
    ...BOLD,
    fontSize: 13,
    letterSpacing: 2,
}

const CONTENT: TextStyle = {
    ...TEXT,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: spacing[5],

}

const LIST_ITEM: TextStyle = {
    fontSize: 20,
    paddingBottom: 10,
    textTransform: 'uppercase'
}

const FOOTER: ViewStyle = { backgroundColor: "#20162D", marginBottom: 64 }
const FOOTER_CONTENT: ViewStyle = {
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[4],
}

export function TrainingScreen() {

    const navigation = useNavigation();

    const submit = () => {
        navigation.navigate("welcome");
    }

    const description = (id) => {
        navigation.navigate("exercisedescription", { id })
    }

    const list = useSelector(state => state.exercise.list)
    const listDisplay = Object.keys(list).map((key)=> list[key])
    const dispatch = useDispatch();
    const home = () => {navigation.navigate("home")} 
    return (
        
        <View testID="TrainingScreen" style={FULL}>
            <Wallpaper />
            <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
                 <Header headerText="Exercises" leftIcon="back" titleStyle={TITLE} onLeftPress={home}/>
                
                <FlatList data={listDisplay}
                    renderItem={({ item }) => <Text onPress={()=> navigation.navigate("exercisedescription",{id:item.id})}
                     style={LIST_ITEM} key={item.id.toString()}  >{item.title}</Text>}
                />
            </Screen>
          
        </View >
    )

}
