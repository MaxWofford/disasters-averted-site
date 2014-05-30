var up = function() {
  document.getElementById("counter").value++;
}

function down() {
  document.getElementById("counter").value--;
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
        up();
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