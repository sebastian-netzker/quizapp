

let answer_1 = 'Robbie Williams';
let answer_2 = 'Lady Gaga';
let answer_3 = 'Tim Berners-Lee';
let answer_4 = 'Justin Bieber';









function nextQuestion() {


    document.getElementById('question').innerHTML = 'Wer hat HTML erfunden ?'; 



    document.getElementById('answer1').innerHTML = answer_1; 

    document.getElementById('answer2').innerHTML = answer_2; 

    document.getElementById('answer3').innerHTML = answer_3; 

    document.getElementById('answer4').innerHTML = answer_4; 



}




function answer(a) {
   

    let selected_answer;
    if(a == 1) {
        selected_answer = answer_1;
    } else if(a == 2) {
        selected_answer = answer_2;
    } else if(a == 3) {
        selected_answer = answer_3;
    } else {
        selected_answer = answer_4;
    }



   // alert('Du hast ' + selected_answer + ' geantwortet');





   if (selected_answer == answer_3) { //right answer
       document.getElementById('wrong-answer').classList.add('d-none');
       document.getElementById('right-answer').classList.remove('d-none');
       // show next button 
       document.getElementById('next-btn').classList.remove('d-none');
      
      }   else {

           document.getElementById('right-answer').classList.add('d-none');
           document.getElementById('wrong-answer').classList.remove('d-none');

            

           
     }


}


