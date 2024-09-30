
// burger menu
function showMenu() {
    var burger = document.getElementById('burger');
    burger.classList.toggle('show');
}

function finish() {
    var burger = document.getElementById('burger');
    burger.className = 'menu__box';
    var checkbox = document.getElementById('menu__togle');
    checkbox.checked = false;
}

// contacts

function getName() {
    var elemName = document.getElementById('name');
    var elemEmail = document.getElementById('email');
    if (elemName.value === '') {
        alert('Dear guest, please write your name.');
    } else if (elemEmail.value === '') {
        alert('Dear guest, please write correctly your Email address.');
    } else {
        alert('Dear, ' + elemName.value + '!' + '\nWe will answer all your questions about this email - ' + elemEmail.value);
    }
   
}


