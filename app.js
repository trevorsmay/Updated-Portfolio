  // Your web app's Firebase configuration
  $(document).ready(function(){
      
  var userName = null;
  var userEmail = null;
  var userMsg = null;

  var firebaseConfig = {
    apiKey: "AIzaSyBzRU4Q9yfV8SPiHCIBhJR3EB2_P-b07iU",
    authDomain: "portfolio-db-firebase.firebaseapp.com",
    databaseURL: "https://portfolio-db-firebase.firebaseio.com",
    projectId: "portfolio-db-firebase",
    storageBucket: "portfolio-db-firebase.appspot.com",
    messagingSenderId: "341338926653",
    appId: "1:341338926653:web:88e963d42d39b7b1"
  };
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();




  $('body').scrollspy({ target: '#navbar-example2' })

  $("button").click(function(){
    $(".linkedin").attr("href", "https://www.w3schools.com/jquery/");
  })
});