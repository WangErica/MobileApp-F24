// rnfes auto completes with ES7 React Native Snippets
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TutorialScreen = () => {
  return (
    <View>
      <Text style={styles.blueText}>TutorialScreen</Text>
      <Text>TutorialScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    blueText: {
        fontSize: 50,
        color: '#006fff'
      },
})

export default TutorialScreen