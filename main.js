 var panel= $("#quiz-area")
var countStartNumber = 30;

//Question Set
var question = [
    
    {
     question: "What kind of animal was Gentle Ben on the TV show?",
     answers:["Frog", "Tiger","Dog"],
     correctAnswer:"A Bear",
     image:"Assets2\bear.gif",
    },

     {
         question: "A female donkey is called a what?",
     answers:["Donkeyness", "Luna","Tigress"],
     correctAnswer:"A Jenny",
     image:"Assets2\donkey.gif",
      
    },

]
//Variable to hold out setInternal
var timer;
var game = {

    questions: question, 
    correctQuestion: 0,
    counter: countStartNumber,
    correct: 0, 
    incorrect: 0,

    countdown: function() {
        game.counter--;
        $("#counter-number").html(game.counter);
        if(game.counter=== 0){
            console.log("TIME'S UP!");
            game.timeUp();

        }
        
    },

     loadQuestion: function() 
     {
         timer = setInterval(game.countdown, 1000);
         panel.html("<h2>" + question[this.incorrect.currentQuestion].question + '</h2>');
         for(var i = 0; i< questions[this.currentQuestion].answers.length; i++);
        }
       
        
        panel.append("<button class= 'answer-button' id= 'button' data-name=' " + 
        questions[this.currentQuestion].answer[i] +"'>"+ questions[this.currentQuestion.answer[i]
        + "</buttons>"]
        )

    };
         
            


         nextQuestion: function(){
             game.counter = countStartNumber;
             $("#counter-number").html(game.counter);
             game.currentQuestion++;
             game.loadQuestion9;
         }
          timeUp: function() {

          }
        };
