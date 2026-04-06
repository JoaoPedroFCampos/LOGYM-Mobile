// import { StyleSheet, TextInput } from "react-native";

// export function Input(props: any) {
//   return <TextInput style={styles.input} {...props} />;
// }

// const styles = StyleSheet.create({
//   input: {
//     backgroundColor: "#FFF",
//     padding: 12,
//     borderRadius: 10,
//   },
// });

import {TextInput, StyleSheet,TextInputProps} from "react-native"

export function Input({...rest }: TextInputProps) {
    return <TextInput style={styles.input} {...rest} />
    
}

const styles = StyleSheet.create({
    input:{
       width:"100%",
       height:48,
       borderWidth:1,
       borderColor: "#DCDCDC",
       borderRadius: 8,
       fontSize:16,
       padding: 12,
    },
   
})
