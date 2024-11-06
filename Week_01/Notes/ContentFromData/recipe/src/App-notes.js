function App() {
  const message = "Hello World!"

  const myObj = {
    name: "Erica",
    age: 20
  }

  return (
    // adjacent elements must alwasy be wrapped in ONE parent tag
    <>
      <h1>{message}</h1>
      <p>Hi my name is {myObj.name} and I am {myObj.age}</p>
    </>
  );
}

export default App;


//import{Card, ListItem} from './App.js'
//export const Card = {}