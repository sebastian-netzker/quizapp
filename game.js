/**
 *This function show the headline from the quiz
 */

function ShowHeadline() {
  document.getElementById("quiz-description").classList.remove("d-none");

  document.getElementById("button-start").classList.remove("d-none");

  document.getElementById("brain-img").classList.remove("d-none");
}

/**
 * This function show the questions in the quiz
 */

function showQuestion() {
  document.getElementById("question").innerHTML =
    allquestions[question_number - 1]["question"];

  document.getElementById("question").classList.add("change_font_size");

  document.getElementById("answer-1").innerHTML =
    allquestions[question_number - 1]["answer_1"];

  document.getElementById("answer-2").innerHTML =
    allquestions[question_number - 1]["answer_2"];

  document.getElementById("answer-3").innerHTML =
    allquestions[question_number - 1]["answer_3"];

  document.getElementById("answer-4").innerHTML =
    allquestions[question_number - 1]["answer_4"];

  right_answer = allquestions[question_number - 1]["right_answer"];
}

/**
 * This function activate all answers
 */

function activateAnswers(){

    document.getElementById("answer-1").classList.remove("d-none");

    document.getElementById("answer-2").classList.remove("d-none");

    document.getElementById("answer-3").classList.remove("d-none");

    document.getElementById("answer-4").classList.remove("d-none");


}

/**
 * This function start the quiz
 */

function StartQuiz() {
  document.getElementById("quiz-description").classList.add("d-none");

  document.getElementById("button-start").classList.add("d-none");
  
  activateAnswers();

  document.getElementById("buttons").classList.remove("d-none");

  document.getElementById("question").classList.remove("d-none");

  document.getElementById("brain-img").classList.add("d-none");

  document.getElementById("progress_bar").classList.remove("d-none");

  document.getElementById("progress_bar2").classList.remove("d-none");

  question_number++;

  showQuestion();

  updateProgressbar();
}

/**
 * This function show the first answer
 * @param {number} a - number for the first answer
 */

function answer1(a) {
  if (a == right_answer) {
    document.getElementById("answer-1").classList.add("change_color_green");
    document.getElementById("answer-1").disabled = true;
    document.getElementById("next-btn").classList.remove("d-none");
    count_questions++;
  } else {
    document.getElementById("answer-1").classList.add("change_color_red");
    document.getElementById("answer-1").disabled = true;
    tries--;
  }
}

/**
 * This function show the second answer
 * @param {number} b - number for the second answer 
 */

function answer2(b) {
  if (b == right_answer) {
    document.getElementById("answer-2").classList.add("change_color_green");
    document.getElementById("answer-2").disabled = true;
    document.getElementById("next-btn").classList.remove("d-none");
    count_questions++;
  } else {
    document.getElementById("answer-2").classList.add("change_color_red");
    document.getElementById("answer-2").disabled = true;

    tries--;
  }
}

/**
 * This function show the third answer
 * @param {number} c - number for the third answer
 */

function answer3(c) {
  if (c == right_answer) {
    document.getElementById("answer-3").classList.add("change_color_green");
    document.getElementById("answer-3").disabled = true;
    document.getElementById("next-btn").classList.remove("d-none");
    count_questions++;
  } else {
    document.getElementById("answer-3").classList.add("change_color_red");
    document.getElementById("answer-3").disabled = true;
    tries--;
  }
}

/**
 * This function show the last answer
 * @param {number} d - number for the last answer
 */

function answer4(d) {
  if (d == right_answer) {
    document.getElementById("answer-4").classList.add("change_color_green");
    document.getElementById("answer-4").disabled = true;
    document.getElementById("next-btn").classList.remove("d-none");
    count_questions++;
  } else {
    document.getElementById("answer-4").classList.add("change_color_red");
    document.getElementById("answer-4").disabled = true;
    tries--;
  }
}

/**
 * This function show the attempts of the question
 */

function question_tries() {
  if (tries == 0 && right_answer == 1) {
    document.getElementById("answer-1").classList.add("change_color_green");
    document.getElementById("next-btn").classList.remove("d-none");
  } else if (tries == 0 && right_answer == 2) {
    document.getElementById("answer-2").classList.add("change_color_green");
    document.getElementById("next-btn").classList.remove("d-none");
  } else if (tries == 0 && right_answer == 3) {
    document.getElementById("answer-3").classList.add("change_color_green");
    document.getElementById("next-btn").classList.remove("d-none");
  } else if (tries == 0 && right_answer == 4) {
    document.getElementById("answer-4").classList.add("change_color_green");
    document.getElementById("next-btn").classList.remove("d-none");
  } else if (question_number >= 1 && tries == 0) {
    tries++;
    tries++;
  }
}

