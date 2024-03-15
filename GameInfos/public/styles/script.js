function toggleMode(){
   
    // Para o body
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Para os cards:
    const cards = document.querySelectorAll(".card");
    for(let card of cards){
        card.classList.toggle("dark-mode");
    }

    // Para os botões:
    const buttons = document.querySelectorAll(".botao");
    for(let btn of buttons){
        btn.classList.toggle("btn-dark");
        btn.classList.toggle("btn-success");
    }

    return body.classList;
}

document.addEventListener("DOMContentLoaded", checkmode);

function checkmode(){
    if(localStorage.getItem("isDarkMode")){
        const isDarkMode = JSON.parse(localStorage.getItem("isDarkMode"));
        if(isDarkMode){
            toggleMode();
            const checkbox = document.getElementById("darkModeCheckbox");
            checkbox.checked = "true";
        }
    }
}

function changeTheme(){
    const list = toggleMode();
    if(list.contains("dark-mode")){
        localStorage.setItem("isDarkMode", true);
    }else{
        localStorage.setItem("isDarkMode", false);
    }
}
