$(document).ready(function () {
    // Owl Carousel Initialization
    $(".owl-carousel").owlCarousel({
      autoplay: true,
      margin: 30,
      loop: true,
      dots: true,
      nav: true,
      navText: [
        "<i class='fas fa-long-arrow-alt-left'></i>",
        "<i class='fas fa-long-arrow-alt-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  
    // Check if dark mode is already enabled
    if (localStorage.getItem("darkMode") === "enabled") {
      $("body").addClass("dark-mode");
    }
  
    // Dark mode toggle
    $("#darkModeToggle").on("click", function () {
      $("body").toggleClass("dark-mode");
  
      // Save the state in localStorage
      if ($("body").hasClass("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
      } else {
        localStorage.setItem("darkMode", "disabled");
      }
    });
  });
  