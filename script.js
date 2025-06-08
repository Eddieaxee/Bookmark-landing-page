    // Mobile menu toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking close button
  const close = document.getElementById('close');
  close.addEventListener('click', () => {
    navMenu.classList.remove('active');
  }
  );
    
    // ======= Tabs Logic =======
    const tabLinks = document.querySelectorAll(".tabs a");
    const featureDescriptions = document.querySelectorAll(".feature-description");
    
    tabLinks.forEach((tab, index) => {
      tab.addEventListener("click", (e) => {
        e.preventDefault();
    
        // Reset all tabs
        tabLinks.forEach(t => t.classList.remove("active"));
        featureDescriptions.forEach(desc => desc.classList.remove("active"));
    
        // Activate clicked tab and its content
        tab.classList.add("active");
        featureDescriptions[index].classList.add("active");
      });
    });
    
    // ======= FAQ Accordion =======
    const questions = document.querySelectorAll(".question");
    
    questions.forEach((question) => {
      question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector("img");
    
        // Toggle answer visibility
        if (answer.style.display === "block") {
          answer.style.display = "none";
          icon.classList.remove("active");
        } else {
          answer.style.display = "block";
          icon.classList.add("active");
        }
      });
    });
    

    // ======= Scroll to Top Button =======
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
    // ======= Smooth Scrolling for Navigation Links =======
    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth"
          });
        }
        
        // Close mobile menu after clicking a link
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
        }
      });
    });
    

    

      