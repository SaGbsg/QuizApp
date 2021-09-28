const quizDate = [
    {
        question:'Suhrob necha yoshda?',
          a:'25',
          b:'20',
          c:'19',
          d:'18',
          correct:'c'
    },{
        question:'Menda nimalar bor?',
          a:'telefon',
          b:'Kompyuter',
          c:'Ruchka',
          d:'Telefon,Kompyuter va Ruchka',
          correct:'d'
         
    },{
        question:'Kunning harorti qanday?',
          a:'34C',
          b:'Bilmayman',
          c:'-2',
          d:'36C',
          correct:'b'

    },{
        question:'Dasturlashda ko\'p ishlatiladigan til 2021',
          a:'JavaScript',
          b:'PHP',
          c:'Java',
          d:'C++',
          correct:'c'
    },{
        question:'Eng ko\'p beriladigan savol',
          a:'Nechanchi yilsiz?',
          b:'Ismingiz nima?',
          c:'Qayerda yashaysiz?',
          d:'Sevganingiz bormi?',
          correct:'b'
    }

       

];
         const answerEls = document.querySelectorAll('.answer');
         const quiz = document.getElementById('quiz');
         const a_text = document.getElementById('a_text');
         const questionEl = document.getElementById('question');
         const b_text = document.getElementById('b_text');
         const c_text = document.getElementById('c_text');
         const d_text = document.getElementById('d_text');
         const submitBtn = document.getElementById('submit')
 
    let currentQuiz = 0;
    let score = 0;

   loadQuiz();
   
function loadQuiz() { 
         deselectAnswer();

  const currentQuizDate = quizDate[currentQuiz];
         questionEl.innerText = currentQuizDate.question;
         a_text.innerText = currentQuizDate.a; 
         b_text.innerText = currentQuizDate.b;
         c_text.innerText = currentQuizDate.c;
         d_text.innerText = currentQuizDate.d ;     
   
   };

 function getSelected() {

      
      let answer = undefined;
      
     answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
          answer = answerEl.id;
        }
     });
     return answer;
   }

 function deselectAnswer()  {
    answerEls.forEach((answerEl) => {
      answerEl.checked = false;
      
      
   });
  }
submitBtn.addEventListener('click', () =>{


const answer = getSelected();

 
  if(answer) {
    if(answer === quizDate[currentQuiz].correct) {
      score++
    }
    currentQuiz++;
         if(currentQuiz < quizDate.length) {
         loadQuiz();
       }
       else{
        quiz.innerHTML = `<h2> To'g'ri javoblar ${score}/${quizDate.length} </h2> <button onclick="location.reload()">Yangilash</button>`
       }
         }

});