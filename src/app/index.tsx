import {useState} from "react"
import { StyleSheet, 
    View, 
    Image, 
    Text, 
    ScrollView, 
    KeyboardAvoidingView, 
    Platform, 
    Alert } 
    from "react-native"

import { Input } from "../components/Input"
import { Button } from "../components/Button" 
import {Link} from "expo-router"

export default function Index() {
    const [email, setEmail] = useState("")


    function handleSignIn() {
        //Alert.alert("Entrar", "Função de entrar acionada.")
        console.log(email)
    }
    return (
        <KeyboardAvoidingView 
        style={{flex:1}} behavior={Platform.select({ ios: "padding", android: "height" })}>
    <ScrollView contentContainerStyle={{flexGrow: 1}} 
    keyboardShouldPersistTaps="handled"
    showsVerticalScrollIndicator={false}>

    <View style={styles.container}>
        
    <Image 
        source={require("../assets/logoFundo.png")}



        style={styles.ilustration}
        />

        <Text style={styles.title}>Entrar {email}</Text>
        <Text style={styles.subtitle}>Acesse sua conta com e-mail e senha.</Text>
     
     <View style={styles.form}>
        <Input placeholder="E-mail" keyboardType="email-address" 
        onChangeText={setEmail} />

        <Input  placeholder="Senha" secureTextEntry/>
        <Button label="Entrar" onPress={handleSignIn}/>
      </View>
      <Text style={styles.footerText}>Não tem uma conta? {" "} 
        <Link href="/signup" style={styles.footerLink}>
        Cadastre-se aqui.</Link>
      </Text>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDFDFD",
        padding: 32,
    },
    ilustration:{
    width: "100%",
    height: 330,
    resizeMode: "contain",
    marginTop: 62,
    },
    title: {
        fontSize: 32,
        fontWeight: "900",
    },
    subtitle:{
        fontSize: 16,
    },
     form:{
        marginTop: 24,
        gap: 12,
    },
    footerText: {
        textAlign: "center",
        marginTop: 24,
        color: "#585860"
    },
    footerLink:{
        color: "#032ad7",
        fontWeight: "700",
    },
})