import React from 'react'
import RecipeCard from './RecipeCard'
import './global.css'
import Header from './components/header.js';
import Wrapper from './components/wrapper.js';

function App() {
  return (
    <div>
      <Header/>
      <Wrapper><center>
      <RecipeCard />
      </center></Wrapper>
  </div>
)}

export default App
