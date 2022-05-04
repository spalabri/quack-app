

function test() {
    const fname  = document.getElementById('fname').value;

    //const fname = form.elements['fname'];
    
    alert(fname);
}

const form = document.getElementById('signup');

form.addEventListener('submit', test);
