(function(){
  // Initialize Firebase
  var config = {
   apiKey: "AIzaSyDo6brc4g2hwLgwaAEvaplbXsFP_3yh-3k",
    authDomain: "selfcheckout-26152.firebaseapp.com",
    databaseURL: "https://selfcheckout-26152.firebaseio.com/",
    storageBucket: "selfcheckout-26152.appspot.com",
    messagingSenderId: "139132425529"
  };
  firebase.initializeApp(config);

var bigOne = document.getElementById('bigOne');
const btnLogout = document.getElementById('btnLogout');



btnLogout.onclick = function(){SubmitClick1()};

function SubmitClick1() {
window.location="index.html";
firebase.auth().signOut();
}

firebase.auth().onAuthStateChanged(firebaseUser => {
  userid = firebaseUser.uid;
  var dbRef=firebase.database().ref().child('Users').child(userid).child("username");
    dbRef.on('value',snap=>bigOne.innerText=("Welcome, "+snap.val()));
});



var dbRef=firebase.database().ref().child('Products');

dbRef.on('child_added',snap1=>{
var id = snap1.child("id").val();
var name = snap1.child("name").val();
var price = snap1.child("price").val();
$("#table_body").append("<tr><td>" + id + "</td><td>" + name + "</td><td>" + price + '</td><td><button class=btn btn-default>Modify</button></td><td><button class=btn btn-default onclick="alert('+id+');">Delete</button></td></tr>');
});

dbRef.on('child_changed',snap1=>{
$("#table_body").append("<tr><td>" + id + "</td><td>" + name + "</td><td>" + price + "</td><td><button class=btn btn-default>Modify</button></td><td><button class=btn btn-default>Delete</button></td></tr>");
});

dbRef.on('child_removed',snap1=>{
$("#table_body").remove();
});

function subt(id) {
  
  window.alert(id);
  //var dbRef=firebase.database().ref().child('Products').child(id).set(null);
}

}());