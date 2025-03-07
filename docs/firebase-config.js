// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbACa2zDsifg7ZcwXohnpuzcixb3htkSE",
  authDomain: "chatting-aca5c.firebaseapp.com",
  projectId: "chatting-aca5c",
  storageBucket: "chatting-aca5c.appspot.com", 
  messagingSenderId: "575282718840",
  appId: "1:575282718840:web:1bdff9d73381e33c42658d",
  measurementId: "G-S565W7CEYG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
