import {StyleSheet, Text, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import yelp from '../api/yelp'

const DetailScreen = (props) => {
  const {navigation,photos} = props
  const id = navigation.getParam('id')

  const [result, setResult] = useState('')

  const getResult = async (id) => {
    try{
    const response = await yelp.get(`/${id}`)
    console.log(response.data)
    setResult(response.data)
    } catch(err){
      console.log('ERROR',err)
    }
  }

  useEffect(() => {
    getResult(id)
  },[])

  return (
    // found: object with keys {id, alias, name, image_url, is_claimed, is_closed, 
    //url, phone, display_phone, review_count, categories, rating, location, coordinates, 
    //photos, price, hours, attributes, transactions, special_hours}
    <View>
      <Text>Detail Screen</Text>
      <Text>ID: {id}</Text>
      <Text>{result.name}</Text>
      <Text>{result.rating}</Text>
      <Text>{result.phone}</Text>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})
