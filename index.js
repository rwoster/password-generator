const charArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "!",
    "@",
    "#",
    "$",
    "&",
    "*",
    "?",
];

let generatedPassword = document.getElementsByClassName(
    "generated-password"
);
const genPassBtn = document.getElementById("generatePasswordBtn");
let passwordLength = document.getElementById("password-length");
let passwordValue = document.getElementById("password-value");
let length = 0;

passwordLength.addEventListener("mousemove", () => {
    length = passwordLength.value;
    passwordValue.textContent = length;
});

function getPassword(len) {
    let password = "";
    for (let i = 0; i < len; i++) {
        let randomNumber = Math.floor(
            Math.random() * charArray.length
        );
        password += charArray[randomNumber];
    }
    return password;
}

genPassBtn.addEventListener("click", () => {
    if (length != 0) {
        for (let i = 0; i < generatedPassword.length; i++) {
            generatedPassword[i].style.backgroundImage = "none";
            generatedPassword[i].textContent = getPassword(length);
        }
    }
});

// LIGHT/DARK MODES
let mainEl = document.getElementById("main");
let mode = document.getElementById("mode");

mode.addEventListener("click", () => {
    if (mode.checked) {
        mainEl.classList.remove("main-light");
        mainEl.classList.add("main-dark");
    } else {
        mainEl.classList.remove("main-dark");
        mainEl.classList.add("main-light");
    }
});
