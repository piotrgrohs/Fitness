import { useSelector } from "react-redux"
import React from "react"
import moment from "moment"
import {
  TextStyle,
  View,
  ViewStyle,
  Image,
  Modal,
  Pressable,
  TouchableHighlight,
} from "react-native"
import { Header, Text, Wallpaper } from "../../components"

const CENTER: TextStyle = {
  fontSize: 20,
  textAlign: "center",
}
const BLOCK: ViewStyle = {
  marginTop: 15,
  marginLeft: 30,
}
const LIST_ITEM: TextStyle = {
  fontSize: 18,
  textTransform: "uppercase",
  borderColor: "#636363",
  borderBottomWidth: 2,
  alignSelf: "flex-start",
}

const ROW_FRONT: TextStyle = {
        backgroundColor: 'black',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
}

function ProgressList(props) {
  const list = useSelector((state) => state.exercise.list)
  const listDisplay = Object.keys(list).map((key) => list[key])
  let exercise_name = (id) => listDisplay[id].title
  return (
    <TouchableHighlight underlayColor={'#AAA'} style={ROW_FRONT}>
      <View style={{ marginBottom: 20 }}>
        <Text style={CENTER}>{moment(props.date).format("YYYY-MM-DD").toString()}</Text>
        <View style={BLOCK}>
          <Text style={LIST_ITEM}>EXERCISE: {exercise_name(props.id)}</Text>
          <Text style={LIST_ITEM}>
            REPS: {props.reps} - SETS: {props.sets}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default ProgressList
