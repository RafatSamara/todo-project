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