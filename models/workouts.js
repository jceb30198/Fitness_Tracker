const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    exercise: [{
        type: {
            type: String,
            trim: true,
        },
        name: {
            type: String,
            trim: true,
            required: "Please enter a name."
        },
        weight: {
            type: Number,
            required: "Please enter the weight in LBS."
        },
        sets: {
            type: Number,
            required: "Please enter the amount of sets."
        },
        reps: {
            type: Number,
            required: "Please enter the amount of reps."
        },
        duration: {
            type: Number,
            required: "Please enter the amount in minutes."
        }
    }]
});