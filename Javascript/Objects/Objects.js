// Problem 1:

var employee = {name : "John Smith", job: "Programmer", nameLength: function(){
                                                                                console.log(this.name.length)}}

 employee.nameLength()


// Problem 2:

var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  showAlert: function(){
  	alert("Name is " + this.name);
  	alert("Job is " + this.job);
  	alert("Age is " + this.age);
  }
}
employee.showAlert()

//Problem 3:

var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  lastName: function(){
  	var words = this.name.split(" ");
  	console.log(words[words.length-1])
  }
}

employee.lastName()



