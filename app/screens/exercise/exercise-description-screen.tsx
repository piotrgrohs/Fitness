import React from "react"
import { useSelector } from "react-redux"
import { FlatList, SafeAreaView, StyleSheet, ViewStyle } from "react-native"
import { Button, Text, Wallpaper, Header } from "../../components"
import { View, TextStyle } from "react-native"
import { color, spacing, typography } from "../../theme"
import { useNavigation } from "@react-navigation/native"
import { Audio, Video } from "expo-av"
import { Asset } from "expo-asset"
import { Dimensions } from "react-native"

const FULL: ViewStyle = { flex: 1}
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}

const CONTINUE: TextStyle = {
  backgroundColor: "#00c424",
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  marginBottom: spacing[3],
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
}

const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 20,
  letterSpacing: 2,
}
const LIST_ITEM: TextStyle = {
  fontSize: 20,
  marginBottom: 10,
  width: "auto",
  alignSelf: "flex-start",
}
const LIST_TITLE: TextStyle = {
  ...LIST_ITEM,
  textTransform: "uppercase",
  marginLeft: 10,
}

const FOOTER: ViewStyle = {}
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
}
const videos = {
  0:require('./videos/0.mp4'),
  1:require('./videos/1.mp4'),
  2:require('./videos/2.mp4'),
  3:require('./videos/3.mp4'),
  4:require('./videos/4.mp4'),
  5:require('./videos/5.mp4'),
  6:require('./videos/6.mp4'),
  7:require('./videos/7.mp4'),
  8:require('./videos/8.mp4'),
  9:require('./videos/9.mp4'),
  10:require('./videos/10.mp4'),
  11:require('./videos/11.mp4'),
  12:require('./videos/12.mp4'),
  13:require('./videos/13.mp4'),
  14:require('./videos/14.mp4'),
  15:require('./videos/15.mp4'),
  16:require('./videos/16.mp4'),
  17:require('./videos/17.mp4'),
  18:require('./videos/18.mp4'),
  19:require('./videos/19.mp4'),
  20:require('./videos/20.mp4'),
  21:require('./videos/21.mp4'),
  22:require('./videos/22.mp4'),
  23:require('./videos/23.mp4')
}

export function Presentation({id}){
  const video = React.useRef(null)
  const width = Dimensions.get("window").width
  if(videos[id]){
    return (
      <View>
      <Text style={LIST_TITLE}>Video: </Text>
        <Video
          ref={video}
          source={videos[id]}
          useNativeControls
          isMuted
          resizeMode={"contain"}
          style={{ height: 300, width: width - 40, marginLeft: 20}}
          />
    </View>
)
}else{ return null}
}

export function ExerciseDescriptionScreen({ route }) {
  const navigation = useNavigation()
  const { id } = route.params
  const exercise = useSelector((state) => state.exercise.list[id])
  const submit = () => {
    navigation.navigate("exercisedo", { id, routeReps: exercise.reps, routeSets: exercise.sets })
  }
  const home = () => {
    navigation.navigate("exercise")
  }
  return (
    <View testID="ExerciseDescriptionScreen" style={FULL}>
      <Wallpaper />
      <Header headerText={exercise.title} leftIcon="back" titleStyle={TITLE} onLeftPress={home} />
        <Text style={LIST_TITLE}>Exercise steps: </Text>
        <FlatList
          style={CONTAINER}
          contentContainerStyle = {{flexGrow:1}}
          data={exercise.data}
          keyExtractor={({ index }) => index}
          renderItem={({ item, index }) => (
            <Text key={item} style={LIST_ITEM}>
              {index + 1}.{item}
            </Text>
          )}
        />
      <Presentation id={id}/>
      <Text style={LIST_ITEM}>Default reps: {exercise.reps}</Text>
      <Text style={LIST_ITEM}>Default sets: {exercise.sets}</Text>
      <SafeAreaView style={FOOTER}>
        <View style={FOOTER_CONTENT}>
          <Button
            style={CONTINUE}
            textStyle={CONTINUE_TEXT}
            onPress={() => submit()}
            text="START"
          />
        </View>
      </SafeAreaView>
    </View>
  )
}

// 5,9,10,7,18,20,4,15,23,16,17,0
