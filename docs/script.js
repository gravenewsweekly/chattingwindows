// Load Firebase SDK
const firebaseConfig = {
  apiKey: "AIzaSyCbACa2zDsifg7ZcwXohnpuzcixb3htkSE",
  authDomain: "chatting-aca5c.firebaseapp.com",
  databaseURL: "https://chatting-aca5c-default-rtdb.firebaseio.com",
  projectId: "chatting-aca5c",
  storageBucket: "chatting-aca5c.appspot.com",
  messagingSenderId: "575282718840",
  appId: "1:575282718840:web:1bdff9d73381e33c42658d",
  measurementId: "G-S565W7CEYG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref("messages");

// Function to send message
function sendMessage() {
    const messageInput = document.getElementById("message");
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        messagesRef.push({ text: messageText, timestamp: Date.now() })
            .then(() => {
                messageInput.value = ""; // Clear input field
            })
            .catch((error) => console.error("Error sending message:", error));
    }
}

// Listen for new messages and display them
messagesRef.on("child_added", (snapshot) => {
    const msg = snapshot.val();
    const msgElement = document.createElement("p");
    msgElement.innerText = msg.text;
    document.getElementById("chat-box").appendChild(msgElement);
});
