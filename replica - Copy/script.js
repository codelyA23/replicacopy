document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".navbar a");

  // Ensure menu icon starts as bx-menu
  menuIcon.classList.add("bx-menu");

  function toggleMenu() {
    // Toggle navbar visibility and icon state
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-menu");
    menuIcon.classList.toggle("bx-x");
    menuIcon.classList.toggle("active-icon"); // Toggle color when active
  }

  // Toggle navbar on menu icon click
  menuIcon.addEventListener("click", toggleMenu);

  // Close navbar and reset icon when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
      menuIcon.classList.add("bx-menu");
      menuIcon.classList.remove("bx-x", "active-icon"); // Reset to initial state
    });
  });

  // Additional resource-related scripts
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.querySelector(".search-btn");
  const categoryBtns = document.querySelectorAll(".category-btn");
  const resourceItems = document.querySelectorAll(".resource-item");

  // Filter resources by category
  function filterResources(category) {
    resourceItems.forEach((item) => {
      const itemCategory = item.getAttribute("data-category");
      item.style.display = category === "all" || itemCategory === category ? "block" : "none";
    });
  }

  // Search resources by text
  function searchResources() {
    const searchText = searchInput.value.toLowerCase();
    resourceItems.forEach((item) => {
      const title = item.querySelector("h4").textContent.toLowerCase();
      const description = item.querySelector("p").textContent.toLowerCase();
      item.style.display = title.includes(searchText) || description.includes(searchText) ? "block" : "none";
    });
  }

  // Event listener for category buttons
  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryBtns.forEach((button) => button.classList.remove("active"));
      btn.classList.add("active");
      filterResources(btn.getAttribute("data-category"));
    });
  });

  // Event listener for search button
  searchBtn.addEventListener("click", searchResources);

  // Enable search on pressing "Enter" in search input
  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      searchResources();
    }
  });
});
