import React from "react"
import { useSelector } from "react-redux"
import { FlatList, SafeAreaView, ViewStyle } from "react-native"
import { Button, Text, Wallpaper, Header } from "../../components"
import { View, TextStyle } from "react-native"
import { color, spacing, typography } from "../../theme"
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
    textTransform: 'uppercase',
    marginLeft: 10
  }

const FOOTER: ViewStyle = {}
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
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
      <Header headerText={exercise.title}  leftIcon="back" titleStyle={TITLE} onLeftPress={home} />
      <Text style={LIST_TITLE}>Exercise steps: </Text>
      <FlatList
        style={CONTAINER}
        data={exercise.data}
        keyExtractor={({index}) => index}
        renderItem={({ item, index }) => (
          <Text key={item} style={LIST_ITEM}>
            {index + 1}.{item}
          </Text>
        )}
      />
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
