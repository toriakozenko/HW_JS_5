
// task "Confirms"
  // const arr = [];
  // const question = confirm("Do you like summer?");
  // arr.push(question);
  // console.log('arr>>>', arr);  


// task === "Prompts"
  // const arr = [];
  // const questionName = prompt("What is your name?");
  // const questionAge = prompt("How old are you?");
  // const questionProf = prompt("What's your professional?");
  // arr[0] = questionName;
  // arr[1] = questionAge;
  // arr[2] = questionProf;
  // console.log('arr>>>', arr);  


// task "Item access"
  // const arr = [10, 15, 25, 35, 45];
  // const index = prompt("Enter index:");
  // if (index === "length") {
  //   alert(`Array length: ${arr.length}`);
  // } else if (index >= 0 && index < arr.length) {
  //   alert(`Element value by index ${index}: ${arr[index]}`);
  // } else {
  //   alert("Wrong index!");
  // }


// task "Item change"
  // const arr = [];
  // const index = prompt("Enter index:");
  // const value = prompt("Enter value:");
  // arr[index] = value;
  // console.log('arr>>>', arr);

// task "Multiply table"
// const arr = [
//   [0, 0, 0, 0, 0],
//   [0, 1, 2, 3, 4],
//   [0, 2, 4, 6, 8],
//   [0, 3, 6, 9, 12],
//   [0, 4, 8, 12, 16]
// ];
// console.log('arr>>>', arr);

// task "Multiply table slice"
// const size = 10; 
// const table = [];
// for (let i = 1; i <= size; i++) {
//   const row = [];
//   for (let j = 1; j <= size; j++) {
//     row.push(i * j);
//   }
//   table.push(row);
// }
// const nonZeroTable = table.map(row => row.slice(1)); 
// console.log('nonZeroTable>>>', nonZeroTable);

// task "IndexOf Word"
  // const userText = prompt("Enter some text:");
  // const requiredWord = prompt("Enter the required word:");
  // if (userText.includes(requiredWord)) {
  //   alert(userText.indexOf(requiredWord))
  // } else {
  //   alert("You enter wrong word!")
  // }

// task "Reverse" 
// const arr1 = [];
// for (let i = 0; i < 5; i++) {
//   const userInput = prompt('Enter value for array:');
//   arr1.push(userInput);
// } 
// alert(arr1);

// task "Reverse 2"
// const arrReverse = [];
// while (arr1.length) {
//   arrReverse.push(arr1.pop())
// } 
// alert(arrReverse);

// const arrShift = [];
// while (arrReverse.length) {
//   arrShift.unshift(arrReverse.shift())
// }
// alert(arrShift);

// task "Copy"
  // const copy = arr.slice();
  // console.log('copy>>>', copy);


// task "Deep Copy"
  // const deepCopy = JSON.parse(JSON.stringify(arr));
  // console.log(deepCopy);


// task "Array Equals"
  // const arr1 = [1,2,3,4,5];
  // const arr2 = arr1;
  // console.log(arr1 === arr2);

// task "Flat"
  // const arrFlat = [...arr[0], ...arr[1], ...arr[2], ...arr[3], ...arr[4]];
  // console.log('arrFlat>>>', arrFlat);


// task "Destruct"
  // const userText = prompt("Enter some text:");
  // const [firstLetter, , , , fifthLetter, , , , ninthLetter] = userText;
  // console.log(`The first, fifth and ninth letters of the line "${userText}" it "${firstLetter}", "${fifthLetter}" та "${ninthLetter}"`);


// task "Destruct default"
  // const userText = prompt("Enter some text:");
  // const [, secondLetter="!", , fourthLetter="!", fifthLetter="!"] = userText;
  // console.log(`The second, fourth and fifth letters of the line "${userText}" it "${secondLetter}", "${fourthLetter}" та "${fifthLetter}"`);


// task "Multiply table rest"
  // const [[a, b, ...c], [d, e, ...f], [g, h, ...i], [j, k, ...l]] = nonZeroTable;
  // const flattenedArray = [a, b, ...c, d, e, ...f, g, h, ...i, j, k, ...l].filter(item => item !== undefined);
  // console.log('flattenedArray>>>', flattenedArray);


