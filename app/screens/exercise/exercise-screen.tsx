import { useNavigation } from "@react-navigation/native"
import React from "react"
import { FlatList, TextStyle, View, ViewStyle } from "react-native"
import { useSelector } from "react-redux"
import { Header, Text, Wallpaper } from "../../components"
import { color, spacing, typography } from "../../theme"

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}

const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
}
const BOLD: TextStyle = { fontWeight: "bold" }
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  textTransform: "uppercase",
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
}

const LIST_ITEM: TextStyle = {
  fontSize: 20,
  marginBottom: 10,
  borderColor: "#636363",
  borderBottomWidth: 2,
  width: "auto",
  textTransform: "uppercase",
  alignSelf: "flex-start",
}

export function ExerciseScreen() {
  const navigation = useNavigation()
  const list = useSelector((state) => state.exercise.list)
  const listDisplay = Object.keys(list)
    .map((key) => list[key])
    .sort((a, b) => a.title.localeCompare(b.title))
  const home = () => {
    navigation.navigate("home")
  }
  return (
    <View testID="ExerciseScreen" style={FULL}>
      <Wallpaper />
      <Header headerText="Exercises" leftIcon="back" titleStyle={TITLE} onLeftPress={home} />
      <FlatList
        data={listDisplay}
        style={CONTAINER}
        renderItem={({ item }) => (
          <Text
            onPress={() => navigation.navigate("exercisedescription", { id: item.id })}
            style={LIST_ITEM}
            key={item.id.toString()}
          >
            {item.title.toString()}
          </Text>
        )}
      />
    </View>
  )
}
