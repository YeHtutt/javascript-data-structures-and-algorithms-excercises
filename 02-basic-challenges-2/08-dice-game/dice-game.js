/*
    The game rules are if a 7 or 11 are rolled, 
    the player wins and they get a result of win. 
    
    If a 2, 3 or 12 are rolled they lose and get a result of lose.

    Anything else and they get a result of roll again
*/

// Function to simulate rolling a 6-sided dice and returning a random number between 1 and 6
function rollDice() {
   return Math.floor((Math.random() * 6) + 1);
}

function diceGameSimulation(numSimulations) {
    const simulationResults = [];  // Initialize an array to store simulation results
    
    // Loop through the specified number of simulations
    for(let i = 0; i < numSimulations; i++) {
        const dice1 = rollDice(); // Simulate the roll of the first dice
        const dice2 = rollDice(); // Simulate the roll of the second dice
        const sum = dice1 + dice2; // Calculate the sum of the dice values

        let result = ''; // Initialize a variable to store the result of the current simulation

        // Check if the sum of the dice values is 7 or 11
        if(sum === 7 || sum === 11) {
            result = 'win'; // Set the result to 'win' if the sum is 7 or 11
        } else if(sum === 2 || sum === 3 || sum === 12) {
            result = 'loose'; // Set the result to 'lose' if the sum is 2, 3, or 12
        } else {
            result = "roll again"; // Set the result to 'roll again' for any other sum
        }

        // Add the simulation result to the array
        simulationResults.push({ dice1, dice2, sum, result });
    }
    
    // Return the array of simulation results
    return simulationResults; 
}

module.exports = diceGameSimulation; // Export the diceGameSimulation function