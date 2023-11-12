const signin_password = document.querySelector('.signin_password')
const pass_icon = document.querySelector('.pass_icon')
pass_icon.addEventListener('click', ()=>{
    if(signin_password.type == 'password'){
        signin_password.type = 'text'
        pass_icon.src = './Img/Show.png'
    }else{
        signin_password.type = 'password'
        pass_icon.src = './Img/Hide.png'
    }
})

import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { auth } from "./auth.js"


const form = document.querySelector('.form')
const email = document.querySelector('.email')
const password = document.querySelector('.signin_password')
const sign_in_btn = document.querySelector('.sign_in_btn')
const invalid = document.querySelector('.invalid')
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    sign_in_btn.innerHTML = `<div class='loader'></div>`
    // setTimeout(()=>{
    //     sign_in_btn.innerHTML = 'Sign In'
    // },1000)
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      location.href = './todo.html'
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      invalid.textContent = 'Invalid Email/Password.'
    sign_in_btn.innerHTML = 'Sign In'
    setTimeout(()=>{
        invalid.innerHTML = ''
    },2000)
    });
})




//Continue with google
import { signInWithPopup } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { provider } from "./auth.js"
let signup_google = document.querySelector('.google')
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