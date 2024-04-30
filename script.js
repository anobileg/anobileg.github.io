
let menuIcon = document.querySelectorAll('#menu-icon');
let navbar = document.querySelectorAll('.nevbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });

        };

    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



const typed = new Typed('.multiple-text', {
    strings: ['Studente'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function inviaModulo() {
    var nomeInput = document.getElementsByName("nome")[0];
    var cognomeInput = document.getElementsByName("cognome")[0];
    var emailInput = document.getElementsByName("email")[0];
    var telefonoInput = document.getElementsByName("numero-cellulare")[0];
    var messaggioInput = document.getElementsByName("messaggio")[0];

    if (nomeInput.value.trim() === '' || cognomeInput.value.trim() === '' || emailInput.value.trim() === '' || messaggioInput.value.trim() === '') {
        alert("Si prega di compilare tutti i campi.");
        return false;
    }

    var formData = new FormData();
    formData.append("access_key", "9a5e0f00-85b3-4a6c-979e-808923adcb35");
    formData.append("nome", nomeInput.value);
    formData.append("cognome", cognomeInput.value);
    formData.append("email", emailInput.value);
    formData.append("numero-cellulare", telefonoInput.value);
    formData.append("messaggio", messaggioInput.value);

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (response.ok) {
            nomeInput.value = '';
            cognomeInput.value = '';
            emailInput.value = '';
            telefonoInput.value = '';
            messaggioInput.value = '';
            alert("Messaggio inviato con successo!");
        } else {
            alert("Si è verificato un errore durante l'invio del messaggio.");
        }
    })
    .catch(error => {
        console.error("Errore durante l'invio del messaggio:", error);
        alert("Si è verificato un errore durante l'invio del messaggio.");
    });

    return false;
}








