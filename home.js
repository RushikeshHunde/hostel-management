document.addEventListener("DOMContentLoaded", function () {
    const fullImageView = document.getElementById("FullImageView");
    const fullImage = document.getElementById("FullImage");
    const imageItems = document.querySelectorAll(".image-items, .welcome-image-items");

    // Function to open the fullscreen view
    function FullView(src) {
        fullImage.src = src;
        fullImageView.style.display = "flex";
    }

    // Function to close the fullscreen view
    function closeFullView() {
        fullImageView.style.display = "none";
        fullImage.src = ""; // Clear the image source
    }

    // Attach click event to all image items
    imageItems.forEach((image) => {
        image.addEventListener("click", () => FullView(image.src));
    });

    // Close fullscreen when clicked outside the image or on Escape key
    fullImageView.addEventListener("click", (e) => {
        if (e.target === fullImageView) {
            closeFullView();
        }
    });

    // Close fullscreen on pressing Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeFullView();
        }
    });
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("h1").style.opacity = "0";
    document.querySelector("h1").style.fontSize = "0vh";
    document.querySelector("h1").style.margin =  "-160vh 80vh 100vh";
  } else {
    document.querySelector("h1").style.opacity = "1";
    document.querySelector("h1").style.fontSize = "10vh";
    document.querySelector("h1").style.margin =  "-160vh -115vh 100vh";
  }
  prevScrollpos = currentScrollPos;
}

