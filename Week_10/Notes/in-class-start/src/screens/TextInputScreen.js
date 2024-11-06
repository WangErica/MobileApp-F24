import React, {useState} from 'react'
import { StyleSheet, Text, View ,TextInput} from 'react-native'

const TextInputScreen = () => {
    const[password, setPassword] = useState('')
    return (
        <View>
        <Text>TextInputScreen</Text>
        <TextInput style={styles.input} 
            autoCapitalize='none' 
            autoCorrect={false} 
            value={password} 
            onChangeText={(newValue)=>setName(newValue)}/>
            {password.length < 5 ? (<Text>Password must be at least 5 characters long</Text>) : null}
        </View>
    )
    }

    const styles = StyleSheet.create({
        input:{
            margin:15,
            borderColor:'black',
            borderWdith: 1,
        },
        error:{
            fontSize:12,
            marginHorizontal: 15,
            color: 'red'


        }
    })

    export default TextInputScreen