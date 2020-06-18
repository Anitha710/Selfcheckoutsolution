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


const ulist2 = document.getElementById('list2'); 
var bigOne = document.getElementById('bigOne');
const Submit1 = document.getElementById('Submit');
//const Submit2 = document.getElementById('Submit3');


Submit1.onclick = function(){SubmitClick5()};
//Submit2.onclick = function(){SubmitClick6()};


var snap = localStorage.getItem('snap');
var a=localStorage.getItem('a');

var li20 = document.createElement('li');
li20.innerText=(snap);
li20.setAttribute('style', "color:Black; text-decoration: none; font-family: Sans-Serif; font-size: 20px;");
li20.setAttribute('class',"list-group-item list-group-item-success text-center");
ulist2.appendChild(li20);


var dbRef=firebase.database().ref().child('Carts').child(snap);

dbRef.on('child_added',snap1=>{
var name = snap1.child("pname").val();
var price = snap1.child("pprice").val();
var quantity = snap1.child("pquantity").val();
var ptotal = snap1.child("total").val();
a=a+ptotal;
$("#table_body").append("<tr><td>" + name + "</td><td>" + price + "</td><td>" + quantity + "</td><td>" + ptotal +"</td></tr>");
});

dbRef.on('child_changed',snap1=>{
var name = snap1.child("pname").val();
var price = snap1.child("pprice").val();
var quantity = snap1.child("pquantity").val();
var ptotal = snap1.child("total").val();
a=a+ptotal;
$("#table_body").append("<tr><td>" + name + "</td><td>" + price + "</td><td>" + quantity + "</td><td>" + ptotal +" Rs.</td></tr>");
});

dbRef.on('child_removed',snap1=>{

$("#table_body").remove();
});
bigOne.innerText=("Grand Total : "+a+" Rs.");
bigOne.setAttribute('style', "color:Black; text-decoration: none; font-style:initial; font-weight:bold; font-family: Sans-Serif; font-size: 15px;");
bigOne.setAttribute('class',"list-group-item list-group-item-warning text-center");
//localStorage.clear();

function SubmitClick5() {
var dbRef=firebase.database().ref().child('FCM-Token').child(snap);
 dbRef.on('value',snap=>{
 var token1=snap.val();
window.location.href = "push_notification.php?token=" + token1 + "&uname=" + snap.key;
});

}

/*
function SubmitClick6() {
var dbRef=firebase.database().ref().child('Carts').child(snap);
dbRef.on('child_added',snap1=>{
var name = snap1.child("pname").val();
var price = snap1.child("pprice").val();
var quantity = snap1.child("pquantity").val();
var ptotal = snap1.child("total").val();
f=snap1.key;
var d = new Date();
var d = d.getDate();
var m = d.getMonth()+1;
var y = d.getFullYear();
var dbRef=firebase.database().ref().child('Previous_Carts').child(snap).child(y).child(f).set({name:name,price:price,quantity:quantity,total:ptotal});
});
}

*/
}());