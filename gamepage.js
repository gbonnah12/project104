// random value generated
var y = Math.floor(Math.random() * 10+1);

  
// counting the number of guesses
// made for correct Guess

  
// function for number guessed by user     
var x= document.getElementById("guessField").value;
if(x==y)
{
    alert("CONGRATULATIONS!!!" +playername+" YOU GUESSED IT RIGHT IN"+guess+"GUESS");
    guess= 1;
}

else if (x>y)

{
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else
{
guess++;
alert("OPPS SORRY!! TRY A GREATER NUMBER")
}

function playagain() {
    y = Math.floor(Math.random() * 10+l);
}