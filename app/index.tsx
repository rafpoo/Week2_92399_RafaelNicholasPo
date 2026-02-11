import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require("../assets/images/profiles/1.jpg")}
        />
        <Text>Rafael Nicholas Po</Text>
        <Text>00000092399</Text>
      </View>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require("../assets/images/profiles/2.jpg")}
        />
        <Text>John Doe</Text>
        <Text>johndoe@example.com</Text>
      </View>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require("../assets/images/profiles/3.jpg")}
        />
        <Text>Michael Johnson</Text>
        <Text>michaeljohnson@example.com</Text>
      </View>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require("../assets/images/profiles/4.jpg")}
        />
        <Text>Emily Davis</Text>
        <Text>emilydavis@example.com</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    padding: 10,
  },
  image: {
    maxHeight: 200,
    resizeMode: "contain",
    marginBottom: 10,
  },
});
