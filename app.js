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
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 },
      },
    });
  
    // Dark Mode Toggle with Local Storage
    if (localStorage.getItem("darkMode") === "enabled") {
      $("body").addClass("dark-mode");
    }
  
    $("#darkModeToggle").on("click", function () {
      $("body").toggleClass("dark-mode");
      if ($("body").hasClass("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
      } else {
        localStorage.setItem("darkMode", "disabled");
      }
    });
  
    // Contact Form Validation
    $("#contactForm").on("submit", function (event) {
      event.preventDefault();
      const email = $("#email").val();
      const phone = $("#phone").val();
      const errorMessage = $("#error-message");
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10}$/;
  
      if (!emailRegex.test(email) || !phoneRegex.test(phone)) {
        errorMessage.show();
      } else {
        errorMessage.hide();
        this.reset();
        alert("Message sent successfully!");
      }
    });
  
    // ================ 9 Products Data ================
    const products = [
      {
        name: "Flower Pot 1",
        price: "$15.99",
        oldPrice: "$18.99",
        img: "./assets/productsimg1.jpg",
        discount: "-10%",
      },
      {
        name: "Flower Pot 2",
        price: "$12.99",
        oldPrice: "$14.99",
        img: "./assets/productsimg2.png",
        discount: "-15%",
      },
      {
        name: "Flower Pot 3",
        price: "$18.99",
        oldPrice: "$20.99",
        img: "./assets/productsimg3.png",
        discount: "-5%",
      },
      {
        name: "Flower Pot 4",
        price: "$15.99",
        oldPrice: "$18.99",
        img: "./assets/productsimg4.png",
        discount: "-10%",
      },
      {
        name: "Flower Pot 5",
        price: "$16.99",
        oldPrice: "$19.99",
        img: "./assets/productsimg5.png",
        discount: "-15%",
      },
      {
        name: "Flower Pot 6",
        price: "$13.99",
        oldPrice: "$15.99",
        img: "./assets/productsimg6.png",
        discount: "-10%",
      },
      {
        name: "Flower Pot 7",
        price: "$17.99",
        oldPrice: "$19.99",
        img: "./assets/productsimg7.png",
        discount: "-10%",
      },
      {
        name: "Flower Pot 8",
        price: "$15.99",
        oldPrice: "$18.99",
        img: "./assets/productsimg8.png",
        discount: "-10%",
      },
      {
        name: "Flower Pot 9",
        price: "$19.99",
        oldPrice: "$24.99",
        img: "./assets/productsimg9.png",
        discount: "-20%",
      },
    ];
  
    // Generate Product Cards
    const productContainer = $("#productList");
  
    function renderProducts(list) {
      productContainer.empty();
      list.forEach((product) => {
        const productCard = `
          <div class="col-sm-4" data-aos="fade-up">
            <div class="innerproductsection">
              <span class="discount">${product.discount}</span>
              <img src="${product.img}" alt="${product.name}" />
              <div class="cartcontainer">
                <button class="wishlist"><i class="fa-solid fa-heart"></i></button>
                <button class="btn">Add To Cart <i class="fa-solid fa-cart-plus"></i></button>
                <button class="share"><i class="fa-solid fa-share"></i></button>
              </div>
              <h2>${product.name}</h2>
              <h1 class="price"><span class="clrchange">${product.price}</span> <del>${product.oldPrice}</del></h1>
            </div>
          </div>
        `;
        productContainer.append(productCard);
      });
    }
  
    // Initial Render of All 9 Products
    renderProducts(products);
  
    // Search Functionality
    // 1) Real-time filtering as user types
    $("#searchInput").on("input", function () {
      filterProducts();
    });
  
    // 2) Filter function called by button
    window.filterProducts = function () {
      const searchValue = $("#searchInput").val().toLowerCase();
      const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(searchValue)
      );
      renderProducts(filtered);
    };
  });
  