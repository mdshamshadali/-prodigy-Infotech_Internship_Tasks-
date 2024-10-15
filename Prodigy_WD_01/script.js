document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const sections = document.querySelectorAll(".section");
    const colors = {
        default: "black",
        active: { home: "lightcoral", about: "lightseagreen", services: "lightpink", contact: "lightsteelblue" }
    };

    navbar.style.backgroundColor = colors.default;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(({ isIntersecting, target }) => {
            if (isIntersecting) {
                navbar.style.backgroundColor = colors.active[target.id] || colors.default;
            }
        });
    }, { threshold: 0.6 });

    sections.forEach(section => observer.observe(section));

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.color = "gold"; 
            link.style.backgroundColor = "darkslategray";
        });
        link.addEventListener("mouseleave", () => {
            link.style.color = "";
            link.style.backgroundColor = "";
        });
        link.addEventListener("click", () => {
            navbar.style.backgroundColor = colors.default;
        });
    });
});
