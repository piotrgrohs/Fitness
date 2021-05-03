import React, { useMemo } from "react"
import { observer } from "mobx-react-lite"
import { useSelector, useDispatch } from 'react-redux'
import { FlatList, SafeAreaView, SectionList, ViewStyle } from "react-native"
import { Screen, Button, Text, Wallpaper } from "../../components"
import { TextInput } from "react-native-gesture-handler"
import { View, TextStyle } from "react-native"
import { setGoal } from '../../models/redux/reducers/personSlice'
import { CONNECTION_ERROR } from "apisauce"
import { color, spacing, typography } from "../../theme"
import { createSelector } from 'reselect'
import { useNavigation } from "@react-navigation/native"

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[4],
}


const CONTINUE: TextStyle = {
    backgroundColor: "#00c424",
    paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  marginBottom: spacing[3]
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
    paddingTop: 50
}

const CONTINUE_TEXT: TextStyle = {
    ...TEXT,
    ...BOLD,
    fontSize: 20,
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

const FOOTER: ViewStyle = {  }
const FOOTER_CONTENT: ViewStyle = {
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[4],
}
 

export function ExerciseDescriptionScreen({route}) { 
    
    const navigation = useNavigation();
    const { id  } = route.params;
    const submit = () => { 
        navigation.navigate("exercisedo",{id});
    } 
    const exercise = useSelector(state => state.exercise.list[id]) 

    const dispatch = useDispatch(); 

    return (
        <View testID="ExerciseDescriptionScreen" style={FULL}>
            <Wallpaper />

                <Text style={TITLE} preset='header' text={exercise.title} />
                <FlatList style={CONTAINER} data={exercise.data} renderItem={({ item }) => <Text  
                      key={item}  >{item}</Text>}/> 
            <SafeAreaView style={FOOTER}>
                <View style={FOOTER_CONTENT}>
                    <Button style={CONTINUE}
                        textStyle={CONTINUE_TEXT}
                        onPress={() => submit()} text="START" />
                </View>
            </SafeAreaView>
        </View>
    )

}
