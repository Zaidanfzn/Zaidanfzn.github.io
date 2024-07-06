document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  const hamburger = document.querySelector(".hamburger-menu");
  const bars = document.querySelectorAll(".bar");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      const headerHeight = document.querySelector("header").offsetHeight;
      const titleHeight = targetSection.querySelector(".title" + targetId).offsetHeight;
      const offset = headerHeight + titleHeight;

      window.scrollTo({
        top: targetSection.offsetTop - offset,
        behavior: "smooth"
      });

      if (hamburger.classList.contains("active")) {
        hamburger.classList.remove("active");
        bars.forEach(bar => bar.classList.remove("cross"));
        document.body.classList.remove("menu-open");
      }
    });
  });

  const verticalNavLinks = document.querySelectorAll(".vertical-menu a");
  verticalNavLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (hamburger.classList.contains("active")) {
        hamburger.classList.remove("active");
        bars.forEach(bar => bar.classList.remove("cross"));
        document.body.classList.remove("menu-open");
      }
    });
  });
});
  
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
  
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth"
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    const besarGradien = 1;

    if (window.scrollY > 0) {
      header.style.background = `linear-gradient(#000000 ${besarGradien}%, #051F30)`;
      nav.style.background = `linear-gradient(#000000 ${besarGradien}%, #051F30)`;
    } else {
      header.style.background = "#051F30";
      nav.style.background = "#051F30";
    }
  });
});
  
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const postSection = document.getElementById("post");
  const footer = document.querySelector("footer");
  
  window.addEventListener("scroll", function () {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const postSectionTop = postSection.offsetTop;
    const postSectionBottom = postSectionTop + postSection.clientHeight;
  
    if (scrollY + windowHeight >= postSectionBottom) {
      footer.style.display = "block";
    } 
    else {
      footer.style.display = "none";
    }
  });
}); 
  
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-menu");
  const verticalMenu = document.querySelector(".vertical-menu");
  const bars = document.querySelectorAll(".bar");
  
  hamburger.addEventListener("click", function () {
    verticalMenu.classList.toggle("active");
    bars.forEach(bar => bar.classList.toggle("cross"));
    document.body.classList.toggle("menu-open");
  });
  
  const navLinks = document.querySelectorAll(".vertical-menu a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      verticalMenu.classList.remove("active");
      bars.forEach(bar => bar.classList.remove("cross"));

      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth"
      });
    });
  });
});
  
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const menuItems = document.querySelector(".menu-items");
  
  hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("active");
    menuItems.classList.toggle("active");
  });
  
  const menuLinks = document.querySelectorAll(".menu-items a");
  
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      hamburgerMenu.classList.remove("active");
      menuItems.classList.remove("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const titleElement = document.getElementById("dynamicText");
  const textContents = ["Muh Zaidan Fauzan", "Zaidan!"];

  let currentIndex = 0;

  function animateText(index) {
    const textContent = textContents[index];

    const spannedText = textContent
      .split("")
      .map(char => `<span>${char}</span>`)
      .join("");

    titleElement.innerHTML = spannedText;

    const spanElements = titleElement.querySelectorAll("span");

    function showText(index) {
      if (index < spanElements.length) {
        spanElements[index].style.opacity = 1;
        setTimeout(() => {
          showText(index + 1);
        }, 70);
      } 
      else {
        setTimeout(() => {
          removeText(spanElements.length - 1);
        }, 2000);
      }
    }

    function removeText(index) {
      if (index >= 0) {
        spanElements[index].style.opacity = 0;
        setTimeout(() => {
          removeText(index - 1);
        }, 70);
      } 
      else {
        currentIndex = (currentIndex + 1) % textContents.length;

        setTimeout(() => {
          animateText(currentIndex);
        }, 500); 
      }
    }
    setTimeout(() => {
      showText(0);
    }, 500);
  }
  animateText(currentIndex);
});

document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box-portofolio");

  const programmingLanguages = [
      ["HTML", "CSS", "JavaScript"],
      ["Python", "Django"],
  ];

  boxes.forEach((box, index) => {
      const titleElement = box.querySelector(".title-project");
      const descElement = box.querySelector(".desc-project");
      const langContainer = box.querySelector(".lang-container");

      const projectTitle = "Project Title " + (index + 1);
      const projectDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec turpis at leo euismod lacinia.";

      titleElement.textContent = projectTitle;
      descElement.textContent = projectDesc;

      programmingLanguages[index].forEach(lang => {
          const oval = document.createElement("span");
          oval.className = "lang-oval";
          langContainer.appendChild(oval);
      });
  });
});

  
document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector("footer");
  const postSection = document.getElementById("post");

  const postPosition = postSection.offsetTop;

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;

    const distanceFromPost = scrollY - postPosition;

    const threshold = 20; 

    if (distanceFromPost > threshold) {
      footer.classList.add("active");
    } else {
      footer.classList.remove("active");
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const buttonContainer = document.querySelector('.button-container');
  buttonContainer.classList.add('show');
});

function buttonClicked() {
  alert('Button Clicked!');
}