/**
 * This function updating the progressbar
 */

function updateProgressbar(){

    progress = Math.round((question_number / allquestions.length) * 100);
    document.getElementById("progress_bar2").innerHTML = progress + "%";

    document.getElementById("progress_bar2").style.width = progress + "%";
}

/**
 * This function show the next question
 */

function nextQuestion() {
  if (question_number == allquestions.length) {
    finishQuiz();
  } else {
    if (question_number >= 1 && tries == 0) {
      tries++;
      tries++;
    } else if (question_number >= 1 && tries == 1) {
      tries++;
    }

    document.getElementById("next-btn").classList.add("d-none");

    last_question_button();

    change_color_to_blue();

    question_number++;

    showQuestion();

    updateProgressbar();

    enable_button();
  }
}

/**
 * This function enable the answer buttons
 */

function enable_button() {
  document.getElementById("answer-1").disabled = false;
  document.getElementById("answer-2").disabled = false;
  document.getElementById("answer-3").disabled = false;
  document.getElementById("answer-4").disabled = false;
}

/**
 * This function disable the answer buttons
 */

function disable_button() {
  document.getElementById("answer-1").disabled = true;
  document.getElementById("answer-2").disabled = true;
  document.getElementById("answer-3").disabled = true;
  document.getElementById("answer-4").disabled = true;
}

/**
 * This function change the color from the answer buttons to blue
 */

function change_color_to_blue() {
  document.getElementById("answer-1").classList.remove("change_color_red");
  document.getElementById("answer-1").classList.remove("change_color_green");

  document.getElementById("answer-2").classList.remove("change_color_red");
  document.getElementById("answer-2").classList.remove("change_color_green");

  document.getElementById("answer-3").classList.remove("change_color_red");
  document.getElementById("answer-3").classList.remove("change_color_green");

  document.getElementById("answer-4").classList.remove("change_color_red");
  document.getElementById("answer-4").classList.remove("change_color_green");
}

/**
 * This function show the last question button
 */

function last_question_button() {
  if (question_number >= 1) {
    document.getElementById("last-question-btn").classList.remove("d-none");
  }
}

function lastQuestion() {
  question_number--;

  showQuestion();

  if (question_number <= 1) {
    document.getElementById("last-question-btn").classList.add("d-none");
  }

  change_color_to_blue();
}

/**
 * This function finish the quiz 
 */

function finishQuiz() {
  document.getElementById("next-btn").classList.add("d-none");

  document.getElementById("last-question-btn").classList.add("d-none");

  document.getElementById("main-quiz").classList.add("d-none");

  document.getElementById("finish-quiz-container").classList.remove("d-none");

  document.getElementById("p3_finish").innerHTML = count_questions;

  document.getElementById("p4_finish").innerHTML = allquestions.length;
}


/**
 * This function hide all answers
 */

function hideAnswers(){

    document.getElementById("answer-1").classList.add("d-none");
    document.getElementById("answer-2").classList.add("d-none");
    document.getElementById("answer-3").classList.add("d-none");
    document.getElementById("answer-4").classList.add("d-none");


}

/**
 * This function restart the quiz
 */

function Restartquiz() {
  document.getElementById("quiz-description").classList.remove("d-none");

  document.getElementById("button-start").classList.remove("d-none");
  document.getElementById("finish-quiz-container").classList.add("d-none");
  document.getElementById("main-quiz").classList.remove("d-none");
  question_number = 0;

  count_questions = 0;

  hideAnswers();

  document.getElementById("buttons").classList.add("d-none");
  document.getElementById("progress_bar").classList.add("d-none");
  document.getElementById("progress_bar2").classList.add("d-none");
  document.getElementById("question").classList.add("d-none");

  change_color_to_blue();

  enable_button();

  ShowHeadline();
}

/**
 * This function open the side menu
 */

function openSidemenu() {
  document.getElementById("links").classList.add("show-links");
}

/**
 * This function close the side menu
 */

function closeSidemenu() {
  document.getElementById("links").classList.remove("show-links");
}
