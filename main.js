
let result = document.getElementById("result");

function checkPalindrome() {
    let text = document.getElementById("text").value;
    let str = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let revstr = str.split("").reverse().join("");
    result.innerHTML = `${text} : is ${(str===revstr)? "" : "not"} a palindrome`;
}

function clearText() {
    document.getElementById("text").value = "";
    result.innerHTML = "";
}