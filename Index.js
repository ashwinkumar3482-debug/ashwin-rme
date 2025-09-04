<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form</title>
</head>
<body>
  <h2>Contact Me</h2>
  <form id="contact-form">
    <input type="text" id="name" name="from_name" placeholder="Your Name" required><br><br>
    <input type="email" id="email" name="from_email" placeholder="Your Email" required><br><br>
    <textarea id="message" name="message" placeholder="Your Message" required></textarea><br><br>
    <button type="submit">Send Message</button>
  </form>

  <!-- EmailJS CDN -->
  <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
  <script>
    (function() {
      emailjs.init("4aVMXwEF2mqI6kWZf"); // ✅ Your Public Key
    })();

    document.getElementById("contact-form").addEventListener("submit", function(e) {
      e.preventDefault();

      emailjs.send(
        "service_nac4w18",     // ✅ Your Service ID
        "template_lpw0jyj",    // ✅ Your Template ID
        {
          from_name: document.getElementById("name").value,
          from_email: document.getElementById("email").value,
          message: document.getElementById("message").value,
        }
      ).then(function(response) {
          alert("✅ Message sent successfully!");
      }, function(error) {
          alert("❌ Error! Please try again later.");
          console.error(error);
      });
    });
  </script>
</body>
</html>
