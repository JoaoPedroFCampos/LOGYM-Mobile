import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function AcademiaCard({ item, favoritos, toggle }: any) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/academia/${item.id}`)}
    >
      <View>
        <Image source={item.imagem} style={styles.image} />
        <TouchableOpacity style={styles.star} onPress={() => toggle(item.id)}>
          <Ionicons
            name={favoritos.includes(item.id) ? "star" : "star-outline"}
            size={22}
            color="#FFD700"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.texto}>{item.rua}</Text>
        <Text style={styles.texto}>
          {item.cidade} - {item.estado}
        </Text>
        <Text style={styles.texto}>{item.cep}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 15,
    marginBottom: 16,
    height: 173,
    overflow: "hidden",
  },
  image: { width: 150, height: "100%" },
  info: { flex: 1, padding: 12, justifyContent: "center" },
  nome: { fontSize: 22},
  texto: { fontSize: 13, color: "#8F8F8F" },
  star: { position: "absolute", right: 8, bottom: 8 },
});