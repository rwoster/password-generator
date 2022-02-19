let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let password3 = document.getElementById("password3");
let password4 = document.getElementById("password4");
const genPassBtn = document.getElementById("generatePasswordBtn");

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
    password1.textContent = getPassword(length);
    password2.textContent = getPassword(length);
    password3.textContent = getPassword(length);
    password4.textContent = getPassword(length);
});

// TEST
