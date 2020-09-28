var popupElement = document.getElementById("Navbar");

function navbarToggle() {
  if (popupElement.classList.contains("Header-Logo-Links-Enabled")) {
    popupElement.classList.remove("Header-Logo-Links-Enabled");
  } else {
    popupElement.classList.add("Header-Logo-Links-Enabled");
  }
}

function reportWindowSize() {
  if (window.innerWidth > 1050) {
    popupElement.classList.remove("Header-Logo-Links-Enabled");
  }
}

window.onresize = reportWindowSize;
