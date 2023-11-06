/* Add your JavaScript to this file */
window.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector(".form-group");
    const message = document.querySelector(".message");
    let email = document.getElementById("email");

    const button = document.querySelector("button.btn");
    function addMsg(email){
        
        if (email.value == ""){
            message.innerHTML="Thank you! Please enter valid email address";
            // message.classlist.add ("message");
        } else {
            message.innerHTML=`Thank you! Your email 
            address ${email.value} has been added to our mailing list!`;
        }
        
    }
    button.addEventListener ("click",(e) => {
        e.preventDefault()
        addMsg(email); 
    });

})