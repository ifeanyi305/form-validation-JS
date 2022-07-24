const userDatabase = {
    "ifeanyi":{
        name: "oti ifeanyi",
        email: "oti@gmail.com",
        accountActivated: true,
        password: "ifyspain"
    },
    "oti":{
        name: "oti ",
        email: "otis@gmail.com",
        accountActivated: false,
        password: "ifyjapan"
    },
    "joseph":{
        name: "joseph",
        email: "joseph@gmail.com",
        accountActivated: true,
        password: "ifychina"
    },
    "uche":{
        name: "uche",
        email: "uche@gmail.com",
        accountActivated: true,
        password: "ifymalay"
    }
}
function displayUserDetails(){
    let username = prompt("enter your username")
    while(validateUsername(username) == false){
        username = prompt("username should not exceed 10 chars")
    }
    if(username == null){
        return 
    }
    
    let password = prompt("input your password")
    while(validatePassword(password) == false){
        password = prompt("password should be more than 6 chars")
    }
    if(password == null){
        return 
    }

    let confirmPassword = prompt("confirm your password")
    while(confirmPassword !== password){
        confirmPassword = prompt("password do not match")
    }
    if(confirmPassword == null){
        return 
    }

    const users = userDatabase[username]
    if(users == undefined){
        alert("user not found! register on the app")
        return 
    }
    console.log(users)
    alert(`
      here is your details:
      name: ${users.name}
      email: ${users.email}
      accountActivated: ${users.accountActivated}
    `)
}
displayUserDetails()

alert("you have come to the end of this program! bye-bye")


function validateUsername(username){
    if(username == null){
        return  true 
    }

    if(username.length > 10){
        return false 
    }else{
        return true 
    }
}

function validatePassword(password){
    if(password == null){
        return  true
    }
    if(password.length < 6){
        return false 
    }else{
        return true 
    }
}
