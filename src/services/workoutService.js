const workoutData = require("../database/workout");
const { v4: uuid } = require("uuid");

const getAllWorkouts = () => {
    return workoutData.getAllWorkouts();
};

const getOneWorkout = (workoutId) => {
    const workout = workoutData.getOneWorkout(workoutId);
    return workout;
};

const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleDateString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleDateString("en-US", { timeZone: "UTC" })
    }
    try {
        const createdWorkout = workoutData.createNewWorkout(workoutToInsert);
        return createdWorkout;
    }
    catch (error) { throw error; }
};

const updateOneWorkout = (workoutId, changes) => {
    const updatedWorkout = workoutData.updateOneWorkout(workoutId, changes);
    return updatedWorkout;
};

const deleteOneWorkout = (workoutId) => {
    workoutData.deleteOneWorkout(workoutId);
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};