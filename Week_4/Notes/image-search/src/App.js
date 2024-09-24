//import searchImages from "./api";
import {useState} from 'react'
import SearchBar from "./components/SearchBar";
import ImageList from './components/ImageList'
import searchImages from './api'

const App = () => {
  //the reason we want our images here and not in the searchbar or another child child component
  // this is where we want to trigger our rerender
  const [images, setImages] = useState([])

  const handleSubmit = async (term) =>{
    console.log('do a search with: ', term)
    //this is where the search with axios will happen
    const result = await searchImages(term)
    setImages(result)
  }
  return (
    <div>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images}/>
    </div>
  );
}

export default App;
