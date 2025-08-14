let age = 19;
console.log("Lets check your Voting Eligibility");

if (age > 18) {
  console.log("You can Vote");
} else {
  console.log("you Cannot Vote");
}

console.log("Thank you");

console.log("Who will win");

let a = 15;
let b = 12;
let c = 17;

if (a > b) {
  if (a > c) {
    console.log("A wins");
  } else {
    console.log("C wins");
  }
} else {
  if (b > c) {
    console.log("B wins");
  } else {
    console.log("C wins");
  }
}

let grade = "A";

switch (grade) {
  case "A": {
    console.log("You received Grade A");
    break;
  }
  case "B": {
    console.log("You received Grade B");
    break;
  }
  case "C": {
    console.log("You received Grade C");
    break;
  }
  default: {
    console.log("You received other grade");
  }
}



let marks = 85.37;



switch(true){
    case (marks<=100 && marks >=80):{
        console.log(("You have received Grade A"));
        break;
    }
    case (marks<80 && marks >=60):{
        console.log(("You have received Grade B"));
        break;
    }
    case (marks<60 && marks >=40):{
        console.log(("You have received Grade C"));
        break;
    }
    case (marks<40 && marks >=30):{
        console.log(("You have received Grade D"));
        break;
    }
    case (marks<30 && marks >=0):{
        console.log(("You have received Grade E"));
        break;
    }
    default:{
        console.log(("You have received invalid Marks"));
        
    }
}