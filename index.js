console.log("Welcome to project 4");

const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
let validUsername = false;
let validPhone = false;
let validEmail = false;
let validAddress = false;
$('#failure').hide();
$('#success').hide();

console.log(username, email, phone);

email.addEventListener('blur', () => {
    console.log("email is blurred");
    // validate email
    let regex = /^([\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,5}$/
    let str = email.value;
    if (regex.test(str)) {
        console.log("Your email id is valid");
        email.classList.remove('is-invalid');
        validEmail = true;
    } else {
        email.classList.add('is-invalid');
        validEmail = false;
        console.log("Your email is invalid. Try again")
    }
})
address.addEventListener('blur' , ()=>{
    console.log("address is blurred");
    let regex = /^([a-zA-Z0-9\.\W]+)$/;
    let str = address.value;
    if(regex.test(str)){
        console.log('Your address is valid');
        address.classList.remove('is-invalid');
        validAddress = true;
    } else{
        address.classList.add('is-invalid');
        validAddress = false;
        console.log("Your address is invalid");
    }
})
username.addEventListener('blur', () => {
    console.log("username is blurred");
    // validate username
    let regex = /^[a-zA-Z]([\w]){3,15}$/;
    // let regex = /^[A-Z]/;
    let str = username.value;
    console.log(regex, str);
    if (regex.test(str)) {
        username.classList.remove('is-invalid')
        console.log('Your name is valid')
        validUsername = true;
    } else {
        console.log('Your name is invalid')
        validUsername = false;
        username.classList.add('is-invalid')
    }
})
phone.addEventListener('blur', () => {
    console.log("phone is blurred");
    // validate phone
    let regex = /^([0-9]){10}/;
    let str = phone.value;
    if (regex.test(str)) {
        phone.classList.remove('is-invalid')
        console.log("Your phone number is valid");
        validPhone = true;
    } else {
        phone.classList.add('is-invalid')
        validPhone = false;
        console.log("Your phone number is invalid");
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("You clicked on button");
    console.log(validEmail, validPhone, validUsername , validAddress);

    if (validEmail && validPhone && validUsername && validAddress) {
        let success = document.getElementById('success');
        success.classList.add('show');
        failure.classList.remove('show');
        $('#success').show();
        $('#failure').hide();
        console.log('Your form has been submitted')
    } else {
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        success.classList.remove('show');
        $('#failure').show();
        $('#success').hide();
        console.log('An error has been occured. Try again.')
    }

})