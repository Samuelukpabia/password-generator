const generate = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container")

generate.addEventListener("click", ()=>{
    generatePassword()
});

copyIconEl.addEventListener("click", ()=>{
    copyPassword()
    if(inputEl.value){
        alertContainerEl.classList.remove("active");
        setTimeout(()=>{
            alertContainerEl.classList.add("active");
        }, 2000);
    }
    
});

function generatePassword(){
    const chas = "1234567890qwertyuiopasdfghjklzxcvbnm!@#$%^&*()=][{};:?";
    const passwordLength = 14;
    let password = ""
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chas.length);      
        password += chas.substring(randomNum, randomNum + 1);  
    }
    inputEl.value = password;
    alertContainerEl.innerText = password + " copied!"

}

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);

}