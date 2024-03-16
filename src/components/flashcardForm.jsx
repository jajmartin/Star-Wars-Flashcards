import { useState } from 'react'

const FlashcardForm = ({ onSubmit, isFlipped, guess, setGuess, inputColor, setInputColor }) => {

    const handleChange = (event) => {
        setGuess(event.target.value);
        setInputColor('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isFlipped) {
            const userGuess = guess.trim().toLowerCase();
            const guessResult = onSubmit(userGuess); // Call onSubmit function to get guess result
            setInputColor(guessResult === 'correct' ? 'green' : 'red'); // Check guess result
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Type your guess here"
                    value={guess}
                    onChange={handleChange}
                    style={{ borderColor: inputColor }}
                    disabled={isFlipped}
                />
                <button className="submit-button" type="submit" disabled={isFlipped}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FlashcardForm;