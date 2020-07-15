// Empty Array for student name

var roster = []

//ADD function
 function addNew(name){
    roster.push(name)
    console.log(roster)
 }

 // Remove function:

 function remove(name){
    var index = roster.indexOf(name)
    if(index > -1){
        roster.splice(index,1)
    }
 }

 // Display function:

 function display(){
    console.log(roster)
 }

var choice = prompt("Would you like to start he roster web app? y/n ")
while (choice === 'y'){
    var action = prompt("Select an action: Add, Remove, Display, Quit")
    if(action === "Add"){
        var name = prompt("What name would you like to add?")
        addNew(name)
    }
    else if(action === "Remove"){
        var name = prompt("What name would you like to remove?")
        remove(name)
    }
    else if(action === "Display"){
        display()
    }
    else if(action === "Quit"){
        break;
    }
    else{
        alert("Wrong command")
    }
    choice = prompt("Would you like to start he roster web app? y/n ")
    }

