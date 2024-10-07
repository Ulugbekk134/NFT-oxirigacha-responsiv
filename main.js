const userLogin ="admin";
const userPassword ="1234";
document.getElementById("loginBtn").addEventListener("click", function (){
    let username =document.getElementById("username").value.trim();
    let password =document.getElementById("password").value.trim();
    const messageElement = document.getElementById("message");


    if(username === userLogin && password == userPassword){
      window.location.href ='index.html'

    }else{
        messageElement.textContent= "Foydalanuvchi nomi xato yoki parol xato"
    }
})