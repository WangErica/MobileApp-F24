import React, {useContext} from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import DiaryContext from '../context/DiaryContext'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const IndexScreen = ({navigation}) => {
  const {state, addDiaryPost, deleteDiaryPost} = useContext(DiaryContext)
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(post) => post.title}
        renderItem={({item}) => (
          // brings you to the viewscreen
        <TouchableOpacity onPress={() => navigation.navigate('View',{id: item.id})}>
          <View style={styles.row}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity onPress={() => deleteDiaryPost(item.id)}>
              <MaterialIcons name="delete" size={24} color="#333" />
            </TouchableOpacity>
          </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
//Adds an add button on the screen name block
IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () =>( 
    <TouchableOpacity onPress={() => navigation.navigate('Create')}>
      <MaterialIcons style={styles.addIcon} name="add" size={30} color="black" />
    </TouchableOpacity>
  )}
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#666',
  },
  title: {
    fontSize: 18,
  },
  addIcon:{
    marginRight: 10,
  },
})

export default IndexScreen
