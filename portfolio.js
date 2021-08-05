let first = document.getElementById('first');
let details = document.getElementById('details');
let last = document.getElementById('last');
let email = document.getElementById('email');
let form = document.getElementById('contactform');
let checkBox = document.getElementById('consent');
let errors=document.getElementById('errors');




first.addEventListener('focus' , function() {
    this.value = 'Type Here...';


});

last .addEventListener('focus' , function() {
    this.value = 'Type Here...';


});

email.addEventListener('focus' , function() {
    this.value = 'Type Here...';


});

details.addEventListener('focus' , function() {
    if (first.value !='') {
        this.value = 'Hello ' + first.value + '! How can I help you today?';
    } else {
        this.value = 'Please tell me who you are first by entering your first and last name above. Thank you!';
    }
});

form.addEventListener('submit', function(e){
    var stopSubmit = false;

    if (!checkBox.checked) {
        errors.innerHTML = '<p>Please consent to receiving emails!</p>';
        stopSubmit = true;
    }

    if (first.value == '') {
        errors.innerHTML += '<p>You must enter your name!</p>';
        stopSubmit = true;
    }

    if (stopSubmit) {
        e.preventDefault();
    }
});


/*
last.addEventListener('focus' , function() {});
email.addEventListener('focus' , function() {});

first.addEventListener('blur' , function() {});
details.addEventListener('blur' , function() {});
last.addEventListener('blur' , function() {});
email.addEventListener('blur' , function() {});*/