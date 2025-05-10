import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewFeedback = ({ mentorId }) => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await axios.get(`/api/feedback/${mentorId}`);
                setFeedbacks(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching feedback:', error);
                setLoading(false);
            }
        };

        fetchFeedbacks();
    }, [mentorId]);

    if (loading) {
        return <p>Loading feedback...</p>;
    }

    return (
        <div>
            <h3>Feedback for Mentor</h3>
            {feedbacks.length === 0 ? (
                <p>No feedback available for this mentor.</p>
            ) : (
                feedbacks.map((feedback) => (
                    <div key={feedback._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                        <p><strong>Rating:</strong> {feedback.rating}</p>
                        <p><strong>Comment:</strong> {feedback.comment}</p>
                        <p><em>{new Date(feedback.createdAt).toLocaleDateString()}</em></p>
                    </div>
                ))
            )}
        </div>
    );
};

export default ViewFeedback;
