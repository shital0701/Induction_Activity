
let button = document.querySelector(".button1")



let validateform =  (e) =>{
    e.preventDefault();
    let email = "shital@gmail.com";
    let password= "Sh@123";
    let email1  =document.getElementById("email");
    var password1=document.getElementById("password").value;
    let errormsg_email= document.getElementById("error-msg-Email");
    let errormsg_pass= document.getElementById("error-msg-Pass");
    var pass_Len = password1.length;
    
    if(!email1.value.match(email)){
        errormsg_email.innerHTML = "Invalid Email";

    } else if(!password1.match(password)){
        errormsg_email.innerHTML = "";
        errormsg_pass.innerHTML = "Invalid Password"
    } else{
        errormsg_email.innerHTML = "";
        errormsg_pass.innerHTML = "";
        document.getElementById("sucess_msg").innerHTML="Login sucessful";
        document.getElementById("Pass_len").innerHTML= `Password Length: ${pass_Len}`;
        // console.log(password1.lenght);


    }
    console.log (pass_Len);


    // document.getElementById("sucess_msg").innerHTML="";

}

button.addEventListener("click", validateform);