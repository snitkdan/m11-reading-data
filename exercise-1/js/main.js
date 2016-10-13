// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {
    // Use $.get to read in your `data/students.csv` dataset: remember, you must be running a local server
    $.get("data/students.csv", function(data, error) {
      //Log the data
      console.log("Unparsed Data: ")
      console.log(data);
    });

    // Parse the data using Papa.parse
    // Use jQuery to create a table, and store that in a variable
    // Append a table header for each key in your first observation
    // Iterate through your array and create a new table row for each element in your array
    // Add a cell (<td>) for each key/value pair in your object
    $.get("data/students.csv", function(data, error) {
      //Log the data
      var parsedData = Papa.parse(data, {
        header: true
      }).data;

      console.log("Parsed Data: ");
      console.log(parsedData);
    });

    var table = $('<tr>');












        // Select your `sandbox` section, and append your table to it
});
