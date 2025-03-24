document.addEventListener("DOMContentLoaded", function () {
    // 🔹 Menandai Tab "Home" sebagai Aktif
    let navLinks = document.querySelectorAll(".nav-links li a");
    let currentLocation = window.location.href;

    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add("active");
        }
    });

    // 🔹 Efek Hover pada Tombol
    let buttons = document.querySelectorAll(".btn, .cta-btn");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", function () {
            button.style.transform = "scale(1.1)";
            button.style.transition = "transform 0.3s";
        });

        button.addEventListener("mouseleave", function () {
            button.style.transform = "scale(1)";
        });
    });

    // 🔹 Efek Animasi Fade-In saat Halaman Dimuat
    let introSection = document.querySelector(".intro");
    if (introSection) {
        introSection.style.opacity = "0";
        introSection.style.transform = "translateY(50px)";
    
        setTimeout(() => {
            introSection.style.opacity = "1";
            introSection.style.transform = "translateY(0)";
            introSection.style.transition = "opacity 1s ease, transform 1s ease";
        }, 500);
    }

    // 🔹 Efek Hover pada Layanan (What We Do)
    let services = document.querySelectorAll(".service");
    services.forEach(service => {
        service.addEventListener("mouseenter", function () {
            service.style.transform = "scale(1.05)";
            service.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.2)";
            service.style.transition = "transform 0.3s, box-shadow 0.3s";
        });

        service.addEventListener("mouseleave", function () {
            service.style.transform = "scale(1)";
            service.style.boxShadow = "none";
        });
    });

    // 🔹 Efek Scroll untuk Layanan, Pricing Plan, dan Tim
    let fadeInElements = document.querySelectorAll(".service, .pricing-plan, .team-member");
    
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                entry.target.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            }
        });
    }, { threshold: 0.3 });

    fadeInElements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(50px)";
        observer.observe(element);
    });

    // 🔹 Efek Hover pada Pricing Plan
    let pricingPlans = document.querySelectorAll(".pricing-plan");
    pricingPlans.forEach(plan => {
        plan.addEventListener("mouseenter", function () {
            plan.style.transform = "scale(1.05)";
            plan.style.boxShadow = "0px 10px 25px rgba(0, 0, 0, 0.3)";
            plan.style.transition = "transform 0.3s, box-shadow 0.3s";
        });

        plan.addEventListener("mouseleave", function () {
            plan.style.transform = "scale(1)";
            plan.style.boxShadow = "none";
        });
    });

    // 🔹 Efek Ikon "Open Source" Bergetar
    let flagIcon = document.querySelector(".icon-container img");
    if (flagIcon) {
        flagIcon.style.animation = "shake 0.5s infinite alternate";
    }

    // 🔹 Efek Hover pada Footer Links
    let footerLinks = document.querySelectorAll(".footer a");
    footerLinks.forEach(link => {
        link.addEventListener("mouseenter", function () {
            link.style.color = "lightblue";
            link.style.transition = "color 0.3s";
        });

        link.addEventListener("mouseleave", function () {
            link.style.color = "white";
        });
    });

    // 🔹 Tambahkan Animasi CSS untuk Ikon "Open Source"
    let styleSheet = document.createElement("style");
    styleSheet.innerHTML = `
        @keyframes shake {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(5deg); }
        }
    `;
    document.head.appendChild(styleSheet);
});

// About Us
document.addEventListener("DOMContentLoaded", function () {
    let aboutSections = document.querySelectorAll(".about-content");

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                entry.target.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            }
        });
    }, { threshold: 0.3 });

    aboutSections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah pengiriman form sebelum validasi
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before submitting.");
            return;
        }

        // Simulasi pengiriman sukses
        alert("Thank you, " + name + "! Your message has been sent.");
        contactForm.reset();
    });

    // 🔹 Animasi muncul saat scroll
    let contactSection = document.querySelector(".contact-us");

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                entry.target.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            }
        });
    }, { threshold: 0.3 });

    contactSection.style.opacity = "0";
    contactSection.style.transform = "translateY(50px)";
    observer.observe(contactSection);
});
