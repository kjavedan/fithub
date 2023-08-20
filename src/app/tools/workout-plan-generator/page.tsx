import React from "react";

export default function WorkoutPlanGenerator() {
  /*
    ? 1. PROBLEM: How to write program(data structure + algorithm) to generate a workout plan base on the user input?
    * ANSWER:
    ! Data structure
    * 1. a form that get's the user data and keep them in an object data structure(age, height, weight, experience, bodyFat, bodyType, goal, diet, enjury)
    * 2. an objece data structure that has all workouts name with their categories(compoundMovement, isolationMovement, muscleGroup)
    * 3. an object data contain tranning systems with their info(weightOverload, superset, ...)
    * 4. an object data structure that keeps bodytype related information(bodyType, tranningDays, weightLefting, cardio, sets, reps, numberOfcompoundMovement, numberOfisolationMovement)
    * 5. an object state to set the calculate result from the algorithm
    
    ! Alogrithm
    * 1. a function to receive the data from the form and set it to userInput State
    * 2. a function that evaluate and compare the userInput data with the bodyType data and generate a workout plan from the workout data
    * 3. a function to set the result
    * 4. a function to print the result into a pdf or image type for download or screenshot
    */
  return <div>WorkoutPlanGenerator</div>;
}
