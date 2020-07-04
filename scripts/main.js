import { data } from './script2.js';



document.getElementById("login").addEventListener('click', ()=>{

    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for(let i = 0; i < data.length; i++) {
        if(username == data[i].name && password == data[i].password ){
            console.log(username + ' is logged in!!!')
            return //return will completely stop the function if username and password is true.
        }
    }
    console.log('incorrect username or password');
});


document.getElementById('register').addEventListener('click', ()=>{

    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    for(let i = 0; i < data.length; i++){
        if(username == data[i].name){
            console.log("username: " + username + " is already in use");
            return
        }
    }

    if (password.length < 6){
        return("too_short");
    } else if (password.length > 50) {
        return ("password too long");
    } else if (password.search(/\d/) == -1) {
        return("missing a number")
    } else if (password.search(/[a-zA-Z]/) == -1) {
        return("no_letter")
    } else if (password.search(/[^a-zA-z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
        return("bad_character")
    }
    data.push({"name": username, "password": password})
    console.log(`Welcome ${username}, your New Account has been created`)
})