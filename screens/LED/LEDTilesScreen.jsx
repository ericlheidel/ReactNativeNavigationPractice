import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { LEDTileExamples } from "../../utility"
import LEDTileComponent from "../../components/LED/LEDTileComponent"

export default function LEDTilesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        {LEDTileExamples.map((tile) => {
          return <LEDTileComponent key={tile.id} tile={tile} />
        })}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
})
