const API_URL = "https://bot-backend-3fpx.onrender.com/chat";

async function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  appendMessage("You", message);
  input.value = "";

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id: "user123", message })
  });

  const data = await response.json();
  appendMessage("MAYO AI", data.response);
}

function appendMessage(sender, message) {
  const box = document.getElementById("chat-box");
  const div = document.createElement("div");
  div.innerHTML = `<strong>${sender}:</strong> ${message}`;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}
