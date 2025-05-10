import React, { useState } from 'react';
import axios from 'axios';

const SubmitFeedback = ({ mentorId, menteeId }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const feedback = {
            mentorId,
            menteeId,
            rating,
            comment,
        };

        try {
            await axios.post('/api/feedback', feedback);
            setMessage('Feedback submitted successfully!');
            setRating(0);
            setComment('');
        } catch (error) {
            setMessage('Error submitting feedback.');
            console.error(error);
        }
    };

    return (
        <div>
            <h3>Submit Feedback</h3>
            <form onSubmit={handleSubmit}>
                <label>Rating (1-5):</label>
                <input
                    type="number"
                    value={rating}
                    min="1"
                    max="5"
                    onChange={(e) => setRating(e.target.value)}
                    required
                />
                <br />
                <label>Comment:</label>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                ></textarea>
                <br />
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default SubmitFeedback;
