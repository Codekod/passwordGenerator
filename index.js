const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

let passwordLength = 12
let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")

function getRandomCharacters() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword =""
    for (let i=0; i < passwordLength; i++) {
        randomPassword += getRandomCharacters()
    }
    return randomPassword
}
function buttonAs() {

    password1.innerText=generateRandomPassword()
    password2.innerText=generateRandomPassword()
}



