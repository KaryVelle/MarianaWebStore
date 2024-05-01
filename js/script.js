 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
  import { getAuth, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider}from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

  
const firebaseConfig = {
  apiKey: "AIzaSyAt9SQ1aW8vFi2E9LXxMq-L5saJVYHj1OA",
  authDomain: "mariana-web-bc321.firebaseapp.com",
  projectId: "mariana-web-bc321",
  storageBucket: "mariana-web-bc321.appspot.com",
  messagingSenderId: "575930099773",
  appId: "1:575930099773:web:a8133695ddcb2bc000a254",
  measurementId: "G-M211H718R4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//AUTENTIFICACION
(() => {
    const d = document,
      auth = getAuth(app),
      provider = new GoogleAuthProvider(),
      $appAuthGoogle = d.getElementById("app-auth-google");
  
    onAuthStateChanged(auth, (user) => {
      //console.log(user);
  
      if (user) {
        //console.log("Usuario Autenticado");
        $appAuthGoogle.innerHTML = `
          <p>Logged In</p>
          <button id="google-logout">Salir</button>
          <p>Bienvenido ${user.displayName}</p>
          <img src="${user.photoURL}" alt="${user.displayName}">
        `;
        //Añadir admins
        if (user.displayName == "Karina Vellenaweth Moreno")
        {
            console.log("Usuario admin");
        }
      } else {
        //console.log("Usuario NO Autenticado");
        $appAuthGoogle.innerHTML = `<p>Usuario no Registrado</p>`;
      }
    });
  
    d.addEventListener("click", (e) => {
      if (e.target.matches("#google-login")) {
        alert("Ingresando con Google");
  
        signInWithPopup(auth, provider)
          .then((res) => {
            console.log(res);
            $appAuthGoogle.innerHTML = `<p>Bienvenido ${res.user.displayName}</p>`;
          })
          .catch((err) => {
            console.log(err);
            $appAuthGoogle.innerHTML = `<p>Error: <i>${err.code}</i> - <b>${err.message}</b></p>`;
          });
      }
  
      if (e.target.matches("#google-logout")) {
        alert("Cerrando sesión");
        signOut(auth);
      }
    });
  })();