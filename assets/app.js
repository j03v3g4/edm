var config = {
    apiKey: "AIzaSyDTizygWTD0GAM5UJwD9-jzkA1mtlegFmk",
    authDomain: "employee-data-management-594a8.firebaseapp.com",
    databaseURL: "https://employee-data-management-594a8.firebaseio.com/",
    storageBucket: "employee-data-management-594a8.appspot.com",
    // messagingSenderId: "208476116054"
  };

  firebase.initializeApp(config);

//    Create a variable to reference the database.
   var database = firebase.database();

   // Initial Values
   var name = "";
   var role = "";
   var startDate = 0;
   var monthlyRate = "";

  // Capture Button Click
  $("#submit").on("click", function(event) {
    event.preventDefault();

    // Grabbed values from text boxes
    name = $("#name").val().trim();
    role = $("#role").val().trim();
    startDate = $("#date").val().trim();
    monthlyRate = $("#rate").val().trim();

    // Code for handling the push
    database.ref().push({
      name: name,
      role: role,
      startDate: startDate,
      monthlyRate: monthlyRate,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

  });

  // Firebase watcher + initial loader + order/limit HINT: .on("child_added"
  database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    // Console.loging the last user's data
    console.log(sv.name);
    console.log(sv.role);
    console.log(sv.startDate);
    console.log(sv.monthlyRate);

    // Change the HTML to reflect
    $("#name-display").text(sv.name);
    $("#role-display").text(sv.role);
    $("#startDate-display").text(sv.startDate);
    $("#monthlyRate-display").text(sv.monthlyRate);

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });