localStorage.setItem("isAuthenticated",false);

// localStorage.setItem("mykey",true);
// const key = localStorage.getItem("mykey");
// console.log(key);

// localStorage.removeItem("mykey");
// localStorage.clear();



const container = document.getElementById("container");
const menu = document.getElementById("menu");

function onLogin(){
    localStorage.setItem("isAuthenticated",true);
    container.classList.remove("d-none");
    menu.classList.add("d-none");
}

function onLogout(){
    localStorage.setItem("isAuthenticated",false);
    container.classList.add("d-none");
    menu.classList.remove("d-none");
}