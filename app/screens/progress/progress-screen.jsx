import { useNavigation } from "@react-navigation/native"
import moment from "moment"
import React, { useEffect } from "react"
import { TextStyle, View, ViewStyle, Image, Modal, Pressable, TouchableOpacity } from "react-native"
import { Calendar } from "react-native-calendars"
import { useSelector, useDispatch } from "react-redux"
import { Header, Text, Wallpaper } from "../../components"
import { setExercises } from "../../models/redux/reducers/personSlice"
import { spacing } from "../../theme"
import ProgressList from "./progress-list"
import { SwipeListView } from "react-native-swipe-list-view"

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  marginTop: 20,
  marginBottom: 10,
}

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

const MODALVIEW: TextStyle = {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  elevation: 1,
}

const LIST_ITEM: TextStyle = {
  fontSize: 18,
  textTransform: "uppercase",
  borderColor: "#636363",
  borderBottomWidth: 2,
  alignSelf: "flex-start",
}

const FITNESSCUP: TextStyle = {}

const FITNESSCUP_TEXT: TextStyle = {
  ...LIST_ITEM,
  color: "black",
  fontSize: 20,
  alignSelf: "center",
}

const BUTTON: TextStyle = {
  borderRadius: 20,
  padding: 10,
  elevation: 2,
}

const BUTTON_CLOSE: TextStyle = {
  backgroundColor: "#2196F3",
}

const ROWBACK: ViewStyle = {
  alignItems: "center",
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-between",
  paddingLeft: 15,
}

const BACK_RIGHT_BUTTON: ViewStyle = {
  alignItems: "center",
  bottom: 0,
  justifyContent: "center",
  position: "absolute",
  top: 0,
  width: 75,
}
const DELETE_BUTTON: ViewStyle = {
  backgroundColor: "red",
  right: 0,
}

function FitnessCup(props) {
  const [modalVisible, setModalVisible] = React.useState(props.cup)
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.")
        setModalVisible(!modalVisible)
      }}
    >
      <View style={MODALVIEW}>
        <View style={MODALVIEW}>
          <Text style={FITNESSCUP_TEXT}>achievement</Text>
          <Image style={FITNESSCUP} source={require("./FitnessCup.png")} />
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <Text style={[BUTTON, BUTTON_CLOSE]}>DONE</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

export function ProgressScreen({ route }) {
  const exercises = useSelector((state) => state.person.exercises)
  const [exercises_state, setExercisesState] = React.useState(exercises)
  const [day_before, setDayBefore] = React.useState("")
  const [markedDates, setMarkedDates] = React.useState({})
  const dispatch = useDispatch()
  let cup = route.params != undefined ? route.params.cup : false
  const [cupVisible, setcupVisible] = React.useState(cup)
  const navigation = useNavigation()

  useEffect(() => {
    setCalendar()
  }, [])


  const setCalendar = () => (
    setMarkedDates(
      exercises.reduce(
        (markedDates, exercise) => (
          (markedDates[moment(exercise.date).format("YYYY-MM-DD").toString()] = {
            marked: true,
            dotColor: "yellow",
          }),
          markedDates
        ),
        {},
      ),
    )
  )
  const renderItem = ({ item }) => (
    <ProgressList date={item.date} id={item.id} reps={item.reps} sets={item.sets} workouts_state />
  )

  const pickDate = (day) => {
    let markedDatesCpy = { ...markedDates }
    if (day_before != "") {
      markedDatesCpy[day_before] = { ...markedDatesCpy[day_before], selected: false }
    }
    markedDatesCpy[day.dateString] = { ...markedDatesCpy[day.dateString], selected: true }
    setExercisesState(
      exercises.filter(
        (excercise) => moment(excercise.date).format("YYYY-MM-DD") == day.dateString,
      ),
    )
    setDayBefore(day.dateString)
    setMarkedDates(markedDatesCpy)
  }

  const reset = () => {
    let markedDatesCpy = { ...markedDates }
    markedDatesCpy[day_before] = { ...markedDatesCpy[day_before], selected: false }
    setMarkedDates(markedDatesCpy)
    setExercisesState(exercises)
  }

  const onRowDidOpen = (rowKey) => {
    console.log("This row opened", rowKey)
  }

  const home = () => {
    navigation.navigate("home")
  }

  const deleteExerciseFromList = (date) => {
    dispatch(setExercises(exercises.filter((exercise) => exercise.date !== date)))
    setExercisesState(exercises.filter((exercise) => exercise.date !== date))
  }

  const renderHiddenItem = (data, rowMap) => (
    <View style={ROWBACK}>
      <TouchableOpacity
        style={[BACK_RIGHT_BUTTON, DELETE_BUTTON]}
        onPress={() => deleteExerciseFromList(data.item.date)}
      >
        <Text>DELETE</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View testID="ProgressScreen" style={FULL}>
      <Wallpaper />
      <FitnessCup cup={cupVisible} />
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
      <SwipeListView
        data={exercises_state}
        renderItem={renderItem}
        rightOpenValue={-150}
        style={CONTAINER}
        previewRowKey={"0"}
        renderHiddenItem={renderHiddenItem}
        previewOpenValue={-40}
        keyExtractor={(item) => item.date}
        previewOpenDelay={3000}
        onRowDidOpen={onRowDidOpen}
      />
    </View>
  )
}
