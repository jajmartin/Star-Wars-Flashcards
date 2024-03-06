import { useState } from 'react'


const Flashcard = (props) => {
    const [flipped, setFlipped] = useState(false);

    const flipCard = () => {
        setFlipped(!flipped);
    }

    const displayAnswer = () => {
        return (
            <>
                <h3>{props.answer}</h3>
                <img className="card-image" src={props.img} />
            </>
        )
    }

    const displayQuestion = () => {
        return (
            <h2>{props.question}</h2>
        )
    }

    return (
        <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={flipCard}>
          <div className="card-content front">
            <h3>{props.question}</h3>
          </div>
          <div className="card-content back">
            <h3>{props.answer}</h3>
            <img className="card-image" src={props.img} alt="Answer Image" />
          </div>
        </div>
      );
}

export default Flashcard