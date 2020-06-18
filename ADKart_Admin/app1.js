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

var userid;
var bigOne = document.getElementById('bigOne');

const ppid = document.getElementById('pid');
const ppname = document.getElementById('pname');
const pprice = document.getElementById('price');
const Submit1 = document.getElementById('Submit');
const ulist1 = document.getElementById('list1'); 
//const ulist2 = document.getElementById('list2'); 
const btnLogout = document.getElementById('btnLogout');

Submit1.onclick = function(){SubmitClick2()};
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


function SubmitClick2() {
  const pppid = ppid.value;
  const pppname = ppname.value;
  const ppprice = pprice.value;
  const p = parseInt(ppprice);
var dbRef=firebase.database().ref().child('Products').child(pppid).set({id:pppid,name:pppname,price:p});
}

window.onload = function(e){
    
    var dbRef=firebase.database().ref().child('Carts');
    
    dbRef.on('child_added',snap=>{
    var li6 = document.createElement('li');
    var li67 = document.createElement('a');
    li67.innerText=(snap.key);
    li67.setAttribute('href', "carts.html");
    li67.setAttribute('style', "color:Black; text-decoration: none; font-family: Sans-Serif; font-size: 20px;");
    li67.setAttribute('class',"list-group-item");

    li67.onclick=function (e) {    
        var a=0;
localStorage.setItem('snap', snap.key);

        
var li20 = document.createElement('li');
li20.innerText=(snap.key);
//ulist2.appendChild(li20);


var dbRef=firebase.database().ref().child('Carts').child(snap.key);
dbRef.on('child_added',snap1=>{
var name = snap1.child("pname").val();
var price = snap1.child("pprice").val();
var quantity = snap1.child("pquantity").val();
var ptotal = snap1.child("total").val();
a=a+ptotal;
var li = document.createElement('li');
li.innerText=("Product : "+name+" , Price :  "+price+" , Quantity :  "+quantity+" , Total :  "+ptotal);
li.id = snap.key;
//ulist2.appendChild(li);
});

dbRef.on('child_changed',snap=>{
var li1 = document.getElementById(snap.key);
li1.innerText=snap.val();
});

dbRef.on('child_removed',snap=>{
var li2 = document.getElementById(snap.key);
li2.remove();
});

var li8 = document.createElement('li');
li8.innerText=("GTotal : "+a);
localStorage.setItem('a', a);
//ulist2.appendChild(li8);
window.open("carts.html", "User Carts","left=20,top=20,width=500,height=500,toolbar=1,resizable=0"); 
        return false;
}
    li6.appendChild(li67);
    ulist1.appendChild(li6);

});

}



}());