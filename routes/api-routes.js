const router = require("express").Router();
const Workouts = require("../models/workouts");

router.get("/api/workouts", (req, res) => {
    Workouts.find({})
    .then((dbExercise) => {
        res.json(dbExercise);
    })
    .catch((err) => {
        res.status(404).json(err);
    })
})

router.post("/api/workouts", ({body}, res) => {
    console.log(body);
    Workouts.create(body)
    .then((dbExercise) => {
        res.json(dbExercise);
        //console.log(dbExercise);
    })
    .catch((err) => {
        res.status(400).json(err);
    })
})

router.put("/api/workouts/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const duration = body.duration
    console.log(body);
    Workouts.findOneAndUpdate({_id: id},
        {
            // Push appends the request body to exercises array.
            $push: {
                exercises: body
            },
            // Inc is a field operator that increments the field chosen. In this case the duration from the body will be updated.
            $inc: {
                totalDuration: duration
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

    
    router.get("/api/workouts/range", (req, res) => {
    Workouts.find({})
    .then((dbExercise) => {
        console.log(dbExercise);
        res.json(dbExercise);
    })
    .catch((err) => {
        res.status(404).json(err);
    })
});

module.exports = router;