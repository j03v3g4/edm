var config = {
    apiKey: "AIzaSyDTizygWTD0GAM5UJwD9-jzkA1mtlegFmk",
    authDomain: "employee-data-management-594a8.firebaseapp.com",
    databaseURL: "https://employee-data-management-594a8.firebaseio.com",
    storageBucket: "employee-data-management-594a8.appspot.com",
    messagingSenderId: "208476116054"
  };

  firebase.initializeApp(config);

//    Create a variable to reference the database.
   var database = firebase.database();

   // Initial Values
   var name = "";
   var role = "";
   var startDate = 0;
   var monthlyRate = "";