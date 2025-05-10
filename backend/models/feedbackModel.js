import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    menteeId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true }, // Foreign key to mentee
    mentorId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true }, // Foreign key to mentor
    rating: { type: Number, required: true, min: 1, max: 5 }, // Rating between 1 and 5
    comments: { type: String, required: true }, // Feedback text
    timestamp: { type: Date, default: Date.now }, // Auto-generated timestamp
});

// Export the model
const feedbackModel = mongoose.models.feedback || mongoose.model("feedback", feedbackSchema);
export default feedbackModel;
