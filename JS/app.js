//! DOM SELECTION SECTION

//? Four main types of selection elements from the HTML

//* !. getElementById
//? Grabs a single node based on the ID name;

let listItemThree = document.getElementById("thirdListItem")

console.log(listItemThree);

//* 2. getElementsByClassName
//? Makes as array of elements with the same className

let headerColumns = document.getElementsByClassName("col-6")
console.log(headerColumns);
console.log(headerColumns[1]);


//* 3. querySelector/querySelectorAll
//? Both of these dom selections do the same as above but uses CSS styling selection.

let listItemOne = document.querySelector(".aboutMe li:first-child");

console.log(listItemOne);

let allListItems = document.querySelectorAll(".aboutMe li")
console.log(allListItems);

//! DOM Styling and Changin text

let description = document.querySelector(".textSide p:first-child");

//* .innerHTML is a DOM method to change text.
description.innerHTML = "Bob Ross was a calm and amazing painter, that tragically died to smoking."

//* .style gives you the option of changing the elements css properties from Javascipt
//! https://www.w3schools.com/cssref/index.php
//? Reference to each Javascript styling syntax

description.style.fontSize = "25px"

//! Adding properties Values to an array of nodes;

//? Makes sure when you're calling a method for DOM element to ONLY affect one item at a time.

let allPTags = document.querySelectorAll(".textSide p")
console.log(allPTags);

//? TARGET AN INDEX of that array list of nodes to change properties
allPTags[0].style.fontSize = "60px"

function changeParagraphColor() {
    for(let i = 0; i < allPTags.length; i++) {
        const element = allPTags[i];

        allPTags[i].style.color = "tomato"
    }
}

changeParagraphColor();

//! DOM EventListeners
//? EventListeners are waiting for a type of event to fire off ("Click, Hover, keydown etc.") and if the event is cliced a function will run.

let imageElement = document.querySelector(".imageSide img");
let pFirstColumns = document.querySelectorAll(".firstCol p");
console.log(imageElement);
console.log(pFirstColumns);

imageElement.addEventListener("click", reColorParagraphs)

function reColorParagraphs() {
    for(let i = 0; i < pFirstColumns.length; i++) {
        const element = pFirstColumns[i];

        pFirstColumns[i].style.color = "yellow"

    };
}

//* Getting text from a input ox

let firstName = document.getElementById("fName");
let signUpButton = document.getElementById("completeSignUp")
let fNameInfo = "";
//* To get text from a input box use ".value"
// console.log(firstName.value);

//? This event listener is consistenly watching input changes
// firstName.addEventListener("input", () => {
//     fNameInfo = firstName.value
//     console.log(fNameInfo)
// })

//? This eventListener will run if a Button is pressed.

signUpButton.addEventListener("click", () => {
    if (!firstName.value == false) { //* Error checker for empty strings and #s
        confirm(" Can't submit an empty value")
    } else {
        fNameInfo = firstName.value;
        console.log(fNameInfo);
    }
    
})