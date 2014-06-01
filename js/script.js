if (localStorage.AvertedCounter === 'undefined') {
  console.log ("you dun fudged up")
  localStorage.AvertedCounter = 0;
};



var up = function() {
  localStorage.AvertedCounter++;
  document.getElementById("counter").value = localStorage.AvertedCounter;
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
        console.log ("You get up cake!");
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var iddown = document.getElementById('down');
    // onClick's logic below:
    iddown.addEventListener('click', function() {
        down();
        console.log ("You get down cake!");
    });
});

function saveChanges() {
        // Get a value saved in a form.
        var theValue = textarea.value;
        // Check that there's some code there.
        if (!theValue) {
          message('Error: No value specified');
          return;
        }
        // Save it using the Chrome extension storage API.
        chrome.storage.sync.set({'value': theValue}, function() {
          // Notify that we saved.
          message('Settings saved');
        });
      }