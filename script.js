// Virtual Tour Modal
var virtualTourModal = document.getElementById("virtual-tour-modal");
var virtualTourBtn = document.querySelector(".virtual-tour-btn");
var closeBtns = document.querySelectorAll(".close");

// Chatbot Modal
var chatbotModal = document.getElementById("chatbot-modal");
var chatbotStartBtn = document.querySelector(".chatbot-start");

// Open Virtual Tour Modal
virtualTourBtn.onclick = function() {
    virtualTourModal.style.display = "block";
}

// Open Chatbot Modal
chatbotStartBtn.onclick = function() {
    chatbotModal.style.display = "block";
}

// Close Modals
closeBtns.forEach(function(btn) {
    btn.onclick = function() {
        virtualTourModal.style.display = "none";
        chatbotModal.style.display = "none";
    }
})

// Close modal if clicking outside of it
window.onclick = function(event) {
    if (event.target == virtualTourModal) {
        virtualTourModal.style.display = "none";
    }
    if (event.target == chatbotModal) {
        chatbotModal.style.display = "none";
    }
}
