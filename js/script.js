
//First check if our variable exists

var setupVariable = function() {
  if (!localStorage.AvertedCounter) {
    console.log ("you dun fudged up")
    localStorage.AvertedCounter = 0; //If it doesn't exist, then create it
  };
  document.getElementById("up").value = localStorage.AvertedCounter;
}

var up = function() {
  setupVariable();
  localStorage.AvertedCounter++; //Add 1 to our counter
  document.getElementById("up").value = localStorage.AvertedCounter; //Update the input to our new number
}

document.addEventListener('DOMContentLoaded', function() {
    var idup = document.getElementById('up');
    // onClick's logic below:
    idup.addEventListener('click', function() {
        up();
        console.log ("You get up cake!"); //A rewarding debug message
    });

    setupVariable();
});