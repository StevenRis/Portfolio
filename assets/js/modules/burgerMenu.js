const burgerMenu = () => {
  const navigation = document.querySelector('.navigation');
  const menuBtn = document.querySelector('.menu-btn__burger, .nav-item');
  const navItem = document.querySelector('.nav-item');
  const socialIcons = document.querySelector('.social-icons');
  let menuOpen = false;

  function openBurgerMenu() {
    menuBtn.classList.add('open');
    navigation.classList.add('active');
    socialIcons.classList.add('active');
    menuOpen = true;
  }

  function closeBurgerMenu() {
    menuBtn.classList.remove('open');
    navigation.classList.remove('active');
    socialIcons.classList.remove('active');
    menuOpen = false;
  }

  menuBtn.addEventListener('click', () =>
    !menuOpen ? openBurgerMenu() : closeBurgerMenu()
  );

  const nav = document.querySelector('ul'),
    navItems = document.querySelectorAll('li');

  nav.addEventListener('click', () => {
    navItems.forEach(() => closeBurgerMenu());
  });
};

export default burgerMenu;
