import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const COLORS = {
  primary: "#004777",
  black: "#000000",
  white: "#FFFFFF",
};

export default function Header() {
  return (
    <View style={styles.container}>
      
      {/* LOGO */}
      <Image
        source={require("../assets/logoSemFundo.png")}
        style={styles.logo}
      />

      {/* TÍTULO */}
      <Text style={styles.title}>LOGYM</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: 110,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    paddingTop: 30,
  },

  logo: {
    position: "absolute",
    left: 99,
    top: 32, // Altura da logo
    width: 60,
    height: 65,
    resizeMode: "contain",
  },

  title: {
  position: "absolute",
  alignSelf: "center",
  top: 45, // Altura do texto
  fontSize: 28,
  fontWeight: "bold",
  color: COLORS.white,
},
});