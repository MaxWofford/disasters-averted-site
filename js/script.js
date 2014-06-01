//First check if our variable exists
if (localStorage.AvertedCounter === 'undefined') {
  console.log ("you dun fudged up")
  localStorage.AvertedCounter = 0; //If it doesn't exist, then create it
};



var up = function() {
  localStorage.AvertedCounter++; //Add 1 to our counter
  document.getElementById("counter").value = localStorage.AvertedCounter; //Update the input to our new number
}

var down = function() {
  localStorage.AvertedCounter--;
  document.getElementById("counter").value = localStorage.AvertedCounter;
}

document.addEventListener('DOMContentLoaded', function() {
    var idup = document.getElementById('up');
    // onClick's logic below:
    idup.addEventListener('click', function() {
        up();
        console.log ("You get up cake!"); //A rewarding debug message
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var iddown = document.getElementById('down');
    // onClick's logic below:
    iddown.addEventListener('click', function() {
        down();
        console.log ("You get down cake!"); //Another rewarding debug message
    });
});