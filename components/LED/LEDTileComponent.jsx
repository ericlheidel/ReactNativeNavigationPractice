import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"

export default function LEDTileComponent({ tile }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.tile}>
        <Image
          source={require("../../assets/favicon.png")}
          style={styles.image}
        />
        <View style={styles.tileDetails}>
          <Text style={styles.tileTitle}>
            {tile.tileBrand} {tile.pixelPitch}mm
          </Text>
          {tile.tileModel ? (
            <Text style={styles.tileDetail}>Model: {tile.tileModel}</Text>
          ) : (
            ""
          )}
          <Text style={styles.tileDetail}>Card Type: {tile.tileCard}</Text>
          <Text style={styles.tileDetail}>Pitch: {tile.pixelPitch}mm</Text>
          <Text style={styles.tileDetail}>
            Dimensions: {`\n`}
            {tile.widthMM}mm x {tile.heightMM}mm
          </Text>
          <Text style={styles.tileDetail}>
            Pixel Count: {tile.widthPixel} x {tile.heightPixel}
          </Text>
          <Text style={styles.tileDetail}>Tile Weight: {tile.weightLBS}</Text>
          <Text style={styles.tileDetail}>Processor: {tile.processorType}</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  tile: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
    alignSelf: "center",
  },
  tileDetails: {
    marginTop: 8,
  },
  tileTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
    textAlign: "center",
  },
  tileDetail: {
    fontSize: 18,
    color: "#666",
    marginBottom: 8,
  },
  boldText: {
    color: "black",
    fontWeight: "600",
  },
})
