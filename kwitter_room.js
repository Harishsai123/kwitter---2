var firebaseConfig = {
    apiKey: "AIzaSyCl3f3iPDsFMLlFJSekco8uHm9-8mHptlM",
    authDomain: "kwitter---2-5368f.firebaseapp.com",
    databaseURL: "https://kwitter---2-5368f-default-rtdb.firebaseio.com",
    projectId: "kwitter---2-5368f",
    storageBucket: "kwitter---2-5368f.appspot.com",
    messagingSenderId: "986834429952",
    appId: "1:986834429952:web:beeec7690c29b50eb450e5",
    measurementId: "G-ZXV86BGBKK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
    
      });});}
getData();
