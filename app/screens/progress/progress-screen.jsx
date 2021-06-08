import { useNavigation } from "@react-navigation/native"
import moment from "moment"
import React, { useEffect } from "react"
import { TextStyle, View, ViewStyle, Image, Modal, Pressable } from "react-native"
import { Calendar } from "react-native-calendars"
import { FlatList } from "react-native-gesture-handler"
import { useSelector } from "react-redux"
import { Header, Text, Wallpaper } from "../../components"
import { spacing } from "../../theme"

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  marginTop: 20,
  marginBottom: 10,
}

const CONTINUE: TextStyle = {
  paddingVertical: spacing,
  backgroundColor: "#00eeff",
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

const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
}

const MODALVIEW: TextStyle = {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  elevation: 1,
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
  fontSize: 18,
  textTransform: "uppercase",
  borderColor: "#636363",
  borderBottomWidth: 2,
  alignSelf: "flex-start",
}

const BLOCK: ViewStyle = {
  marginTop: 15,
  marginLeft: 30,
}
const CENTER: TextStyle = {
  fontSize: 20,
  textAlign: "center",
}

const FITNESSCUP: TextStyle = {
}

const FITNESSCUP_TEXT: TextStyle = {
  ...LIST_ITEM,
  color: 'black',
  fontSize: 20,
  alignSelf:'center'
}

const button: TextStyle ={
  borderRadius: 20,
  padding: 10,
  elevation: 2
}

const buttonClose: TextStyle ={
  backgroundColor: "#2196F3",
}

function FitnessCup(props) {
  const [id,setId] = React.useState(props.id)
  const [modalVisible, setModalVisible] = React.useState(true);
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
    <View  style={MODALVIEW}>
      <View  style={MODALVIEW}>
        <Text  style={FITNESSCUP_TEXT}>achievement</Text>
        <Image style={FITNESSCUP} source={require("./FitnessCup.png")} />
        <Pressable
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={[button, buttonClose]}>DONE</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
  )
  }

function ProgressList(props){
  const list = useSelector((state) => state.exercise.list)
  const listDisplay = Object.keys(list).map((key) => list[key])
  let exercise_name = (id) => listDisplay[id].title
  return ( 
    <View style={{ marginBottom: 20 }}>
      <Text style={CENTER}>{moment(props.date).format("YYYY-MM-DD").toString()}</Text>
      <View style={BLOCK}>
        <Text style={LIST_ITEM}>EXERCISE: {exercise_name(props.id)}</Text>
        <Text style={LIST_ITEM}>
          REPS: {props.reps} - SETS: {props.sets}
        </Text>
      </View>
    </View>
  )
}
  
export function ProgressScreen() {
  const exercises = useSelector((state) => state.person.exercises)
  const list = useSelector((state) => state.exercise.list)
  const listDisplay = Object.keys(list).map((key) => list[key])
  const [exercises_state, setExercises] = React.useState(exercises)
  const [day_before, setDayBefore] = React.useState("")
  const [markedDates, setMarkedDates] = React.useState({})
  const navigation = useNavigation()

  useEffect(() => {
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
  }, [])
  
  const renderItem = ({ item }) => (<ProgressList date={item.date} id={item.id} reps={item.reps} sets={item.sets} workouts_state/>)
  const pickDate = (day) => {
    let markedDatesCpy = { ...markedDates }
    if (day_before != "") {
      markedDatesCpy[day_before] = { ...markedDatesCpy[day_before], selected: false }
    }
    markedDatesCpy[day.dateString] = { ...markedDatesCpy[day.dateString], selected: true }
    setExercises(
      exercises.filter(
        (excercise) => moment(excercise.date).format("YYYY-MM-DD") == day.dateString,
      ),
    )
    setDayBefore(day.dateString)
    setMarkedDates(markedDatesCpy)
  }
  const reset = () => {
    setExercises(exercises)
  }
  const home = () => {
    navigation.navigate("home")
  }

  return (
    <View testID="ProgressScreen" style={FULL}>
      <Wallpaper />
      <FitnessCup/>
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
      <FlatList
        style={CONTAINER}
        data={exercises_state}
        renderItem={renderItem}
        keyExtractor={(item) => item.date}
      />
    </View>
  )
}
