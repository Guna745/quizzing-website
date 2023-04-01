
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase,ref,onValue} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js" ;
const firebaseConfig = {
  apiKey: "AIzaSyCW7SSRKAgLSB5GYp_Y4xGmTlIf6_P6XkU",
  authDomain: "quizzing-website-b1db2.firebaseapp.com",
  databaseURL: "https://quizzing-website-b1db2-default-rtdb.firebaseio.com",
  projectId: "quizzing-website-b1db2",
  storageBucket: "quizzing-website-b1db2.appspot.com",
  messagingSenderId: "887254109424",
  appId: "1:887254109424:web:447e02e00b025361a90635"
};

   const start=document.querySelector('#start');
   const quizform=document.querySelector('#quizform');
   const rules=document.querySelector('#rules');
   const qbox =document.querySelector('#qbox');
   const timeCount=document.querySelector('#timer');
   quizform.style.display='none';
   document.querySelector('#showScore').style.display='none'
const question= document.querySelector('.question');
const option1= document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3= document.querySelector('#option3');
const option4= document.querySelector('#option4');

const submit= document.querySelector('#submit');
const options=document.querySelectorAll('.option');
const showScore=document.querySelector('#showScore');
// const restart=document.querySelector('#restart')



let questionCount=0;
let score=0;
let percentage;
let counter;
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);



let quizDB=[];

// Retrieve the quiz data from Firebase
// const quizRef = ref(database, 'questions/');
// onValue(quizRef, (snapshot) => {
//   quizDB = snapshot.val().questiondata;
//   loadQuestion();
// }, (error) => {
//   console.log(error);
// });
// console.log(quizDB)

const quizRef = ref(database, 'questions/');

onValue(quizRef, (snapshot) => {
  quizDB = snapshot.val();
  console.log(quizDB);

});
// let quiz.id = set(quizRef,'questions/').key
const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerText = questionList.questions;
  option1.innerText = questionList.options1;
  option2.innerText = questionList.options2;
  option3.innerText = questionList.options3;
  option4.innerText = questionList.options4;
}
loadQuestion();
// function getdatafromdatabase() {
//     const reference= ref(database,'questions/')
//     onChildAdded(reference,function(data){
//         console.log(data.val())
//         quizDB.push(data.val())
//     })
// }
// getdatafromdatabase()
// console.log(quizDB.questions);
// ref(database, 'questions/'),{
//   questiondata:Quiz
//  }
loadQuestion();

const getCheckAnswer=()=>{
  let answer;
  options.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
       answer=curAnsElem.id;  
    }
    
});
return answer;
};

function starttimer (time) {
counter=setInterval(timer,1000);
function timer(){
  timeCount.textContent= time  ;
  time--;
   if(time==-1 && questionCount==quizData.length-1){
    qbox.style.display='none';
    document.querySelector('#showScore').style.display='block'
    scorePercentage();
    showScore.innerHTML=`<h3> You scored ${score}/${quizData.length}</h3> <h2> You scored ${percentage}%  </h2>`;
     
    clearInterval(counter); 
  }
   else if(time==-1 && questionCount<quizData.length){
    clearInterval(counter)
    questionCount++;
    loadQuestion();
  nxt_question()
 
}
}


}
function nxt_question() {
if(timeCount.innerHTML=='0'){
  clearInterval(counter);
  starttimer(9);
}
}


start.addEventListener('click',function(){
quizform.style.display='block';
rules.style.display='none';
starttimer(9);
nxt_question()

});



submit.addEventListener('click',function(event){
event.preventDefault();
const checkedAnswer=getCheckAnswer();
console.log(checkedAnswer);
clearInterval(counter);
starttimer(9);
  if(checkedAnswer=== quizData[questionCount].ans){
    score++;
  };
  questionCount++;
  if(questionCount<quizData.length){
    loadQuestion(); 
  }
  else{
    qbox.style.display='none';
    document.querySelector('#showScore').style.display='block'
    scorePercentage();
    showScore.innerHTML=`<h3> You scored ${score}/${quizData.length}</h3>
    <h2> You scored ${percentage}%  </h2>`; 
    clearInterval(counter); 

   
  };
 nxt_question()
});
function scorePercentage() {
percentage=(score/quizData.length)*100;
}

