import { useState } from 'react'
import './App.css'
import Flashcard from './components/flashcard'
import R2D2 from './images/r2d2.png'
import Anakin from './images/anakin.png'
import BadAni from './images/bad-anikin.png'
import Carbonite from './images/carbonite.jpeg'
import Chewey from './images/chewbacca.png'
import Crystal from './images/crystal.png'
import Ewok from './images/ewok.jpeg'
import Family from './images/luke_family.png'
import Falcon from './images/millenium-falcon.png'
import Qui from './images/qui-gon.png'
import C3PO from './images/c3po.png'

function App() {
  const [index, setIndex] = useState(0);

  const flashcards = [
    {
      question: "What is the name of the droid that Anakin Skywalker created?",
      answer: "C3P0",
      img: C3PO
    },
    {
      question: "What planet are the Ewoks from?",
      answer: "Endor",
      img: Ewok
    },
    {
      question: "What was the midi-chlorian count of Anakin Skywalker?",
      answer: "27,000",
      img: Anakin
    },
    {
      question: "Who was Obi-Wan Kenobi's Master?",
      answer: "Qui-Gon Jinn",
      img: Qui
    },
    {
      question: "What is the name of the infamous starship piloted by Han Solo?",
      answer: "Millenium Falcon",
      img: Falcon
    },
    {
      question: "What was the material Darth Vader had Han Solo encapsulted in?",
      answer: "Carbonite",
      img: Carbonite
    },
    {
      question: "Who are the immediate family of Luke Skywalker?",
      answer: "Anakin Skywalker, Padme, Princess Leia",
      img: Family
    },
    {
      question: "What was Anakin's motive to succumb to the Dark Side?",
      answer: "To save Padme from death during child birth",
      img: BadAni
    },
    {
      question: "What is the name of the droid that accompanies C3P0?",
      answer: "R2D2",
      img: R2D2
    },
    {
      question: "Who is Han Solo's copilot?",
      answer: "Chewbacca",
      img: Chewey
    },
    {
      question: "What gives lightsabers their color?",
      answer: "Kyber crystals",
      img: Crystal
    }
  ]

  const getFlashcard = () => {
    let currentIndex = index;
    while (currentIndex == index) {
      currentIndex = Math.floor(Math.random() * 11);
    }
    setIndex(currentIndex);
  };



  return (
    <>
      <div className='header'>
        <h1>Jedi Mind Test</h1>
        <h2>How true of a Star Wars fan are you?</h2>
        <p>Number of cards: 11</p>
      </div>
      <div className="card-container"> 
        {
          <Flashcard question={flashcards[index].question} answer={flashcards[index].answer} img={flashcards[index].img} />
        }
      </div>
      <div className="buttons-container">
        <button>←</button>
        <button onClick={getFlashcard}>→</button>
      </div>
    </>
  )
}

export default App
