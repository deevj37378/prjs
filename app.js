//Question 1
//a tip calculator:- how does it work?
//give 3 options, 10%, 15% and 20% tip, on clicking any of the three buttons, the amount of the bill will be multiplied by the tip percentage, there should be an input placeholder where we enter the bill amount. andd then it shows the revised bill amount which is bill plus tip.
const tip = document.querySelector(".tip");
const bill = document.querySelector("#bill-input");
const btn1 = document.querySelector("#tip1");
const btn2 = document.querySelector("#tip2");
const btn3 = document.querySelector("#tip3");
const para = document.querySelector("#show");




btn1.addEventListener("click", () => {
    let billAmt = parseFloat(document.getElementById("bill-input").value)
    let tipAmt = billAmt * 10/100;
    let totalBill = billAmt + tipAmt;
    document.getElementById("show").innerText = "Total Bill: " + totalBill;
})

btn2.addEventListener("click", () => {
    let billAmt = parseFloat(document.getElementById("bill-input").value)
    let tipAmt = billAmt * 15/100;
    let totalBill = billAmt + tipAmt;
    document.getElementById("show").innerText = "Total Bill: " + totalBill;
})

btn3.addEventListener("click", () => {
    let billAmt = parseFloat(document.getElementById("bill-input").value)
    let tipAmt = billAmt * 20/100;
    let totalBill = billAmt + tipAmt;
    document.getElementById("show").innerText = "Total Bill: " + totalBill;
})

//the problems i faced while solving this were, forgot the html syntax for input, didnt know how to get the value from the input and convert it to a number, knew the math but had a problem showing the total bill amount, didnt know that parsefloat thing should be inside the event listener.

//Question 2
//a password generator:- on clicking the button, a password should generate, the string should contain 8 to 15 characters, it should contain special characters, numbers and alphabets in both small and large caps 

const pass = document.querySelector(".pass-gen");
const showPass = document.querySelector("#genpass");
const parag = document.querySelector("#show-pass");

let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"

showPass.addEventListener("click", () => {
    let length = Math.floor(Math.random() * 8) + 8
    let password = ""
    
    for(let i = 0; i < length; i++){
        password = password + chars[Math.floor(Math.random() * chars.length)]
    }

    document.getElementById("show-pass").innerText = password;
})

//Question 3
const quiz = document.querySelector("#quiz");
const showBtn = document.querySelector("#show-q"); //show question btn
const paragraph = document.querySelector("#q"); //qna para
const nextBtn = document.querySelector("#next-q"); //next q button
const score = document.querySelector("#score"); //score para
const options = document.querySelector("#options-container");


const array = [
  {
    question: "Who originally coined the term 'flow state'?",
    options: ["Abraham Maslow", "Martin Seligman", "Mihaly Csikszentmihalyi", "Carl Jung"],
    answer: "Mihaly Csikszentmihalyi"
  },
  {
    question: "Which condition is essential for entering a flow state?",
    options: ["Working in complete silence", "Challenge and skill level being roughly balanced", "Having a financial reward", "The task being very easy"],
    answer: "Challenge and skill level being roughly balanced"
  },
  {
    question: "Which of these is NOT a characteristic of flow?",
    options: ["Loss of self-consciousness", "Distorted sense of time", "Heightened awareness of surroundings", "Deep intrinsic motivation"],
    answer: "Heightened awareness of surroundings"
  },
  {
    question: "What neurological phenomenon occurs in the brain during flow?",
    options: ["The amygdala becomes hyperactive", "Total shutdown of brain activity", "The hippocampus doubles in size temporarily", "Transient hypofrontality — the prefrontal cortex quiets down"],
    answer: "Transient hypofrontality — the prefrontal cortex quiets down"
  },
  {
    question: "Which neurochemicals are released during a flow state?",
    options: ["Cortisol and adrenaline", "Serotonin and melatonin", "Dopamine, norepinephrine, anandamide, and endorphins", "Oxytocin and histamine"],
    answer: "Dopamine, norepinephrine, anandamide, and endorphins"
  }
];

let currentIndex = 0;
let cnt = 0;
showBtn.addEventListener("click", () => {
    document.getElementById("q").innerText = array[currentIndex].question
    array[currentIndex].options.forEach((option) => {
    let btn = document.createElement("button");
    btn.innerText = option;
    document.getElementById("options-container").appendChild(btn);
    btn.addEventListener("click", () => {
        let ans = btn.innerText
        if(ans === array[currentIndex].answer){
            let par = document.getElementById("score");
            cnt++;
            par.innerText = `Your score is ${cnt}`;
            
        } else{
            let parag = document.createElement("p");
            parag.innerText = `Wrong option, choose again`;
            document.getElementById("quiz").appendChild(parag);
        }
        let allButtons = document.querySelectorAll("#options-container button")
allButtons.forEach((button) => {
    button.disabled = true
})
    })
})
})


