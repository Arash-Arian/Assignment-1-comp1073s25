// we select story buttons by their IDs
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');

// we select reset and random buttons by their IDs
const resetBtn = document.getElementById('resetBtn');
const randomBtn = document.getElementById('randomBtn');

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

//added spans to display the selected story parts in them
const span1 = document.getElementById('span1');
const span2 = document.getElementById('span2');
const span3 = document.getElementById('span3');
const span4 = document.getElementById('span4');
const span5 = document.getElementById('span5');


// we select the placeholder where the story will be displayed
const placeholder = document.getElementById('storyPlaceHolder');



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
//we add event listeners to each button to empty the placeholder and display the next part of the story by updating the respective span element and the counter
btn1.addEventListener('click', () => {
    placeholder.textContent = ""
    span1.textContent = story1[counter1];
    counter1++
    if (counter1 >= story1.length) {
        counter1 = 0;
    }
})
btn2.addEventListener('click', () => {
    placeholder.textContent = ""
    span2.textContent = story2[counter2];
    counter2++
    if (counter2 >= story2.length) {
        counter2 = 0;
    }
})
btn3.addEventListener('click', () => {
    placeholder.textContent = ""
    span3.textContent = story3[counter3];
    counter3++
    if (counter3 >= story3.length) {
        counter3 = 0;
    }
})
btn4.addEventListener('click', () => {
    placeholder.textContent = ""
    span4.textContent = story4[counter4];
    counter4++
    if (counter4 >= story4.length) {
        counter4 = 0;
    }
})
btn5.addEventListener('click', () => {
    placeholder.textContent = ""
    span5.textContent = story5[counter5];
    counter5++
    if (counter5 >= story5.length) {
        counter5 = 0;
    }
})

// we add event listeners to the reset and random buttons
resetBtn.addEventListener('click', () => {
    span1.textContent = "";
    span2.textContent = "";
    span3.textContent = "";
    span4.textContent = "";
    span5.textContent = "";
    placeholder.textContent = "Click the buttons to create your story!";
})
// for random button, we generate random indices for each story part and update the spans with the randomly selected parts using Math.random() and Math.floor() within the range of the story arrays' lengths
randomBtn.addEventListener('click', () => {
    placeholder.textContent = "";
    let random1 = Math.floor(Math.random() * story1.length);
    let random2 = Math.floor(Math.random() * story2.length);
    let random3 = Math.floor(Math.random() * story3.length);
    let random4 = Math.floor(Math.random() * story4.length);
    let random5 = Math.floor(Math.random() * story5.length);

    span1.textContent = story1[random1];
    span2.textContent = story2[random2];
    span3.textContent = story3[random3];
    span4.textContent = story4[random4];
    span5.textContent = story5[random5];
});
