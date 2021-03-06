const router = require("express").Router();
const Workouts = require("../models/workouts");

router.post("/api/workouts", ({body}, res) => {
    console.log(body);
    Workouts.create(body)
    .then((dbExercise) => {
        res.json(dbExercise);
        console.log(dbExercise);
    })
    .catch((err) => {
        res.status(400).json(err);
    })
})

router.get("/api/workouts", (req, res) => {
    Workouts.find({})
    .sort({date: -1})
    .then((dbExercise) => {
        res.json(dbExercise);
        console.log(dbExercise);
        console.log(dbExercise[0].exercise);
    })
    .catch((err) => {
        res.status(404).json(err);
    })
})

router.get("/api/workouts/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(id);
    console.log(body);
    Workouts.findOneAndUpdate({
        _id: id
    },
    {
        $push: {
            exercise: req.body.exercise
        }
    },
    {
        new: true
    }).then((dbExercise) => {
        res.json(dbExercise);
        console.log(dbExercise);
    }).catch((err) => {
        res.status(404).json(err);
    })
});

module.exports = router;