//Problem 1: Sleeping IN

function sleepIn(weekday,vacation){
    return (!weekday || vacation)
}

console.log(sleepIn(false, false)) // true
console.log(sleepIn(true, false)) // false
console.log(sleepIn(false, true)) // true

// Problem 2: Monkey Trouble

function monkeyTrouble(aSmile,bSmile){
    return ((aSmile && bSmile) || (!aSmile && !bSmile))

}
console.log(monkeyTrouble(false, false)) // true
console.log(monkeyTrouble(true, true)) // true
console.log(monkeyTrouble(false, true)) // true

//Problem 3: String Times

function stringTimes(str, n) {
    return str.repeat(n)
}

console.log(stringTimes("Hi", 2)) // "HiHi"
console.log(stringTimes("Hi", 3)) // "HiHiHi"
console.log(stringTimes("Hi", 1)) // "Hi

//Problem 4: Lucky Sum

function luckySum(a, b, c) {
    if (a == 13) {
        return 0;
    }
    var sum = a;
    if (b == 13) {
        return sum;
    }
    sum += b;
    if (c == 13) {
        return sum;
    }
    sum += c;
    return sum;
}

console.log(luckySum(1, 2, 3)) // 6
console.log(luckySum(1, 2, 13)) // 3
console.log(luckySum(1, 13, 3)) // 1

// Problem 5: Speeding

function caught_speeding(speed, is_birthday){
  if (is_birthday)
    speed -= 5;
  if (speed <= 60){
    return 0;
  } else if ((60 < speed) && (speed <= 80)){
    return 1;
  } else if (81 <= speed){
    return 2;
  }
}

console.log(caught_speeding(60, false)) // 0
console.log(caught_speeding(65, false)) // 1
console.log(caught_speeding(65, true)) // 0
console.log(caught_speeding(86, true)) // 2

// problem 6: Making Bricks

function makeBricks(small, big, goal){
  return ((5*big+small) >= goal) && ((goal % 5*big) <= small)
}

console.log(makeBricks(3, 1, 8)) // true
console.log(makeBricks(3, 1, 9)) // false
console.log(makeBricks(3, 2, 10)) // true
