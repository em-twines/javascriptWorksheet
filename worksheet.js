

//Variables
    //Task 1

let dayOfWeek = 'Monday';
console.log(dayOfWeek);

dayOfWeek = 'Friday';
console.log(`I can't wait for ${dayOfWeek}!`);


    // Task 2

let animalInput = prompt('What is your favorite animal?');
let colorInput = prompt('What is your favorite color?');
alert(`I've never seen a ${colorInput} ${animalInput}!`);


// Conditionals
    // Task 1

// breakfast: blueberry pancakes
// lunch: sandwich
// red curry


let meal; 
let timeOfDay = 1200;
if (timeOfDay < 1200)
    meal =  'blueberry pancakes'; 
else if (timeOfDay < 1200 && timeOfDay < 1700)
    meal = 'sandwich';
else if(timeOfDay > 1700)
    meal = 'red curry';

console.log(meal);


//Task 2

let randNum;
randNum = Math.floor(Math.random()* 11);
if (randNum >= 0 && randNum <= 2){
    console.log('Beatles');
}
else if (randNum >= 3 && randNum <= 5){
    console.log('Stones');
}
else if (randNum >= 5 && randNum <= 8){
    console.log('Floyd');

}
else if (randNum >= 9 && randNum <= 10){
    console.log('Hendrix');
}



//For Loops

    //Task 1

for (let i=0; i < 7; i++){
    console.log('JavaScript is cool!')
}

    //Task 2

for (let num = 0; num <= 10; num++){
    console.log(num);
}

    //Task 3

for (let word = 0; word < 5; word++){
    console.log('hello\ngoodbye')
}


//Functions

    //Task 1

function printMovieName(){
    let favMovie = 'Apocalypse Now'
    console.log(favMovie);
}
printMovieName();


    //Task 2

function favBand(){
    let favoriteBand = prompt('What is your favorite band?');
    return favoriteBand;
}

let newFavBand = favBand();

console.log(newFavBand);


    //Task 3

function concertDisplay(musicalAct){
    myStreet = prompt('What street do you live on?');
    console.log(`It would be great if ${musicalAct} played on ${myStreet}!`);
}

concertDisplay(newFavBand);


//Arrays

    //Task 1

let desktopItems = ['coffee', 'phone', 'mouse'];
console.log(desktopItems[1]);
desktopItems.push('Infinity Gauntlet');

for (item = 0; item < (desktopItems.length); item ++){
    console.log(desktopItems[item])}


//Boss Fight
    //Task 1

let magicNumber = Math.floor(Math.random()*101);
let guess = 0; 

while (guess != magicNumber){
    guess = prompt('Guess a number!')
    if (guess < magicNumber){
        console.log('Too low!');
        if (magicNumber - guess <= 10 || magicNumber + guess <= (magicNumber+10)){
        console.log("Getting Warmer!");
        }
    }
    else if (guess > magicNumber){
        console.log('Too high!');
        if (magicNumber - guess <= 10 || magicNumber + guess <= (magicNumber+10)){
            console.log("Getting Warmer!");
        }
    }
    
}
console.log("You got it!")


