(function() {
    emailjs.init("3G1zdtyvME8k_p8US");
})();

// Select all Modals and Trigger Links
const modals = {
    portfolio: document.getElementById("portfolioModal"),
    about: document.getElementById("aboutModal"),
    experience: document.getElementById("experienceModal")
};

const triggers = {
    portfolio: document.querySelector(".btn-view-work"),
    about: document.querySelector('a[href="#about"]'),
    experience: document.querySelector('a[href="#experience"]') // Connects to your Navbar Experience tag
};

// Open Logic
Object.keys(triggers).forEach(key => {
    if(triggers[key]) {
        triggers[key].onclick = (e) => {
            e.preventDefault();
            modals[key].style.display = "flex";
        };
    }
});

// Global Close Logic
document.querySelectorAll(".close-modal").forEach(btn => {
    btn.onclick = () => {
        Object.values(modals).forEach(m => m.style.display = "none");
    };
});

window.onclick = (event) => {
    Object.values(modals).forEach(m => {
        if (event.target == m) m.style.display = "none";
    });
};


function sendEmail(e) {
    e.preventDefault();

    const btn = document.querySelector('.send-btn');
    btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';

    // Use the IDs from your EmailJS Dashboard
    emailjs.sendForm('service_ux3xrmj', 'template_ly8dkl2', '#contact-form')
        .then(() => {
            alert('Message Sent Successfully!');
            btn.innerHTML = 'Sent! <i class="fas fa-check"></i>';
            document.getElementById('contact-form').reset();
        }, (error) => {
            console.log('FAILED...', error);
            alert('Send failed. Check the console for the error.');
            btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
        });
}