import React, { useContext } from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import DiaryContext from '../context/DiaryContext'
import FontAwesome from '@expo/vector-icons/FontAwesome'


const ViewScreen = ({navigation}) => {
  const id = navigation.getParam('id')
  const {state} = useContext(DiaryContext)

  const post = state.find((diaryPost) => diaryPost.id === navigation.getParam('id'))
  return (
    <View>
      <Text>{post.title} - {post.id}</Text>
      <Text>{post.content}</Text>
    </View>
  )
}

ViewScreen.navigationOptions = ({navigation}) => {
  const id = navigation.getParam('id')
  return {
    headerRight: () =>( 
    <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: id})}>
      <FontAwesome style ={styles.editIcon} name='pencil' size={30} color='#666' />
    </TouchableOpacity>
  )}
}

const styles = StyleSheet.create({
  editIcon:{
    marginRight: 10,
  },
})

export default ViewScreen