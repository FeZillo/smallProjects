function toggleMode(load){
    if (!load){
        if(localStorage.getItem("darkMode")){
            localStorage.setItem("darkMode", false);
        }else{
            localStorage.setItem("darkMode", true);
        }
    };

    // Para o body
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Para os cards:
    const cards = document.querySelectorAll(".card");
    for(let card of cards){
        card.classList.toggle("dark-mode");
    }

    // Para os botões:
    const buttons = document.querySelectorAll(".btn");
    for(let btn of buttons){
        btn.classList.toggle("btn-dark");
        btn.classList.toggle("btn-success");
    }
}

function checkMode(){
    if(localStorage.getItem("darkMode")){
        toggleMode(true);
        document.getElementById("darkModeCheckbox").checked = true;
    }else{
        document.getElementById("darkModeCheckbox").checked = false;
    }
}

document.addEventListener("DOMContentLoaded", checkMode);