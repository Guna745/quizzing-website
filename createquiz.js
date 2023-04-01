


document.addEventListener('DOMContentLoaded',function() {
 
	


	const question=document.querySelector('#question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const createquiz=document.querySelector('#createquiz')



let Quiz=[]
let quizDB
quizDB={
 questions:question.value,
 options1:option1.value,
 options2:option2.value,
 options3:option3.value,
 options4:option4.value,}


let addqtion=document.querySelector('#addqtion');
addqtion.addEventListener('click',function (event) {
	event.preventDefault();
 
let newquestion={
  questions:question.value,
  options1:option1.value,
  options2:option2.value,
  options3:option3.value,
  options4:option4.value,
}
 
Quiz.push(newquestion)
document.querySelector('#question').value = '';
document.querySelector('#option1').value = '';
document.querySelector('#option2').value = '';
document.querySelector('#option3').value = '';
document.querySelector('#option4').value = '';



console.log(Quiz);

})
createquiz.addEventListener('click',function(event) {
  event.preventDefault();
  console.log('working')
   set(ref(database, 'questions/'),{
    questiondata:Quiz
   })


   
   alert("quiz created")
   
  })  

  quizDB.id=push(ref(database,'questions/')).key
})





import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase,set,ref,push } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js" ;
const firebaseConfig = {
  apiKey: "AIzaSyCW7SSRKAgLSB5GYp_Y4xGmTlIf6_P6XkU",
  authDomain: "quizzing-website-b1db2.firebaseapp.com",
  databaseURL: "https://quizzing-website-b1db2-default-rtdb.firebaseio.com",
  projectId: "quizzing-website-b1db2",
  storageBucket: "quizzing-website-b1db2.appspot.com",
  messagingSenderId: "887254109424",
  appId: "1:887254109424:web:447e02e00b025361a90635"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);













  
   

