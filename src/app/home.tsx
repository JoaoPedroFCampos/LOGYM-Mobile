import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/header";
import { router } from "expo-router";

const COLORS = {
  background: "#D3D4D9",
  white: "#FFF",
  gray: "#8F8F8F",
  black: "#000000",
};

type Academia = {
  id: string;
  nome: string;
  rua: string;
  cidade: string;
  estado: string;
  cep: string;
  imagem: any;
};

// Dados de academias
export default function Home() {
  const academias: Academia[] = [
    {
      id: "1",
      nome: "Smart Fit",
      rua: "Av. Vinte e Seis de Março, 701 - Centro",
      cidade: "Barueri",
      estado: "SP",
      cep: "06401-050",
      imagem: require("../assets/smartFit.webp"),
    },
    {
      id: "2",
      nome: "Blue Fit",
      rua: "Av. Trindade, 344 Bethaville I",
      cidade: "Barueri",
      estado: "SP",
      cep: "06404-326",
      imagem: require("../assets/blueFit.jpeg"),
    },
    {
      id: "3",
      nome: "Gaviões",
      rua: "Av. Juruá, 253 - Alphaville",
      cidade: "Barueri",
      estado: "SP",
      cep: "06455-010",
      imagem: require("../assets/academia-gavioes.jpg"),
    },
    {
      id: "4",
      nome: "Bio Ritmo",
      rua: "Av. Piracema, 669 - Tamboré",
      cidade: "Barueri",
      estado: "SP",
      cep: "06460-030",
      imagem: require("../assets/academia-bioRitmo.jpg"),
    },
  ];

  function renderItem({ item }: { item: Academia }) {
    return (
      <View style={styles.card}>
        <View>
          <Image source={item.imagem} style={styles.image} />

          {/* Favorito */}
          <TouchableOpacity style={styles.star}>
            <Ionicons name="star-outline" size={22} color="#FFD700" />
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
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />

      {/* Perfil e Nome */}
      <View style={styles.userContainer}>
      <TouchableOpacity onPress={() => router.push("/perfil")}>
      <Ionicons name="person-circle-outline" size={45} color="#000" />
      </TouchableOpacity>
      <Text style={styles.userName}>Yuri</Text>
      </View>

      {/* Barra de busca */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={COLORS.gray} />

        <TextInput
          placeholder="Localizar academias"
          placeholderTextColor={COLORS.gray}
          style={styles.input}
        />

        <TouchableOpacity>
          <Ionicons
            name="ellipsis-vertical"
            size={20}
            color={COLORS.black}
          />
        </TouchableOpacity>
      </View>

      {/* Lista */}
      <FlatList
        data={academias}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D4D9",
  },

  userContainer: { //Ícone de perfil
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    marginLeft: 16,
    gap: 4,
},
  userName: {
    fontSize: 16,
    fontFamily: "Alexandria-SemiBold",
    top: -2, // Altura do nome do usuário
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20, // Tamanho da barra de pesquisa
    marginTop: 16,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 45,
  },

  input: {
    flex: 1,
    marginHorizontal: 8, // Centralização da frase na barra de pesquisa
  },

  list: {
    padding: 16, // tamanho geral dos cards das academias
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#004777",
    borderRadius: 35,
    marginBottom: 25,
    height: 173,
    overflow: "hidden",
    elevation: 3,
  },

  image: {
    width: 150,
    height: "100%",
  },

  info: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
  },

  nome: {
    fontSize: 22,
    fontFamily: "AlfaSlabOne-Regular",
    marginBottom: 6,
    color: "#FFF",
  },

  texto: {
    fontSize: 13,
    fontFamily: "Alexandria-SemiBold",
    color: "#FFF",
  },

  star: {
    position: "absolute",
    right: 8,
    bottom: 8,
  },
});
