const start=document.querySelector('#start');
const quizform=document.querySelector('#quizform');
const rules=document.querySelector('#rules');
const qbox =document.querySelector('#qbox');
const timeCount=document.querySelector('#timer');
quizform.style.display='none';
document.querySelector('#showScore').style.display='none'
const quizDB= [
  {
    question:" Q1: Which was the 1st non Test playing country to beat India in an international match?",
    a:"Canada",
    b:"Sri Lanka",
    c:"Zimbabwe ",
    d:"East Africa",
    ans:"ans2"
  },
  {
    question:" Q2: Track and field star Carl Lewis won how many gold medals at the 1984 Olympic games?",

    a:"Two",
    b:"Three",
    c:"Four",
    d:"Eight",
    ans:"ans3"
  },
  {
    question:" Q3: Which of the following is not a logical data-base structure?",
    a:"Tree",
    b:"Relational",
    c:"Network",
    d:"Chain",
    ans:"ans4"
  },
  {
    question:" Q4: Which of the following is a database administrator's function?",
    a:"database design",
    b:"backing up the database",
    c:"performance monitoring",
    d:"All of the above",
    ans:"ans4"
  },
  {
    question:" Q5: Primitive operations common to all record management systems include?",
    a:"Print",
    b:"Sort",
    c:"Look-Up",
    d:"All of the Above",
    ans:"ans3"
  },
];
const question= document.querySelector('.question');
const option1= document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3= document.querySelector('#option3');
const option4= document.querySelector('#option4');
const submit= document.querySelector('#submit');
const options=document.querySelectorAll('.option');
const showScore=document.querySelector('#showScore');
const restart=document.querySelector('#restart')
let questionCount=0;
let score=0;
let percentage;
let counter;
const loadQuestion = () => {
  const questionList= quizDB[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
}

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
     if(time==-1 && questionCount==quizDB.length-1){
      qbox.style.display='none';
      document.querySelector('#showScore').style.display='block'
      scorePercentage();
      showScore.innerHTML=`<h3> You scored ${score}/${quizDB.length}</h3> <h2> You scored ${percentage}%  </h2>`;
       
      clearInterval(counter); 
    }
     else if(time==-1 && questionCount<quizDB.length){
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
  // nxt_question()
  
  });
 
 

submit.addEventListener('click',function(event){
  event.preventDefault();
  const checkedAnswer=getCheckAnswer();
  // console.log(checkedAnswer);
  clearInterval(counter);
  starttimer(9);
    if(checkedAnswer=== quizDB[questionCount].ans){
      score++;
    };
    questionCount++;
    if(questionCount<quizDB.length){
      loadQuestion(); 
    }
    else{
      qbox.style.display='none';
      document.querySelector('#showScore').style.display='block'
      scorePercentage();
      showScore.innerHTML=`<h3> You scored ${score}/${quizDB.length}</h3>
      <h2> You scored ${percentage}%  </h2>`; 
      clearInterval(counter); 

     
    };
  //  nxt_question()
});
function scorePercentage() {
  percentage=(score/quizDB.length)*100;
}





