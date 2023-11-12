import { auth } from "./auth.js";
import {  onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import {  signOut } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
const youUid = document.querySelector('.uId')
const logout = document.querySelector('.logout-btn')
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.email;
      youUid.textContent = uid
    } else {
      // User is signed out
      // ...
    }
  });

  logout.addEventListener('click', ()=>{
    signOut(auth).then(() =>{
      logout.innerHTML = `<div class='loader'></div>`
      setTimeout(()=>{
        location.href= './signin.html'

      },2000)
        
      }).catch((error) => {
        logout.innerHTML = `Logout`
        console.log(user);
      });

  })




