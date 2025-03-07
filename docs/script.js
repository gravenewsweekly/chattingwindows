import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { firebaseConfig } from "./firebase-config.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const messagesRef = ref(database, "messages");

// Send Message
window.sendMessage = function () {
    const messageInput = document.getElementById("message");
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        push(messagesRef, { text: messageText, timestamp: Date.now() });
        messageInput.value = "";
    }
};

// Display Messages
onChildAdded(messagesRef, (snapshot) => {
    const msg = snapshot.val();
    const msgElement = document.createElement("p");
    msgElement.innerText = msg.text;
    document.getElementById("chat-box").appendChild(msgElement);
});
