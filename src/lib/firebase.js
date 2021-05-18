import Firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
//import {seedDatabase} from '../constants/data'


  const app = Firebase.initializeApp({
    
    apiKey: "AIzaSyDno9OgwvJRdmduDD-hl_atkj8NYnY1THs",
    authDomain: "instagram-clone-4059e.firebaseapp.com",
    projectId: "instagram-clone-4059e",
    storageBucket: "instagram-clone-4059e.appspot.com",
    messagingSenderId: "62922812723",
    appId: "1:62922812723:web:32eccba1db052664fba246"
  })

  
 



  const {FieldValue} = Firebase.firestore
  //seedDatabase(app) 
  //console.log(app)
  


  export {app, FieldValue}