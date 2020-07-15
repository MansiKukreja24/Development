var firstName = prompt("First Name please: ");
var lastName = prompt("Last Name please: ");
var age = prompt("How old are you?");
var height = prompt("What is your height?");
var petName = prompt("What is the name of your pet");


// Conditions initially:
var nameCon = null;
var ageCon = null;
var petCon = null;
var heightCon = null;

if(firstName[0]===lastName[0]){
    nameCon = true;
}
else{
    nameCon = false;
}
if(age > 20 && age < 30){
    ageCon = true;
}
else{
    ageCon = false;
}
if(height >= 170){
    heightCon = true;
}
else{
    heightCon = false;
}
if(petName[petName.length-1] === "y"){
    petCon = true;
}
else{
    petCon = false;
}
if(nameCon && ageCon && heightCon && petCon){
    console.log("WELCOME SPY!!");
}
else{
    console.log("Nothing to see here!!")
}





