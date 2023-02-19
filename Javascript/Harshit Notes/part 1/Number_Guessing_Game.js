let i=1;
let target=Math.floor((Math.random() * 10) + 1);
let guessed_number=+prompt("Guess a number")
let chances=5;

while(i<=chances){
    let target=Math.floor((Math.random() * 10) + 1);
    console.log(`target ${target}`)
    if (guessed_number===target){
        console.log("You win");
        break;
    }
    else if(guessed_number>target){
        console.log("Greater");
        if(i==chances){
            break
        }
        guessed_number=+prompt("Guess a number, as your answer was higher then expected");
    }
    else {
        console.log('Lower');
        if(i==chances){
            break
        }
        guessed_number=+prompt("Guess a number, as your answer was lower then expected");
    }
    i++
}    