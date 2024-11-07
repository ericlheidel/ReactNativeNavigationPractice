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
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: 200,
    height: 200,
  },
  tileTitle: {
    fontSize: 32,
    fontWeight: "bold",
    margin: 12,
  },
  tile: {
    margin: 12,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  tileDetails: {
    padding: 12,
    marginTop: 12,
    borderWidth: 2,
    borderRadius: 4,
  },
  tileDetail: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "semibold",
    marginTop: 6,
    padding: 6,
    borderWidth: 1,
    borderRadius: 4,
  },
})
