//SignUp Password Icon................ 
const pass_icon = document.querySelector('.pass_icon')
const signup_password = document.querySelector('.signup_password')
pass_icon.addEventListener('click',()=>{
    if(signup_password.type == 'password'){
        signup_password.type = 'text'
        pass_icon.src = './Img/Show.png'
    }else{
        signup_password.type = 'password'
        pass_icon.src = './Img/Hide.png'
    }
})






import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { auth, db } from "./auth.js"
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js"



const form = document.querySelector('.form')
const name = document.querySelector('.name')
const email = document.querySelector('.email')
const password = document.querySelector('.signup_password')
const sign_up_btn = document.querySelector('.sign_up_btn')
const invalid = document.querySelector('.invalid')

//Sign up new users
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    sign_up_btn.innerHTML = `<div class='loader'></div>`
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then(async(userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    try {
      const docRef = await addDoc(collection(db, "users"), {
        Name: email.value,
        Password: password.value,
      });
      window.location ='signin.html'
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    invalid.textContent = 'This Email has already been register.'
    sign_up_btn.innerHTML = 'Create Account'
    setTimeout(()=>{
        invalid.innerHTML = ''
    },2000)
  });



})







//continue with google
let signup_google = document.querySelector('.google')
import { signInWithPopup } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { provider } from "./auth.js"
//signup with google
signup_google.addEventListener('click', ()=>{
signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result)
    location.href = './todo.html'
    
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    
    console.log(errorMessage)
    window.location = 'index.html'
  });

})




