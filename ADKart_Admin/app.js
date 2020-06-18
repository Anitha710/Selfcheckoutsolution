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


//Get Elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
//const btnSignup = document.getElementById('btnSignup');


//Log In
btnLogin.addEventListener('click',e =>{
	const email = txtEmail.value;
	const password = txtPassword.value;
	const auth = firebase.auth();
//Sign in
if(email=="kushyaadav14@gmail.com"){
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch(e => console.log(e.message));
  }
  else{
    window.alert("Enter Admin's Credentials");
  }

});

//add realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
if(firebaseUser){
  console.log(firebaseUser);
  window.location="home.html";
}else{
  console.log('Not Logged in');
}
});


/*
//SignUp
btnSignup.addEventListener('click',e =>{
	const email = txtEmail.value;
	const password = txtPassword.value;
	const auth = firebase.auth();

    //Sign up
    const promise = auth.createUserWithEmailAndPassword(email,password);
    promise.catch(e => console.log(e.message));

});
*/



}());