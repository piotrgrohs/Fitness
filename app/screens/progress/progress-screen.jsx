import React from "react"
import { observer } from "mobx-react-lite"
import { useSelector, useDispatch } from "react-redux"
import { SafeAreaView, ViewStyle, Alert } from "react-native"
import { Screen, Button, Text, Wallpaper, Header } from "../../components"
import { FlatList, TextInput } from "react-native-gesture-handler"
import { View, TextStyle } from "react-native"
import { getExerciseName } from "../../models/redux/reducers/exerciseSlice"
import { CONNECTION_ERROR } from "apisauce"
import { color, spacing, typography } from "../../theme"
import { useNavigation } from "@react-navigation/native"
import moment from "moment"
import { Calendar } from "react-native-calendars"

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {}

const CONTINUE: TextStyle = {
  paddingVertical: spacing,
  backgroundColor: "#00eeff",
}
0
const TEXT: TextStyle = {}
const BOLD: TextStyle = { fontWeight: "bold" }
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
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
  marginBottom: spacing,
}

const FOOTER: ViewStyle = {}
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing,
}

const LIST_ITEM: TextStyle = {
  fontSize: 20,
  textTransform: "uppercase",
}

const BLOCK: ViewStyle = {
  marginTop: 20,
  marginLeft: 30,
}
const CENTER: TextStyle = {
  textAlign: "center",
}
export function ProgressScreen() {
  const exercises = useSelector((state) => state.person.exercises)
  const list = useSelector((state) => state.exercise.list)
  const listDisplay = Object.keys(list).map((key) => list[key])
  const [exercises_state, setExercises] = React.useState(exercises)
  const [workouts_state] = React.useState(listDisplay)
  let exercise_name = (id) => workouts_state[id].title

  const renderItem = ({ item }) => (
    <View>
      <Text style={CENTER}>{moment(item.date).format("YYYY-MM-DD").toString()}</Text>
      <View style={BLOCK}>
        <Text key={item.id}>Exercise: {exercise_name(item.id)} </Text>
        <Text>
          Reps {item.reps} - Sets {item.sets}
        </Text>
      </View>
    </View>
  )
  const navigation = useNavigation()
  const pickDate = (day) => {
    setExercises(
      exercises.filter(
        (excercise) => moment(excercise.date).format("YYYY-MM-DD") == day.dateString,
      ),
    )
  }
  const reset = () => {
  }
  const home = () => {
    navigation.navigate("home")
  }
  const markedDates = exercises.reduce(
    (markedDates, exercise) => (
      (markedDates[moment(exercise.date).format("YYYY-MM-DD").toString()] = {
        selected: false,
        marked: true,
        dotColor: "white",
      }),
      markedDates
    ),
    {},
  )

  return (
    <View testID="ProgressScreen" style={FULL}>
      <Wallpaper />
      <Header
        headerText="Progress"
        leftIcon="back"
        titleStyle={TITLE}
        onLeftPress={home}
        onRightPress={reset}
        rightIcon="redo"
      />
      <Calendar
        style={{
          height: 350,
        }}
        theme={{
          backgroundColor: "#000000",
          calendarBackground: "#000000",
          textSectionTitleColor: "#b6c1cd",
          textSectionTitleDisabledColor: "#d9e1e8",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#FFFFFF",
          todayTextColor: "#00adf5",
          dayTextColor: "#ebebeb",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#000000",
          arrowColor: "orange",
          disabledArrowColor: "#d9e1e8",
          monthTextColor: "#fcfeff",
          indicatorColor: "blue",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
        onDayPress={(day) => pickDate(day)}
        markedDates={markedDates}
      />
      <FlatList style={CONTAINER} data={exercises_state} renderItem={renderItem} />
    </View>
  )
}
