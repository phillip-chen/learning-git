/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/


let date = new Date();

// more code needed here
let ampm = 'AM';

// Assign variable 'ampm' the value 'PM' if the returned hour is > 12 (meaning afternoon time), and 'AM' if it is < 12 (meaning morning time)
date.getHours()/12>0?ampm ='PM':ampm = 'AM';

// Define a constant array (weekday sequence stays the same and would not be altered), the sequence logic is 
// based on the new Date().getDay() sequence logic, where it returns a sequential numbers from 0 - 6 and Sunday is the first day.
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Access the weekday via the current .getDay() method
let currentWeekday = weekday[date.getDay()];

let dateFormated = String(date.getHours()%12) + ":" + String(date.getMinutes()) + ":" + String(date.getSeconds()) + " " + ampm;

// Using template literal to inject varibales in the string (best practice is to have a html tags wrap the text in innerHTML)
document.getElementById("answer1").innerHTML = 
    `<p>Today is ${currentWeekday}.</p>
     <p>Current Time : ${dateFormated}</p>
    `;

//adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat



/* 2.--------
*/


let year = date.getFullYear();
let month = date.getMonth()+1;
let day = date.getDate();


document.getElementById("answer2").innerHTML = 
    `<p>${month}-${day}-${year}</p>
     <p>${month}/${day}/${year}</p>
     <p>${day}/${month}/${year}</p>`;

// adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date


/* 3.--------
*/

// Unlike using innerHTML like what I did above, using innerText will only print our the text instead of rendering the full html tags
// Thus, we use innerText to print out the whole html tags.
let myFunction = () => {
    document.getElementById("answer3").innerText = String(document.documentElement.innerHTML);
}




//adapt from https://stackoverflow.com/questions/817218/how-to-get-the-entire-document-html-as-a-string#answer-35917295



/* 4.--------
*/

// Based on the textbook tutorial:
paper.install(window);
// Get a reference to the canvas object
let canvas = document.getElementById('main-canvas');
// Create an empty project and a view for the canvas:
paper.setup(canvas);
paper.view.draw();

//  Define the circle
let circle = Shape.Circle(200, 200, 80);
circle.fillColor = 'black';

//  Define the "hello world" text inside the circle
let text = new PointText(200,210);
text.justification = 'center';
text.fillColor = 'white';
text.fontSize = 25;
text.content = 'hello world';






// adapt from Learning Javascript Ethan Brown Chapter 1
