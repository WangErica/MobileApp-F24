import {useState} from 'react'
import cx from 'classnames'
import styles from './UI.module.css'
import CardPattern from './assets/moroccan-flower-dark.png'
import Bilbo from './assets/bilbo-baggins.png'
import Cameron from './assets/cameron-poe.png'
import Nikki from './assets/nikki-cage.png'
import Pollux from './assets/pollux-troy.png'

const cardImages = [{src: Bilbo, matched: false}, 
  {src: Cameron, matched: false}, 
  {src: Nikki, matched: false}, 
  {src: Pollux, matched: false}]

export default function Grid(props) {
  // state to store our deck of cards
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  // a function to double our cards
  // and then shuffle the deck ... and deal them on the screen
  const shuffleCards = () => {
    // spread our img array 2x so we have an array with duplicates to shuffle
    const shuffledCards = [...cardImages, ...cardImages]

    // add a sort function which fires a function for each item in our new array
    // when a random number is negative, leave the item where it is
    // if its positive, swap with another random item to shuffle
    .sort(() => Math.random() -0.5)
    // add a mapping function to add an ID to each img object
    // first we spread the current properties and then add the new one at the end
    .map((card) => (
      {...card, id: Math.random()}
    )) 

    setCards(shuffledCards)
    setTurns(0)
  }
  handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEfffect(() => {},[])
  return (
    <>
      <button onClick={shuffleCards}>New Game</button>
      <div className={styles.container}>
        <div className={styles.grid}>
          {cards.map((card) => (
            <Card key={card.id} img={card.src} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.matched}/>))
          }
        </div>
      </div>
      <div>Turns: {turns}</div>
    </>
  )
}

function Card(props) {
  const {img, handleChoice, flipped} = props
  // Keep track of flipped/active in state
  const [isActive, setIsActive] = useState(false)

  const handleClick = (event) => {
    setIsActive((current) => !current)
  }
  return (
    <div className={styles.flip_card}>
      <div className={cx(styles.flip_card_inner, {[styles.active]:isActive})}>
        <div className={styles.flip_card_front}>
          <img src={CardPattern} alt="card back" />
        </div>
        <div className={styles.flip_card_back}>
          <img src={img} alt="card front" />
        </div>
      </div>
    </div>
  )
}
