function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('section, footer');

  const options = {
    root: null,  // In the viewport
    threshold: 0.2  // When 20% of the section is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing after it's visible
      }
    });
  }, options);

  sections.forEach(section => {
    section.classList.add('invisible');
    observer.observe(section);
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close");

  // Add event listeners for opening the lightbox when an image is clicked
  const lightboxTriggers = document.querySelectorAll(".lightbox-trigger");
  
  lightboxTriggers.forEach(trigger => {
    trigger.addEventListener("click", function(event) {
      event.preventDefault();
      
      // Get the full image source and caption
      const fullImgSrc = this.getAttribute("data-full-img");
      const caption = this.getAttribute("data-caption");

      // Set the lightbox content
      lightboxImg.src = fullImgSrc;
      lightboxCaption.textContent = caption;

      // Show the lightbox
      lightbox.style.display = "flex";
    });
  });

  // Close the lightbox when the close button is clicked
  closeBtn.addEventListener("click", function() {
    lightbox.style.display = "none";
  });

  // Close the lightbox when clicking outside the image
  lightbox.addEventListener("click", function(event) {
    if (event.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
