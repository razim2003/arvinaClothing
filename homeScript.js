let userName = document.getElementById("userName").value;
let password = document.getElementById("passWord").value;


if(userName == 'admin' && password =='admin'){

}

function displayLogin(){
    let fullWeb = document.getElementById("full");
    let navv = document.getElementById("navi");
    let loginpage = document.querySelector(".backg");
    fullWeb.style.display = "none";
    navv.style.display = "none";
    loginpage.style.display= "block";
    console.log(userName);
}

function displayHome(){
    let fullWeb = document.getElementById("full");
    let navv = document.getElementById("navi");
    let loginpage = document.querySelector(".backg");
    fullWeb.style.display = "block";
    navv.style.display = "block";
    loginpage.style.display= "none";

}

