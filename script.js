
  let menuOpen = false;

  function toggleMenu() {
    const header = document.getElementById("sidebar");
    const icon = document.getElementById("menuIcon");

    menuOpen = !menuOpen;

    if (menuOpen) {
      header.classList.add("active");
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times"); // close icon
    } else {
      header.classList.remove("active");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars"); // hamburger
    }
  }

