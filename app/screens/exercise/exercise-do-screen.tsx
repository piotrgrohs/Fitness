import React from "react"
import { useDispatch } from "react-redux"
import { SafeAreaView, ViewStyle } from "react-native"
import { Screen, Button, Text, Wallpaper } from "../../components"
import { TextInput } from "react-native-gesture-handler"
import { View, TextStyle } from "react-native"
import { addExercise } from "../../models/redux/reducers/personSlice"
import { color, spacing, typography } from "../../theme"
import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"
import moment from "moment"
import { length } from "ramda"

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
  alignItems: "center",
}

const MARGIN: TextStyle = {
  paddingBottom: spacing[2],
}

const CONTINUE: TextStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: "#848687",
  width: 200,
}

const FOOTER_BUTTON: TextStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  marginBottom: spacing[3],
}

const CANCEL: TextStyle = {
  ...FOOTER_BUTTON,
  backgroundColor: "#848687",
}

const COMPLETE: TextStyle = {
  ...FOOTER_BUTTON,
  backgroundColor: "#00c424",
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
  fontSize: 20,
  letterSpacing: 2,
}

const CONTENT: TextStyle = {
  ...TEXT,
  fontSize: 20,
  textAlign: "center",
  lineHeight: 22,
  marginTop: spacing[5],
  marginBottom: spacing[5],
}

const CONTENT_TITLE: TextStyle = {
  ...CONTENT,
  borderColor: "#636363",
  borderBottomWidth: 2,
}

const FOOTER: ViewStyle = {}
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
}

export function ExerciseDoScreen({ route }) {
  const { id, routeSets, routeReps } = route.params
  const [reps, setReps] = React.useState(routeReps.toString())
  const [sets, setSets] = React.useState(routeSets.toString())
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const exercises = useSelector((state) => state.person.exercises)

  const increse_reps = () => {
    let numberOfReps = parseInt(reps) + 1
    setReps(numberOfReps.toString())
  }
  const decrese_reps = () => {
    let value = parseInt(reps)
    let numberOfReps = value > 1 ? value - 1 : 1
    setReps(numberOfReps.toString())
  }
  const increse_sets = () => {
    const numberOfSets = parseInt(sets) + 1
    setSets(numberOfSets.toString())
  }
  const decrese_sets = () => {
    let value = parseInt(sets)
    let numberOfSets = value > 1 ? value - 1 : 1
    setSets(numberOfSets.toString())
  }

  const get_daily_challenge = (exercises) => {
    return exercises.filter(
      (exercise) =>
        moment(exercise.date).format("YYYY-MM-DD") == moment(Date.now()).format("YYYY-MM-DD"),
    )
  }

  const complete = () => {
    let date = Date.now()
    dispatch(addExercise({ reps: reps, sets: sets, id: id, date: date }))
    let cup = length(get_daily_challenge(exercises)) > 0 ? false : true
    navigation.navigate("progress", { cup: cup })
  }
  const cancel = () => {
    navigation.navigate("home")
  }

  return (
    <View testID="ExerciseDoScreen" style={FULL}>
      <Wallpaper />
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Text style={TITLE} preset="header" text="Your excercise" />
        <Text style={CONTENT_TITLE}>REPS</Text>
        <Button
          style={CONTINUE}
          textStyle={CONTINUE_TEXT}
          onPress={() => increse_reps()}
          text="+"
        />
        <TextInput
          onChangeText={(value) => setReps(value)}
          value={reps}
          style={CONTENT}
          placeholderTextColor="#e0e0e0"
        />
        <Button
          style={CONTINUE}
          textStyle={CONTINUE_TEXT}
          onPress={() => decrese_reps()}
          text="-"
        />
        <Text style={MARGIN} />
        <Text style={CONTENT_TITLE}>SETS</Text>
        <Button
          style={CONTINUE}
          textStyle={CONTINUE_TEXT}
          onPress={() => increse_sets()}
          text="+"
        />
        <TextInput
          onChangeText={(value) => setSets(value)}
          value={sets}
          style={CONTENT}
          placeholderTextColor="#e0e0e0"
        />
        <Button
          style={CONTINUE}
          textStyle={CONTINUE_TEXT}
          onPress={() => decrese_sets()}
          text="-"
        />
      </Screen>

      <SafeAreaView style={FOOTER}>
        <View style={FOOTER_CONTENT}>
          <Button style={CANCEL} textStyle={CONTINUE_TEXT} onPress={() => cancel()} text="CANCEL" />

          <Button
            style={COMPLETE}
            textStyle={CONTINUE_TEXT}
            onPress={() => complete()}
            text="COMPLETE"
          />
        </View>
      </SafeAreaView>
    </View>
  )
}
