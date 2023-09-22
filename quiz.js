/*references*/

const startQuiz=document.querySelector('.startQuiz');
const quizguide=document.querySelector('.Quiz-guide');
const backbtn=document.querySelector('.back-btn');
const Continue=document.querySelector('.Continue-btn');
const dead=document.querySelector('.Dead');
const main=document.querySelector('.main');
const hell=document.querySelector('.quizbox');
const exit=document.querySelector('.reload');
startQuiz.onclick = ()=>{
    quizguide.classList.add('active');
    main.classList.add('active');
}
backbtn.onclick = ()=>{
    quizguide.classList.remove('active');
    main.classList.remove('active');
}
Continue.onclick = ()=>{
    main.classList.remove('active');
    quizguide.classList.remove('active');
    dead.classList.add('active');
}

/* quiz data base*/

    const quizData=[
        {
            question:"Q1: who programmed J.A.R.V.I.S in avengers movie?",
            a:"Tony Stark",
            b:"Captain America",
            c:"Bruce Banner",
            d:"Howard Stark",
            correct:"a",
        },
        {
            question:"Q2:What is the strongest metal in the Marvel Universe?",
            a:"iron",
            b:"vibranium",
            c:"frelinum",
            d:"gold",
            correct:"b",
        },
        {

            question:"Q3:Vision is a...what?",
            a:"Alien",
            b:"Android",
            c:"Ghost",
            d:"human",
            correct:"b",
        },
        {
            question:"Q4:In the 2012 movie, The Avengers features Captain America. What is his real name?",
            a:"bucks Rogers ",
            b:"Ted Rogers",
            c:"Steve Rogers",
            d:"John Rogers",
            correct:"c",   
        },
        {
            question:"Q5:Who is Loki's adoptive brother?",
            a:"Thor",
            b:"Thanos",
            c:"Peter Parker",
            d:"Bruce Banner",
            correct:"a", 
        },
    ];
 
let index = 0;
let correct=0,
incorrect=0,
total=quizData.length;
let questionbox=document.getElementById('Question-box');
let allinputs=document.querySelectorAll("input[type='radio']")
const loadquestion = ()=>{
    if (total==index){
        return quizEnd()
    }
    reset()
    const data=quizData[index]
    questionbox.innerHTML=`${index+1}) ${data.question}`
    allinputs[0].nextElementSibling.innerText=data.a
    allinputs[1].nextElementSibling.innerText=data.b
    allinputs[2].nextElementSibling.innerText=data.c
    allinputs[3].nextElementSibling.innerText=data.d
}

document.querySelector("#submit").addEventListener("click",
function (){
    const data=quizData[index]
    const ans =getAnswer()
    if(ans===data.correct){
        correct++;
    }
    else{
        incorrect++;
    }
index++;
loadquestion()
}   
)
const getAnswer = ()=>{
    let ans;
    allinputs.forEach(
        (inputE1)=>{
            if(inputE1.checked){
                ans=inputE1.value;
            }
        }
    )
    return ans ;
}
const reset=()=>{
    allinputs.forEach(
        (inputE1)=>{
            inputE1.checked = false;
        }
    )
}
let word= document.getElementsByClassName("Dead")[0 ];
const quizEnd=()=> {if(correct<=2){
        word.innerHTML =`
<div class="devil">
        <img src="images/sadboy.gif" ></img>
        <h2>you Loose</h2>
        <h3 class="devil1">you 've scored ${correct}/${total}</h3>
        
        `
    }else{
        word.innerHTML =`<div class="devil">
        <img src="images/cute.gif" ></img>
        <h2>You Win</h2>
        <h3 class="devil1">You've scored ${correct}/${total}</h3>
        `
    }

    }
loadquestion(index);