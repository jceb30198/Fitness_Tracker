const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    exercises: [{
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
    day: {
        type: Date,
        default: Date.now()
    },
    totalDuration: {
        type: Number
    }
});

const Workout = mongoose.model("Workout", exerciseSchema);

module.exports = Workout;