const btnDarkMod = document.querySelector(".dark-mode-btn");


//Проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
    btnDarkMod.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

// Проверка темной темы в localStorage
if(localStorage.getItem('darkMode') === "dark"){
    btnDarkMod.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");    
}else if(localStorage.getItem('darkMode') === "light"){
    btnDarkMod.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}

//Если меняются системные настройки,меняем тему
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) =>{
    const newColorScheme = event.matches ? "dark" : 'light';
    if(newColorScheme === "dark"){
        btnDarkMod.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");
        localStorage.setItem('darkMode', 'dark');
}else{
        btnDarkMod.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("dark");
        localStorage.setItem('darkMode','light');

    }
})

btnDarkMod.onclick = function(){
    btnDarkMod.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");
    if(isDark ){
        localStorage.setItem('darkMode', 'dark');
    }else{
        localStorage.setItem('darkMode','light');
    }
}

