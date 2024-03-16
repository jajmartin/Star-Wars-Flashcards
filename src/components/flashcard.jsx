import { useState } from 'react'


const Flashcard = ({ question, answer, img, isFlipped, setIsFlipped }) => {
    // Remove local state for 'flipped'
    const flipCard = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
          <div className="card-content front">
            <h3>{question}</h3>
          </div>
          <div className="card-content back">
            <h3>{answer}</h3>
            <img className="card-image" src={img} alt="Answer Image" />
          </div>
        </div>
      );
};

export default Flashcard