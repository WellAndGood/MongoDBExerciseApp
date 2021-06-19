const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercise: [{
    name: {
      type: String,
      trim: true,
      required: "Please provide the name of the exercise!"
    },

    type: {
      type: String,
      trim: true,
      required: "Please provide the type of exercise!"
    },

    duration: {
      type: Number
    },

    weight: {
      type: Number
    },

    reps: {
      type: Number
    },
    sets: {
      type: Number
    },

    distance: {
      type: Number
    }
  }],
});

const Fitness = mongoose.model("Fitness", fitnessSchema);

module.exports = Fitness