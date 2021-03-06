const router = require("express").Router();
const Workouts = require("../models/workouts");

router.post("/api/workouts", ({body}, res) => {
    Workouts.create(body)
    .then((dbExercise) => {
        res.json(dbExercise);
        console.log(dbExercise);
    })
    .catch((err) => {
        res.status(400).json(err);
    })
})

module.exports = router;