const db = firebase.database().ref("messages");

// Send Message
function sendMessage() {
    const message = document.getElementById("message").value;
    if (message.trim() !== "") {
        db.push().set({
            text: message,
            timestamp: Date.now()
        });
        document.getElementById("message").value = "";
    }
}

// Display Messages
db.on("child_added", function(snapshot) {
    const msg = snapshot.val();
    const msgElement = document.createElement("p");
    msgElement.innerText = msg.text;
    document.getElementById("chat-box").appendChild(msgElement);
});
