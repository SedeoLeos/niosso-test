import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
  },

  image: {
    flex: 2,
    objectFit: "cover",
    resizeMode: "cover",
    justifyContent: "flex-end"
  },
  test: {
    textAlign: "center",
    color: "white",
    justifyContent: "center"
  },
  blue: {
    position: "relative",
    justifyContent: "center",
    backgroundColor: "#0044BB",
    flex: 1,
    paddingHorizontal: 25,

    paddingTop: 0
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 20
  },
  textDescrible: {
    fontSize: 14
  },
  linearGradient: {
    position: "absolute",
    top: -150,
    bottom: 0,
    height: 200,
    left: 0,
    right: 0
  }
});
