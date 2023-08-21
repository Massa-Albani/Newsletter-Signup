const subscribe_btn = document.getElementById("subscribe-btn");
const input_field = document.getElementById("input_field")

subscribe_btn.addEventListener("click", validate);
subscribe_btn.addEventListener("click", displayText);


function validate(e) {
    e.preventDefault();

    let valid = true;
    
    if (!input_field.value || !input_field.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        const Error_msg = document.getElementById("error-message");
        Error_msg.classList.add("Visible");
        input_field.classList.add("invalid");
        subscribe_btn.classList.add("invalid");
        Error_msg.setAttribute("aria-hidden", "false");
        Error_msg.setAttribute("aria-invalid", "true");
        Error_msg.style.display = "flex";
    }
    else if (input_field.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        const success_msg = document.getElementById("success-message-container");
        const fp_container = document.getElementById("front_page_container");
        success_msg.style.display = "flex";
        fp_container.style.display = "none";
    }
    return valid;
}

function displayText() {
    let displayElement = document.getElementById("displayText");
    const inputValue = input_field.value;

    displayElement.textContent = inputValue;
}