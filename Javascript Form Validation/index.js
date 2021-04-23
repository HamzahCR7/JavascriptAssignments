const name=document.getElementById('name')
const password=document.getElementById('password')
const form=document.getElementById('form')
const errorName=document.getElementById('errorName')
const errorPass=document.getElementById('errorPass')
const reset=document.getElementById('reset')
form.addEventListener('submit',((e)=>{
    e.preventDefault()
    
   checkInput()
//    resetBtn()
   

}))

function checkInput(){
    let username=name.value
let userpass=password.value.trim()

var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
if(username.length<8){
    errorName.classList.add('errorName')
    errorName.innerText=`should greater than 8`
}else{   
     errorName.classList.add('successName')

    
    errorName.innerText=`success`
}if(userpass.length<6){
        errorPass.classList.add('errorName')

    errorPass.innerText=`should greater than 6`
}
else if(!format.test(userpass)){
        errorPass.classList.add('errorName')

    errorPass.innerText=`at least contain a symbol`
    
}else if((!/\S/.test(userpass))){
        errorPass.classList.add('errorName')

    errorPass.innerText=`doesnot contrain a whitespace`
}
else{
        errorPass.classList.add('successName')

    errorPass.innerText=`success`
}

}

