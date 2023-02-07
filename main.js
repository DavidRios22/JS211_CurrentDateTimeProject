// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const numToString = () => {

  let num = document.getElementById("num-to-str").value;
  let text = num.toString();
  document.getElementById("number").innerHTML = text;

  console.log(`This is a ${typeof text}`)

}


// Write a JavaScript program to convert a string to the number.
const strToNumber = () => {

  let str = document.getElementById("str-to-num").value;
  let num = Number(str)
  document.getElementById("results").innerHTML = str;

  console.log(`This is a ${typeof num}`)
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
  let a = true
  let b = null
  let c;
  let d = 12
  let e = NaN
  let f = "Hi"

  let i = 0;

  const values = [a, b, c, d, e, f]

  const indentifier = () => {
    while (i < values.length) {
      console.log((`This is a ${typeof values[i]}`))
      i++
    } 
  }

  
// Write a JavaScript program that adds 2 numbers together.
const addTwoNumbers = () => {
  firstNumberString = document.getElementById("first-number").value
  firstNumber = Number(firstNumberString)
  secondNumberString = document.getElementById("second-number").value
  secondNumber = Number(secondNumberString)
  document.getElementById("sum").innerHTML = firstNumber + secondNumber
}


// Write a JavaScript program that runs only when 2 things are true.



// Write a JavaScript program that runs when 1 of 2 things are true.



// Write a JavaScript program that runs when both things are not true.  

const trueOrFalse = () => {
  if(document.getElementById("true-one").checked == true) {
    if(document.getElementById("true-two").checked == true) {
      document.getElementById("true-or-false").innerHTML = "Both are true"
    } else {
      document.getElementById("true-or-false").innerHTML = "One is true"
    }
  } else {
    if(document.getElementById("true-two").checked == true) {
      document.getElementById("true-or-false").innerHTML = "One is true"
    } else {
      document.getElementById("true-or-false").innerHTML = "Both are false"
    }
  }
    
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
