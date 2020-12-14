const Workout = require("../models/workout");

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    // Post route for new workout 
    app.post("/api/workouts", (req, res) => {
        Workout.create({ type: "workout" })
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // Put route to add exercise 

    app.put("/api/workouts/:id", ({ body, params }, res) => {
        Workout.findByIdAndUpdate(
            params.id,
            { $push: { exercises: body } },
            { new: true, runValidators: true })
            .then(workout => {
                res.json(workout)
            })
            .catch(err => {
                res.json(err)
            });
    });

    // Get route for workouts 

    app.get("/api/workouts/range", (req, res) => {
        Workout.find({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    });
};