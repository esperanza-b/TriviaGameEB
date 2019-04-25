 var panel= $("#quiz-area")
var countStartNumber = 30;

//Question Set
var question = [
    
    {
     question: "What kind of animal was Gentle Ben on the TV show?",
     answers:["Frog", "Tiger","Dog"],
     correctAnswer:"A Bear",
     image:"Assets/bear.gif",
    },

     {
         question: "A female donkey is called a what?",
     answers:["Donkeyness", "Luna","Tigress"],
     correctAnswer:"A Jenny",
     image:"Assets/donkey.gif",
      
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
        + "</buttons>"])

    };
         
            


         nextQuestion: function()
         {
             game.counter = countStartNumber;
             $("#counter-number").html(game.counter);
             game.currentQuestion++;
             game.loadQuestion9;
         }
          timeUp: function() {
              clearInterval(timer);

              $("counter-number").html(game.counter);

              panel.html("<h2>Out of Time</h2>");
              panel.append("<h3>The correct answer was: </h3>"+ questions[this.currentQuestion].correctAnswer);
              panel.append("<img src'"+ questions[this.currentQuestion].image);

              if (game.currentQuestion === questions.length -1)
              {
                 setTimeout(game.results, 3 * 1000); 
              }
              else{
                  setTimeout(game.realQuestion, 3 * 1000);
              }
            
              results: function(){

                clearInterval(timer);
                panel.html("<h2>All done, here's how you did</h2>");
                $("counter-number").html(game.counter);
                panel.append("<h3>Correct Answers;" + game.correct + "</h3>");
                panel.append("<h3>Incorrect Answers;"+ game.incorrect + "</h3>");
                panel.append("<h3>Unanswered;" +(questions.length - (game.correct + game.incorrect))+ "</h3>");
                panel.append("<br><button id = 'start over'>Start Over?</button>")

              },

              clicked: function(e){
                  clearInterval(timer);
                  if($(e.target).attr("data-name")===question[this.currentQuestion].correctAnswer){
                      this.answeredCorrectly();

                  }
                  else{
                      this.answeredIncorrectly();
                  }


              },
             answeredIncorrectly: function(){

                game.Incorrect++;
                clearInterval(timer);
                panel.html("<h2>NOPE</h2>")
                panel.append("<h3>The correct answer was:"+ questions[game.correctAnser].correctAnswer + "</h3>")
                panel.append("<img = scr'" + questions[game.currentQuestion].image + "/>")
                if (game.currentQuestion === questions.length -1)
                {
                   setTimeout(game.results, 3 * 1000); 
                }
                else{
                    setTimeout(game.realQuestion, 3 * 1000);
                },
                answeredCorrectly: function()
                panel.html("<h2>CORRECT</h2>")
                panel.append("<img = scr'" + questions[game.currentQuestion].image + "/>")
                if (game.currentQuestion === questions.length -1)
                {
                   setTimeout(game.results, 3 * 1000); 
                }
                else{
                    setTimeout(game.realQuestion, 3 * 1000);
                },

                reset: function(){
                    this.currentQuestion = 0;
                    this.counter = countStartNumber;
                    this.correct = 0;
                    this.Incorrect = 0;
                    this.loadQuestion()
                },

             }
           };
