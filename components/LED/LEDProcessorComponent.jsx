import { Image, ScrollView, StyleSheet, Text, View } from "react-native"

export default function LEDProcessorComponent({ processor }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.tile}>
        <Image
          source={require("../../assets/favicon.png")}
          style={styles.image}
        />
        <View style={styles.processorDetails}>
          <Text style={styles.processorTitle}>
            {processor.processorBrand} {processor.processorModel}
          </Text>
          <Text style={styles.processorDetail}>
            Card Type:{" "}
            <Text style={styles.boldText}>{processor.processorCard}</Text>
          </Text>
          <Text style={styles.processorDetail}>
            Number of Ports:{" "}
            <Text style={styles.boldText}>{processor.numberOfPorts}</Text>
          </Text>
          <Text style={styles.processorDetail}>
            Max Resolution:{" "}
            <Text style={styles.boldText}>{processor.maxResolution}</Text>
          </Text>
          <Text style={styles.processorDetail}>
            {processor.fiberExtender && "Includes Fiber Extender"}
          </Text>
          <Text style={styles.processorDetail}>
            Controllers:{" "}
            <Text style={styles.boldText}>{processor.controlTypeId}</Text>
          </Text>
          <Text style={styles.processorDetail}>
            Redundancy:{" "}
            <Text style={styles.boldText}>
              {processor.processorRedundancyId}
            </Text>
          </Text>
          <Text style={styles.processorDetail}>
            Processor Software:{" "}
            <Text style={styles.boldText}>{processor.processorSoftwareId}</Text>
          </Text>
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
  processorDetails: {
    marginTop: 8,
  },
  processorTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
    textAlign: "center",
  },
  processorDetail: {
    fontSize: 18,
    color: "#666",
    marginBottom: 8,
  },
  boldText: {
    color: "black",
    fontWeight: "600",
  },
})
