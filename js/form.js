const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const password=document.getElementById('password');
const passwordconfirm=document.getElementById('password-confirm');

function error(input,message){
    input.className='is-invalid form-control'
    const div=input.nextElementSibling;
    div.innerText=message;
    div.className='invalid-feedback';
}
function succes(input){
    input.className='is-valid form-control'
}

function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value==''){
            error(input,`Enter ${input.id}`)
        }else{
            succes(input);
        }
    })
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

function checkPhone(input){
    var exp=/^\d{10}$/;
    if(!exp.test(input.value)){
        error(input,`Phone number must be 10 number.`)
    }
}

function checkPasswords(input1,input2){
    if(input1.value!=input2.value){
        error(input2,`Passwords do not match.`)
    }
}

function checkLength(input,min,max){
    if(input.value.length<min){
        error(input,`${input.id} can be at least ${min} characters.`);
    }else if(input.value.length>max){
        error(input,`${input.id} can be up to ${max} characters`);
    }else{
        succes(input);
    }
}

form.addEventListener("submit",function(e){
    e.preventDefault();
    checkLength(password,8,15);
    checkRequired([username,email,phone,password,passwordconfirm])
    if(!validateEmail(email.value)){
        error(email,`Enter email correctly.`)
    }
    checkPhone(phone);
    checkLength(username,8,15);
    checkPasswords(password,passwordconfirm);

})