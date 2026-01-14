const animatedElements = document.querySelectorAll('.fade-slide-up, .fade-slide-down');

function animateOnScroll() {
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.animationPlayState = 'running';
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);



/*---------Home section 9--------*/

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".home-section-9-card");
    const section = document.querySelector(".home-section-9-wrapper");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add("active");
                        }, index * 300); // stagger animation
                    });
                }
            });
        },
        { threshold: 0.3 }
    );

    observer.observe(section);
});

/*---------Reveal box animation--------*/

document.addEventListener("DOMContentLoaded", function () {

    const boxes = document.querySelectorAll(".reveal-box");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.2 });

    boxes.forEach(box => observer.observe(box));
});


/*-------------Home section slider-------*/

// Desktop only
if (window.matchMedia("(min-width: 1025px)").matches) {

    const slider = document.querySelector(".home-section-4-slider");

    let lastScroll = window.scrollY;
    let scrollDir = "down";

  
    window.addEventListener("scroll", () => {
        const current = window.scrollY;
        scrollDir = current > lastScroll ? "down" : "up";
        lastScroll = current;
    });


    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    if (scrollDir === "down") {
                        slider.classList.add("active");      
                    }
                } else {
                    if (scrollDir === "up") {
                        slider.classList.remove("active");   
                    }
                }
            });
        },
        {
            threshold: 0.6   
        }
    );

    observer.observe(slider);
}

// Header Fixed

window.addEventListener("scroll", function () {
    const header = document.querySelector(".home-section-1-header-wrapper");
    if (window.scrollY > 10) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
});