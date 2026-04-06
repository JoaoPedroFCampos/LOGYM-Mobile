import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { academias } from "../../data/academias";

export default function Academia() {
  const { id } = useLocalSearchParams();
  const acad = academias.find((a) => a.id === id);

  if (!acad) return <Text>Erro</Text>;

  return (
    <View>
      <Text>{acad.nome}</Text>
      <Text>{acad.descricao}</Text>
    </View>
  );
}