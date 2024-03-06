import { useState } from 'react'
import './App.css'
import Flashcard from './components/flashcard'
import R2D2 from './images/r2d2.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Jedi Mind Test: Mastering Star Wars Knowledge with Flashcards</h1>
      <h2>How true of a Star Wars fan are you?</h2>
      <div>
        <Flashcard question="Testing" answer="Test Answer" img={R2D2} />
      </div>
    </>
  )
}

export default App
