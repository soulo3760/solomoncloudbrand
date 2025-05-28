function contactMe() {
  const contactInfo = document.getElementById("contact-info");
  contactInfo.innerHTML = `
    <div class="contact-method">
      <i class="fas fa-envelope"></i> Email: your.email@example.com
    </div>
    <div class="contact-method">
      <i class="fas fa-phone"></i> Phone: +254 7XX XXX XXX
    </div>
    <div class="contact-method">
      <i class="fab fa-linkedin"></i> LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank">linkedin.com/in/yourprofile</a>
    </div>
  `;
  
  // Add some animation
  contactInfo.style.animation = "fadeIn 0.5s ease-in";
}

// Add animation to sections when scrolling
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeInUp 0.5s ease-out forwards";
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    section.style.opacity = "0";
    observer.observe(section);
  });
});