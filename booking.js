document.querySelector('sign-in-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('passwords').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const contact = document.getElementById('contact').value;

    const response = await fetch('/api/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email,password, age, gender, contact })
    });

    if (response.ok) {
        window.location.href = '/booking.html';
    } else {
        alert('Error signing in. Please try again.');
    }
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos){
    document.getElementById("container").style.top = "0";
  } else {
    document.getElementById("container").style.top = "-210px";
  }
  prevScrollpos = currentScrollPos;
}