/** Lasagna Exercice
 * The number of minutes it takes to prepare a single layer.
 */
const PREPARATION_MINUTES_PER_LAYER = 2;

// 1. Define the expected oven time in minutes
export const EXPECTED_MINUTES_IN_OVEN = 40;

// 2. Function to determine the remaining minutes in oven
export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

// 3. Function to calculate preparation time based on layers
export function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
}

// 4. Function to calculate total time spent cooking
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}



