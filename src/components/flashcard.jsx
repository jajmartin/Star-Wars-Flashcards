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
        <div className="flashcard" onClick={flipCard}>
            {flipped
                ? displayAnswer()
                : displayQuestion()
            }
        </div>
    )
}

export default Flashcard