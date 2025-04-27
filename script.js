// Inspirational Quotes
const quotes = [
    "Believe you can and you're halfway there. — Theodore Roosevelt",
    "The best way to predict the future is to create it. — Peter Drucker",
    "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt"
  ];
  
  // Change quote when button clicked
  document.getElementById("btnClick").addEventListener("click", function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").textContent = randomQuote;
    this.style.backgroundColor = "#ff7675"; // Button turns pink
  });
  
  // Keypress Event
  document.getElementById("keypressInput").addEventListener("keypress", function(e) {
    console.log(`You pressed: ${e.key}`);
  });
  
  // Double click event
  document.getElementById("dblClickDiv").addEventListener("dblclick", function() {
    alert("You are destined for greatness! 🌟");
  });
  
  // Image Gallery
  const images = ["image1.jpg", "img2.jpg", "img3.jpg"];
  let currentIndex = 0;
  
  document.getElementById("nextBtn").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("galleryImage").src = images[currentIndex];
  });
  
  document.getElementById("prevBtn").addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("galleryImage").src = images[currentIndex];
  });
  
  // Accordion
  const accordion = document.getElementsByClassName("accordion");
  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
  
  // Form Validation and Password Feedback
  document.getElementById("password").addEventListener("input", function() {
    const feedback = document.getElementById("passwordFeedback");
    if (this.value.length < 8) {
      feedback.textContent = "Password must be at least 8 characters!";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "Strong password!";
      feedback.style.color = "green";
    }
  });
  
  document.getElementById("myForm").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (!name || !email || !password) {
      alert("Please fill all the fields!");
      event.preventDefault();
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters long!");
      event.preventDefault();
    }
  });
  