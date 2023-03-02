document.querySelector("#quizButton").addEventListener("click", gradeQuestion1);

displayQuestions();

function displayQuestions() {
    let q1Choices = ["Monterey", "Sacramento", "San Francisco", "Los Angeles"];

    let q2Choices = ["Dr.C", "Dr.Byun", "Dr.Lara", "Anver"];

    let q4Choices = [2, 17, 34958, 8590485];

    q1Choices = _.shuffle(q1Choices);
    q2Choices = _.shuffle(q2Choices);
    q4Choices = _.shuffle(q4Choices);

    // question 1
    for (let i = 0; i < q1Choices.length; i++) {
        let radioButton = document.createElement("input");

        radioButton.type = "radio";
        radioButton.name = "q1";
        radioButton.value = q1Choices[i];

        let buttonLabel = document.createElement("label");
        buttonLabel.innerHTML = q1Choices[i];
        buttonLabel.prepend(radioButton);

        document.querySelector("#q1Choices").appendChild(buttonLabel);
        let lineBreak = document.createElement("br");
        document.querySelector("#q1Choices").appendChild(lineBreak);
        console.log(buttonLabel);
    }
    //question 2
    for (let i = 0; i < q2Choices.length; i++) {
        let checkBoxButton = document.createElement("input");


        checkBoxButton.type = "checkbox";
        checkBoxButton.name = "q2";
        checkBoxButton.value = q2Choices[i];

        let buttonLabel = document.createElement("label");
        buttonLabel.innerHTML = q2Choices[i];
        buttonLabel.prepend(checkBoxButton);

        document.querySelector("#q2Choices").appendChild(buttonLabel);
        let lineBreak = document.createElement("br");
        document.querySelector("#q2Choices").appendChild(lineBreak);
        console.log(buttonLabel);
    }

    // Question 4
    for (let i = 0; i < q4Choices.length; i++) {
        let radioButton = document.createElement("input");

        radioButton.type = "radio";
        radioButton.name = "q4";
        radioButton.value = q4Choices[i];

        let buttonLabel = document.createElement("label4");
        buttonLabel.innerHTML = q4Choices[i];
        buttonLabel.prepend(radioButton);

        document.querySelector("#q4Choices").appendChild(buttonLabel);
        let lineBreak = document.createElement("br");
        document.querySelector("#q4Choices").appendChild(lineBreak);
        console.log(buttonLabel);
    }

}

// Question 1 
function gradeQuestion1() {

    var quizpoints = 0;

    let choice1 = document.querySelector("input[name=q1]:checked").value;
    let answer1 = "Sacramento";

    if (choice1 == answer1) {
        document.querySelector("#q1Feedback").innerHTML = "Correct!";
        document.querySelector("#q1Feedback").style.color = "green";
        document.querySelector("#check1").innerHTML = "<img src ='https://www.freeiconspng.com/thumbs/checkmark-png/black-checkmark-png-4.png' >";
        quizpoints += 20;
    } else {
        document.querySelector("#q1Feedback").innerHTML = "Incorrect!";
        document.querySelector("#q1Feedback").style.color = "red";
        document.querySelector("#x1").innerHTML = "<img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqMPcJQL6w3hvPkjyFZNOOqyoxwMxJ_GGs_w&usqp=CAU' >";
        quizpoints += 0;
    }

    //question 2 
    let choices2 = [];
    let checkboxes = document.querySelectorAll("input[name=q2]:checked");
    console.log(checkboxes);
    for (let i = 0; i < checkboxes.length; i++) {
        choices2.push(checkboxes[i].value)
    }
    let q2Answers2 = ["Dr.C", "Dr.Lara"];

    if (q2Answers2.sort().join(',') === choices2.sort().join(',')) {
        document.querySelector("#q2Feedback").innerHTML = "Correct!";
        document.querySelector("#q2Feedback").style.color = "green";
        document.querySelector("#check2").innerHTML = "<img src ='https://www.freeiconspng.com/thumbs/checkmark-png/black-checkmark-png-4.png' >";
        quizpoints += 20;
    }
    else {
        document.querySelector("#q2Feedback").innerHTML = "Incorrect!";
        document.querySelector("#q2Feedback").style.color = "red";
        document.querySelector("#x2").innerHTML = "<img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqMPcJQL6w3hvPkjyFZNOOqyoxwMxJ_GGs_w&usqp=CAU' >";
        quizpoints += 0;
    }

    //question 3
    var answer3 = "1";
    let option3 = document.getElementById("q3").value;
    if (option3 === answer3) {
        document.querySelector("#q3Feedback").innerHTML = "Correct! ";
        document.querySelector("#q3Feedback").style.color = "green";
        document.querySelector("#check3").innerHTML = "<img src ='https://www.freeiconspng.com/thumbs/checkmark-png/black-checkmark-png-4.png' >";
        quizpoints += 20;
    } else {
        document.querySelector("#q3Feedback").innerHTML = "Incorrect!";
        document.querySelector("#q3Feedback").style.color = "red";
        document.querySelector("#x3").innerHTML = "<img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqMPcJQL6w3hvPkjyFZNOOqyoxwMxJ_GGs_w&usqp=CAU' >";
        quizpoints += 0;
    }

    // Question 4
    let choice4 = document.querySelector("input[name=q4]:checked").value;
    let answer4 = 2;

    if (choice4 == answer4) {
        document.querySelector("#q4Feedback").innerHTML = "Correct!";
        document.querySelector("#q4Feedback").style.color = "green";
        document.querySelector("#check4").innerHTML = "<img src ='https://www.freeiconspng.com/thumbs/checkmark-png/black-checkmark-png-4.png' >";

        quizpoints += 20;
    } else {
        document.querySelector("#q4Feedback").innerHTML = "Incorrect!";
        document.querySelector("#q4Feedback").style.color = "red";
        document.querySelector("#x4").innerHTML = "<img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqMPcJQL6w3hvPkjyFZNOOqyoxwMxJ_GGs_w&usqp=CAU' >";
        quizpoints += 0;
    }

    // Question 5
    let choice5 = document.getElementById("fname").value;
    var answer5 = "1995";

    if (choice5 == answer5) {
        document.querySelector("#q5Feedback").innerHTML = "Correct!";
        document.querySelector("#q5Feedback").style.color = "green";
        document.querySelector("#check5").innerHTML = "<img src ='https://www.freeiconspng.com/thumbs/checkmark-png/black-checkmark-png-4.png' >";
        quizpoints += 20;
    } else {
        document.querySelector("#q5Feedback").innerHTML = "Incorrect!";
        document.querySelector("#q5Feedback").style.color = "red";
        document.querySelector("#x5").innerHTML = "<img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqMPcJQL6w3hvPkjyFZNOOqyoxwMxJ_GGs_w&usqp=CAU' >";
        quizpoints += 0;
    }

    // Points
    document.querySelector("#quizpoints").innerHTML = quizpoints + "/100 <br>";
    if (quizpoints >= 80) {
        document.querySelector("#congrats").innerHTML = "CONGRATULATIONS YOU PASSED!";
        document.querySelector("#congrats").style.color = "green";
    } else {
        document.querySelector("#congrats").innerHTML = "YOU FAILED :(";
        document.querySelector("#congrats").style.color = "red";
    }

    // Button
    clickCounter();

    function clickCounter() {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("#quizbutton").innerHTML = localStorage.clickcount;
    }
}





