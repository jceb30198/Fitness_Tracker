const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    exercise: [{
        type: {
            type: String,
            trim: true
        },
        name: {
            type: String,
            trim: true
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        duration: {
            type: Number
        },
        distance: {
            type: Number
        }
    }],
    date: {
        type: Date,
        default: Date.now()
    }
});

const Workouts = mongoose.model("Workouts", exerciseSchema);

module.exports = Workouts;