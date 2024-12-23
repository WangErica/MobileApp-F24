import React, {useState, useContext} from 'react'
import {Button,StyleSheet, Text, TextInput, View} from 'react-native'
import DiaryContext from '../context/DiaryContext'

const CreateScreen = ({navigation}) => {
    const id = navigation.getParam('id')
    const {addDiaryPost} = useContext(DiaryContext)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
  return (
    <View>
      <Text style={styles.label}>Title: </Text>
      <TextInput 
      autoCapitalize='words'
      autoCorrect={false} 
      style={styles.input} 
      value={title} 
      onChangeText={(text) => setTitle(text)}/>

      <Text style={styles.label}>Content: </Text>
      <TextInput 
      autoCorrect={false} 
      style={styles.input} 
      value={content} 
      onChangeText={(text) => setContent(text)}/>

      <Button title="Save Post" onPress={() => {addDiaryPost(title, content,() => navigation.navigate('Index'))}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    label:{
        fontSize:30,
        margin: 10,
        marginBottom:5,
    },
    input:{
        fontSize:18,
        borderWidth: 1,
        borderColor: '#666',
        marginHorizontal: 10,
        marginVertical:5,
        borderRadius:5,
    },
})

export default CreateScreen