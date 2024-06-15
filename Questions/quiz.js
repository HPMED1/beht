
let questions = [
    {
        id: 1,
        question: "(4 × 6 - 4)  ÷ 4 ",
        answer:"5",
        options: [
            "5",
            "2",
            "4",
            "3"
        ]   
    },
    {
        id: 2,
        question: "What is symbol of Sodium?",
        answer: "Na",
        options: [
          "Fe",
          "K",
          "Na",
          "So"
        ]
      },
      {
        id: 3,
        question: "if your midlaner pings that the enemy Ahri is missing, what would you do?",
        answer: "Ward and play safe",
        options: [
          "Ward and play safe",
          "Push the wave",
          "Ping him back",
          "None of the above"
        ]
      },
      {
        id: 4,
        question: "What is Yuumi?",
        answer: "A cat",
        options: [
          "An item",
          "A dog",
          "A cat",
          "A rune"
        ]
      },
      {
        id: 5,
        question: "if you are in teamfight, who would you focas?",
        answer: "The fed member on the enemy team",
        options: [
          "The fed member on the enemy team",
          "The tank",
          "the 0/10 support/ADC",
          "None of the above"
        ]
      },
      {
        id: 6,
        question: "if your laner goes into fog of war, what would you do?",
        answer: "Ping missing and warn your team",
        options: [
          "Ping missing and warn your team",
          "Recall",
          "Flash",
          "Flame your jungler"
        ]
      },
      {
        id: 7,
        question: "if you keep getting ganked, what would you do?",
        answer: "All of the above",
        options: [
          "Play safe",
          "Freeze the wave",
          "Ward",
          "All of the above"
        ]
      },
      {
        id: 8,
        question: "if you go 0/3 in lane, what would you do?",
        answer: "Stand in EXP range and play safe",
        options: [
          "Stand in EXP range and play safe",
          "Push the wave",
          "Sell your items",
          "Flame your jungler"
        ]
      },
      {
        id: 9,
        question: "if Caitlyn targets your low-health teammate with R, what would you do?",
        answer: "Block it",
        options: [
          "Block it",
          "Flash away",
          "Recall",
          "None of the above"
        ]
      },
      {
        id: 10,
        question: "if you lost lane 0/10 and somehow won the game, what would you do?",
        answer: "Honor your carry",
        options: [
          "Honor your carry",
          "Type 'ez' in chat",
          "Flame your jungler",
          "Tell your support to 0/1 irl"
          
        ]
      },
];

let question_count = 0;
let points = 0;


window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "/beht/Result";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points += 10;
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}
