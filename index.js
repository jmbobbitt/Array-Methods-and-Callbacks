import { fifaData } from './fifa.js'
console.log(fifaData);

console.log('its working');

// fifaData.forEach(e=> 
//     {
//         if (e['Win conditions'] !==' ')
//         console.log(e['Win conditions'])
//     }); 
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

// (a) Home Team name for 2014 world cup final
let finals = fifaData.filter(function (e) {
    return e.Year == 2014 && e.Stage == "Final";
});
console.log(finals[0]['Home Team Name']);

// (b) Away Team name for 2014 world cup final
finals = fifaData.filter(function (e) {
    return e.Year == 2014 && e.Stage == "Final";
});
console.log(finals[0]['Away Team Name']);

// (c) Home Team goals for 2014 world cup final
finals = fifaData.filter(function (e) {
    return e.Year == 2014 && e.Stage == "Final";
});
console.log(finals[0]['Home Team Goals']);

// (d) Away Team goals for 2014 world cup final
finals = fifaData.filter(function (e) {
    return e.Year == 2014 && e.Stage == "Final";
});
console.log(finals[0]['Away Team Goals']);

// (e) Winner of 2014 world cup final
finals = fifaData.filter(function (e) {
    return e.Year == 2014 && e.Stage == "Final";
});
console.log(finals[0]['Win conditions']);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(fifaData) {
    finals = fifaData.filter(function (e) {
       return e.Stage == "Final";
   });
   return finals;
 }	
console.log(getFinals(fifaData));




/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(finals) {
        let years = finals.map(function (e) {
        return e.Year;
    });
    return years;
}	

console.log(getYears(getFinals(fifaData)));


/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(finals) {
    let winners = finals.map(function(e) {

      let homeGoals = e['Home Team Goals'];
      let awayGoals = e['Away Team Goals'];

      let winningTeam = e['Home Team Name'];
      if(awayGoals > homeGoals) {
        winningTeam = e['Away Team Name'];
      }
      return winningTeam;
    });

    return winners;
}	


console.log(getWinners(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" */

function getWinnersByYear(years, winners) {
    let winnersByYear = [];
    for(let i=0; i<years.length;i++){
        let winner = `In ${years[i]}, ${winners[i]} won the world cup!`;
        winnersByYear.push(winner);
    }
    return winnersByYear;
}

console.log(getWinnersByYear(getYears(fifaData,getFinals), getWinners(fifaData, getFinals)));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(finals) {
    let goalsPerMatch = finals.map(function(e){
 	let homeGoals = e['Home Team Goals'];
    let awayGoals = e['Away Team Goals'];
      return homeGoals + awayGoals;
    });
 
 
    let totalGoals = goalsPerMatch.reduce((total, goals) => total + goals);
    return (totalGoals / goalsPerMatch.length).toFixed(2);
 }
 console.log(getAverageGoals(getFinals(fifaData)));
