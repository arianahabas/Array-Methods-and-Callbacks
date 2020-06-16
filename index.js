import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const games= fifaData.filter(function(game){
    return game.Stage === "Final" && game.Year === 2014
    });
console.log(games);
const homeTeam= games[0]["Home Team Name"]
const awayTeam= games[0]["Away Team Name"]
const homeGoals= games[0]["Home Team Goals"]
const awayGoals= games[0]["Away Team Goals"]

console.log(homeTeam);
console.log(awayTeam);
console.log(homeGoals);
console.log(awayGoals);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
// send objects with stage=final to a new array//

function getFinals (data){
    let finalsOnly = data.filter(function(item){
        return item.Stage === 'Final';
 });
 return finalsOnly;
}
console.log(getFinals(fifaData));


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb, data) {

    const finalYear = cb(data).map(function(item){
        return item.Year
    })
return finalYear;
};

console.log(getYears(getFinals,fifaData));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb, data) {
    const winners = [];
    cb(data).forEach(function(item){
        if(item['Home Team Goals'] > item['Away Team Goals']){winners.push(item['Home Team Name'])}
    else if (item['Home Team Goals'] < item['Away Team Goals']){winners.push(item['Away Team Name'])}
    else {winners.push(item['Win conditions'].split(' ')[0]) }

    });
    return winners;    
};
console.log(getWinners(getFinals,fifaData));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winners, years, data) {
    const country = getWinners(getFinals, data);
    const year = getYears(getFinals, data);
    const allWinners = []
    getFinals(data).forEach((item,i) =>{
        allWinners.push(`In ${year[i]}, ${country[i]} won the world cup!`)
    });
    return allWinners;
};

console.log(getWinnersByYear(getWinners,getYears, fifaData));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

// function getAverageGoals(data) {

//    const totalGoals = data.reduce((total, match)=>{
//        return(
//            total + match ['Home Team Goals'] + match ['Away Team Goals']
//        );
//    }, 0);
//    return totalGoals / data.length
// };

// console.log(getAverageGoals(fifaData));

function getAverageGoals(data){

    const homeTotal = data.reduce(function(adder, element){
        return (adder + element['Home Team Goals']);
    },0 )
    const awayTotal = data.reduce(function(adder, element){
        return (adder + element['Away Team Goals']);
    },0 )
    const averageHome = homeTotal / data.length
    const averageAway = awayTotal / data.length
    return `Home goals average is ${averageHome} & away goals average is ${averageAway}`
}
console.log(getAverageGoals(fifaData));


/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
