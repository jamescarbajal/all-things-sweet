// Collect form data from general contact form
const form = document.getElementById("cateringForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    const json = JSON.stringify(data);
    const xhr = new XMLHttpRequest();
    const request = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/f/mpzbebpd");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(json);
    const formStatus = document.getElementById("formStatus");
    formStatus.innerHTML = "Your message has been sent! We'll get back to you shortly.";
    console.log(data);
    form.reset();
});