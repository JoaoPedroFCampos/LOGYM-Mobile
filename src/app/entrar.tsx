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
     const [password, setPassword] = useState("")


     function handleSignIn() {
    if (!email || !password) {
        Alert.alert("Erro", "Preencha todos os campos");
        return;
    }

    console.log("Email:", email);
    console.log("Senha:", password);
}

    
    return (
        <KeyboardAvoidingView 
        style={{flex:1}} behavior={Platform.select({ ios: "padding", android: "height" })}>
    <ScrollView contentContainerStyle={{flexGrow: 1}} 
    keyboardShouldPersistTaps="handled"
    showsVerticalScrollIndicator={false}>

    <View style={styles.container}>
        
    <Image 
        source={require("../assets/logoSemFundoNome.png")}



        style={styles.ilustration}
        />

        <Text style={styles.title}>Entrar </Text>
        <Text style={styles.subtitle}>Acesse sua conta com e-mail e senha.</Text>
     
     <View style={styles.form}>
        <Input placeholder="E-mail" keyboardType="email-address" 
        onChangeText={setEmail} />

        <Input  placeholder="Senha" secureTextEntry onChangeText={setPassword}/>
        <Button label="Entrar" onPress={handleSignIn}/>
      </View>
      <Text style={styles.footerText}>Ainda não possui uma conta? {" "} 
        <Link href="/home" style={styles.footerLink}>
        Cadastre-se.</Link>
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
    padding: 24,
    justifyContent: "center", //alinhamento vertical
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
        marginTop: 16,
    },
    subtitle:{
        fontSize: 16,
        marginTop: 16,
        color: "#666",
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
        color: "#3366FF", //ou "#032ad7",
        fontWeight: "700",
    },
})