// task "For Alert"
  // const names = ["John", "Paul", "George", "Ringo"]
  // for (const name of names) {
  //   alert(`Hello, ${name}`)
  // }


// task "For Select Option"
// const currencies = ["USD", "EUR", "GBP", "UAH"]
// let str = "<select>"
// for (const currency of currencies){
//   str+= `<option value="${currency}">${currency}</option>`;
// }
// str+= "</select>";
// document.write(str);


// task "For Table Horizontal"
// const names = ["John", "Paul", "George", "Ringo"]
// let str2 = "<table>"
// for (const name of names){
//   str2+= `<td> ${name} </td>`
// }
// str2+= "</table>";
// document.write(str2);


//task "For Table Vertical"
// const names = ["John", "Paul", "George", "Ringo"]
// let str3 = "<table>"
// for (const name of names){
//   str3 += "<tr><td>" + name + "</td></tr>";
// }
// str3+= "</table>";
// document.write(str3);


// task  "For Table Letters" 
// const currencies = ["USD", "EUR", "GBP", "UAH"];
// let str = "<table>";
// for (const currency of currencies) {
//   str += "<tr>";
//   for (const letter of currency) {
//     str += "<td>" + letter + "</td>";
//   }
//   str += "</tr>";
// }
// str += "</table>";
// document.write(str);

// task "For Multiply Table"
// document.write("<table>");
// for (let i = 1; i <= 5; i++) {
//   document.write("<tr>");

//   for (let j = 1; j <= 5; j++) {
//     let product = i * j;
//     let color = (i % 2 === 0) ? "#f2f2f2" : "#fff";

//     document.write(`<td style='background-color: ${color}'>${product}</td>`);
//   }

//   document.write("</tr>");
// }
// document.write("</table>");



// task "Function Capitalize"
// const capitalize = str => {
//   let result = str[0].toUpperCase() + str.slice(1).toLowerCase();
//   return result;
// }
// console.log(capitalize("cANBerRa"));



// task "Map Capitalize" 
  // const question = prompt("Enter some text:");
  // const split = question.split(" ");
  // console.log(split);
  // const capitalize = split.map(item=> item.toUpperCase()).join(" ");
  // console.log('capitalize>>>', capitalize);



// task  "Filter Lexics"
  // const question = prompt("Enter some text:");
  // const split = question.split(" ");
  // const forbiddenWord = ['fool', 'bad', 'stupid'];
  // const filteredArray = split.filter(item => !forbiddenWord.includes(item)).join(' ');
  // console.log('filteredArray>>>', filteredArray);


// task "Beep Lexics"
  // const question = prompt("Enter some text:");
  // const split = question.split(" ");
  // const forbiddenWord = ['fool', 'bad', 'stupid'];
  // const filteredArray = split.map(item => !forbiddenWord.includes(item) ? item : 'BEEP').join(' ');
  // console.log('filteredArray>>>', filteredArray);


// task  "Reduce HTML"
  // const currencies = ["USD", "EUR", "GBP", "UAH"]
  // let str = "<select>"
  // str += currencies.reduce( (a,b) => `<option>${b + a}</option>`, '')
  // str += "</select>";
  // document.write(str);


// task "For Brackets Hell Check"
  // const line = prompt("Enter some text and using brackets:");
  // const bracketsStack = [];
  // let i = 0;
  // for (const character of line){
  //   if (character === "[" || character === "{" || character === "(") {
  //       bracketsStack.push(character)
  //   } 
  //   else if (character === "]" || character === "}" || character === ")") {
  //       const lastOpeningBracket = bracketsStack.pop();
  //       if (lastOpeningBracket === "[" && character !== "]"
  //           || lastOpeningBracket === "{" && character !== "}"
  //           || lastOpeningBracket === "(" && character !== ")") {
  //           break
  //       }
  //   }
  //   i++
  // }
  // console.log("bracketsStack", bracketsStack);
  // if (bracketsStack.length === 0) {
  //     alert("The string of brackets is correct!")
  // } else {
  //     alert(`Position error ${i}`);
  // }
