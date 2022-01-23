var name = prompt("Please Enter Your Name:");

var gender = prompt("Please Enter Your Gender:").toLowerCase();

while(gender != "male" && gender != "female"){
    var gender = prompt("Please Enter Your Gender Again (Male/Female)").toLowerCase(); // extra step
}

var age = prompt("Please Enter Your Age:");

while(age <= 0 && isNaN(age) !== false ){
    var gender = prompt("Please Enter a correct Age");
}

if (confirm("Would you want to skip the welcoming message ?")){
    switch(gender){
        case "male":
            alert ("Welcome Mr. " + name); 
        break;

        case "female": 
            alert ("Welcome Ms. " + name); 
        break;

        default:
            alert ("Welcome " + name); 
        break;

        
    }

}

 // New Code:
 var answersArray = new Array();
 var questionsArray = new Array();
    questionsArray[0] = "Are you living in Amman (Yes/No) ?";
    questionsArray[1] = "Did you passed the driving licance test (Yes/No) ?";
    questionsArray[2] = "Are you JUST university alumni (Yes/No) ?";


 let count = 3;

 function askQuestion(){
    answersArray[count] = prompt (questionsArray[count]).toLocaleLowerCase();
 }

 function saveAnswer(){
    answersArray[count] = (answersArray[count] == "yes" || answersArray[count] == "no")? answersArray[count] : "Invalid";
 }

 function printResults (){
     for (var i = 1 ; i <= 3 ; ++i){
        console.log ("\nQuestion [ " + i + " ]:");
        console.log (questionsArray[i]);
        console.log ("\nAnswer:");
        console.log (answersArray[i]);
     }
 }

 while (count--){
    askQuestion();
    saveAnswer();    
 }

 printResults();

 console.log (answersArray);
