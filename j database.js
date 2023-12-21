// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNiWNuAf564ODrOlg6lNdBTNUxaJgwvjw",
    authDomain: "healthcare-chat-bot-6d401.firebaseapp.com",
    databaseURL: "https://healthcare-chat-bot-6d401-default-rtdb.firebaseio.com",
    projectId: "healthcare-chat-bot-6d401",
    storageBucket: "healthcare-chat-bot-6d401.appspot.com",
    messagingSenderId: "847363013728",
    appId: "1:847363013728:web:2e0c4bbd5743f95e9a1705",
    measurementId: "G-FMY2XRV007"
  };
  
  //initialize firebase
  firebaseConfig.initializeApp(firebaseConfig);
  
  //reference your database
 var loginFormDB = firebase.database().ref('health care chat bot');

 document.getElementById('Login-form').addEventListener('submit',submitForm);

 function submitForm(e){
    e.preventDefault();

    var email = getElementVal('email');
    var password = getElementVal('password');

    console.log(email, password);
 }
const getElementVal = (id) => {
    return document.getElementById(id).value;
}
  
