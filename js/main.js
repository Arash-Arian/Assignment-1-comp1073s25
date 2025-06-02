// we get buttons by their IDs
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');

// using querySelector to select the story columns
const storyCol1= document.querySelector('div.col1 > ul');
const storyCol2= document.querySelector('div.col2 > ul');
const storyCol3= document.querySelector('div.col3 > ul');
const storyCol4= document.querySelector('div.col4 > ul');
const storyCol5= document.querySelector('div.col5 > ul');

// we create arrays of story parts to put in the columns
const story1 = ["The Turkey","The Wolf","The Dog","The Cat","The Mouse"];
const story2 = ["sat on","ate","slept on","played with","chased"];
const story3 = ["a funny","a scary","a silly","a happy","a sad"];
const story4 = ["goat","sheep","cow","pig","chicken"];
const story5 = ["in the barn","on the farm","in the field","by the river","in the forest"];

// we create counters for each story part to keep track of which part to display next
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;


const storyOutputText = document.getElementById('storyOutputText');

// go through each story array and add the items to the respective columns
story1.forEach(item => {
    storyCol1.innerHTML += `<li>${item}</li>`;
});
story2.forEach(item => {
    storyCol2.innerHTML += `<li>${item}</li>`;
});
story3.forEach(item => {
    storyCol3.innerHTML += `<li>${item}</li>`;
});
story4.forEach(item => {
    storyCol4.innerHTML += `<li>${item}</li>`;
});
story5.forEach(item => {
    storyCol5.innerHTML += `<li>${item}</li>`;
});


//using arrow function syntax instead of traditional function syntax
//we add event listeners to each button
// btn1.addEventListener('click', () => {
//     storyOutputText.textContent= '';
//     storyOutputText.innerHTML += `<span id="span1">${story1[counter1]} </span>`;
//     counter1++
//     if (counter1 >= story1.length) {
//         counter1 = 0;
//     }
// })