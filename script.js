// Sample responses from the chatbot
const chatbotResponses = [
    "Hello! How can I assist you today?",
    "I'm here to help with medical questions.",
    "Please type your question, and I'll do my best to assist you.",
];

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendMessageBtn = document.getElementById("sendMessage");
const openChatBtn = document.getElementById("openChat");
const closeChatBtn = document.getElementById("closeChat");
const chatPopup = document.getElementById("chatPopup");

openChatBtn.addEventListener("click", () => {
    chatPopup.style.display = "block";
});

closeChatBtn.addEventListener("click", () => {
    chatPopup.style.display = "none";
});

sendMessageBtn.addEventListener("click", () => {
    const userMessage = userInput.value;
    if (userMessage.trim() === "") return;

    // Display user message
    displayMessage(userMessage, "user");

    // Simulate chatbot response (replace with actual chatbot integration)
    const randomResponse = getRandomResponse(chatbotResponses);
    setTimeout(() => {
        displayMessage(randomResponse, "bot");
    }, 500);

    userInput.value = "";
});

function displayMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.className = sender === "user" ? "user-message" : "bot-message";
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
}

function getRandomResponse(responses) {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}