nextBtn.addEventListener("click", () => {
    currentIndex++;
    document.getElementById("options-container").innerHTML = "";
    
    document.getElementById("q").innerText = array[currentIndex].question
    array[currentIndex].options.forEach((option) => {
    let btn = document.createElement("button");
    btn.innerText = option;
    document.getElementById("options-container").appendChild(btn);
    btn.addEventListener("click", () => {
        let ans = btn.innerText
        if(ans === array[currentIndex].answer){
            let par = document.getElementById("score");
            cnt++;
            par.innerText = `Your score is ${cnt}`;
            
        } else{
            let parag = document.createElement("p");
            parag.innerText = `Wrong option, choose again`;
            document.getElementById("quiz").appendChild(parag);
        }
        let allButtons = document.querySelectorAll("#options-container button")
allButtons.forEach((button) => {
    button.disabled = true
})
    })
})
})

//question 4
//a to-do list with add and delete. 
const to_do = document.querySelector("#to-do");
const add = document.querySelector("#addi");

const list = document.querySelector("#list");
const itemInput = document.querySelector("#addItem");


add.addEventListener("click", () => {
    let listItem = document.createElement("li");
    let itemName = itemInput.value;
    listItem.innerText = itemName;
    list.appendChild(listItem);
    if(itemInput.value === ""){
        return
    }
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete item";
    to_do.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", () => {
        listItem.remove();
    })
    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);
    itemInput.value = "";
})

//questuon 5

const timer = document.querySelector("#timer");
const counter = document.querySelector("#time");

let days = 35
let hours = 24
let minutes = 60
let seconds = 60

counter.addEventListener("click", () => {
    let date = document.createElement("p");
  
let interval = setInterval(() => {
  document.getElementById("days").innerText = days + " days"
document.getElementById("hours").innerText = hours + " hours"
document.getElementById("minutes").innerText = minutes + " minutes"
document.getElementById("seconds").innerText = seconds + " seconds"
seconds--;
if(seconds === 0){
    seconds = 59;
    minutes--;
} if(minutes === 0){
    minutes = 59;
    hours--;
}if(hours === 0){
    hours = 23;
    days--;
}
}, 1000)
})

//question 6
const bmi = document.querySelector("#bmi");
const weight = document.querySelector("#weightInput");
const height = document.querySelector("#heightInput");
const bmi_result = document.querySelector("#bmi-result");
const gen_bmi = document.querySelector("#gen-bmi");

gen_bmi.addEventListener("click", () => {
    let wt = document.getElementById("weightInput").value;
    let ht = document.getElementById("heightInput").value;
    let paragr = document.getElementById("bmi-result");
    paragr.innerText = `Your BMI is ${wt / ht ** 2}`;
    
})

//api
//fetch = function used for making http requests to fetch resources such as JSON style data, image, videos. fetch has two arguements, fetch(url, {options})

//using promises

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(console.error(error));

//using async await function

fetchData();

async function fetchData() {
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(!response.ok){
            throw new Error("Could not fetch resource")
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block"
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}

const jokes = document.querySelector("#jokes");
const jokeBtn = document.querySelector("#get-joke");
const jokePara = document.querySelector("#joke");

jokeBtn.addEventListener("click", async() => {
    let response = await fetch("https://official-joke-api.appspot.com/random_joke");
    let data = await response.json();
    document.getElementById("joke").innerText = data.setup + " " + data.punchline;
})


//last 10 questions
//question1

const balance = document.querySelector("#balance");
const itemName = document.querySelector("#itemName");
const itemPrice = document.querySelector("#itemPrice");
const bal = document.querySelector("#bal"); //balance button

let runningTotal = 0;

bal.addEventListener("click", () => {
    let name = document.getElementById("itemName").value;
    let itemList = document.createElement("p");
    itemList.innerText = name;
    balance.appendChild(itemList);
    let price = parseFloat(document.getElementById("itemPrice").value);
    let itemPriceList = document.createElement("p");
    itemPriceList.innerText = price;
    balance.appendChild(itemPriceList);
    let totalBalance = document.createElement("p");
    totalBalance.innerText = `The balance is ${runningTotal += price}`;
    balance.appendChild(totalBalance);
itemName.value = "";
    itemPrice.value = "";
    let deleteBtnn = document.createElement("button");
    deleteBtnn.innerText = "Delete item";
    deleteBtnn.addEventListener("click", () => {
        itemList.remove();
        itemPriceList.remove();
        totalBalance.innerText = `The new balance is ${runningTotal -= price}`;
        deleteBtnn.classList.add("hide");
        deleteBtnn.disabled = true;
    })
    balance.appendChild(deleteBtnn);
})


