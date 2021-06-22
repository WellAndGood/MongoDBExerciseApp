const router = require("express").Router();
const path = require("path");
const { Workout } = require("../models")

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: "$exercises.duration"

            }
        }
    }]).then(data => {
        console.log(data)
        res.json(data)
    })
});

router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
        .then(data => {
            console.log(data)
            res.json(data)
        })
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.updateOne({
        _id: req.params.id
    }, { $push: { exercises: req.body } })
        .then(data => {
            console.log(data)
            res.json(data)
        })
});

router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: "$exercises.duration",
            }
        }

    // Workout.aggregate().sort({day: -1},[{
    //     $addFields: {
    //         totalDuration: {
    //             $sum: "$exercises.duration"
    //         }
    //     } 

    }]).then(data => {
        console.log(data)
        res.json(data)
    })
});

module.exports = router