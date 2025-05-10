import express from "express";
import feedbackModel from "../models/feedbackModel.js";

const router = express.Router();

// Submit feedback
router.post("/feedback", async (req, res) => {
    const { menteeId, mentorId, rating, comments } = req.body;

    try {
        if (!menteeId || !mentorId || !rating || !comments) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create and save feedback
        const feedback = new feedbackModel({ menteeId, mentorId, rating, comments });
        await feedback.save();

        res.status(201).json({ message: "Feedback submitted successfully", feedback });
    } catch (error) {
        console.error("Error submitting feedback:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// Retrieve feedback for a mentor
router.get("/feedback/:mentorId", async (req, res) => {
    const { mentorId } = req.params;

    try {
        const feedbacks = await feedbackModel.find({ mentorId }).populate("menteeId", "name email");

        if (feedbacks.length === 0) {
            return res.status(404).json({ message: "No feedback found for this mentor" });
        }

        res.status(200).json({ feedbacks });
    } catch (error) {
        console.error("Error retrieving feedback:", error);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;
