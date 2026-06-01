// Scroll button
function scrollToSection() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let valid = true;

    if (name === "") {
        document.getElementById("nameError").innerText = "Name required";
        valid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email";
        valid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    if (message === "") {
        document.getElementById("messageError").innerText = "Message required";
        valid = false;
    } else {
        document.getElementById("messageError").innerText = "";
    }

    if (valid) {
        alert("Form Submitted Successfully!");
        document.getElementById("contactForm").reset();
    }
});

// TODO LIST
function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button onclick="this.parentElement.remove()">X</button>`;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}