import React, {useState} from 'react'
import {View, ScrollView, StyleSheet} from 'react-native'
// import useResults from '../hooks/useResults'
import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'
import {buinesses} from '../api/businesses'
const SearchScreen = () => {
  
  const [term, setTerm] = useState('')
  // const [searchApi, results, errorMessage] = useResults()
  const results = buinesses

  const filterResultsByPrice = (price) => {
    return results.filter((result)=>{
      return result.price === price

    })
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {/* {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null} */}
      {/* <Text>We found {results.length} results!</Text> */}
      <ScrollView>
      <ResultsList title="Cheapskate" results={filterResultsByPrice('$')} />
      <ResultsList title="Normal" results={filterResultsByPrice('$$')} />
      <ResultsList title="Bougie" results={filterResultsByPrice('$$$')} />
      <ResultsList title="Moneybags" results={filterResultsByPrice('$$$$')} />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  error: {
    fontSize: 12,
    color: 'orangered',
    fontStyle: 'italic',
    marginHorizontal: 15,
  },
})

export default SearchScreen
