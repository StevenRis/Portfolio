const goTopButton = () => {
  // Go top button
  let goTopButton = document.querySelector('.goTopButton');
  // Listen to scroll event and display button
  window.addEventListener('scroll', () => {
    scrollFunction();
  });

  // When the user clicks on the button, scroll to the top of the document
  goTopButton.addEventListener('click', () => {
    topFunction();
  });

  // Display button when the user scrolls down 20px from the top of the document
  function scrollFunction() {
    window.scrollY > 20
      ? (goTopButton.style.display = 'block')
      : (goTopButton.style.display = 'none');
  }

  // Scroll to the top of the document
  function topFunction() {
    document.documentElement.scrollTop = 0;
  }
};

export default goTopButton;
