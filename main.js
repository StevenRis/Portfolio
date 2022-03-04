// hamburger menu code
const navigation = document.querySelector('.navigation');
const menuBtn = document.querySelector('.menu-btn__burger, .nav-item');
const navItem = document.querySelector('.nav-item');
const socialIcons = document.querySelector('.social-icons');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    navigation.classList.add('active');
    socialIcons.classList.add('active');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navigation.classList.remove('active');
    socialIcons.classList.remove('active');
    menuOpen = false;
  }
});

function menuLinks() {
  menuBtn.classList.remove('open');
  navigation.classList.remove('active');
  socialIcons.classList.remove('active');
  menuOpen = false;
}

// copyright year
const currentDate = new Date();
const year = currentDate.getFullYear();
document.getElementById('year').innerHTML = '&#169; Copyright 2020 - ' + year;

// send form
const btn = document.getElementById('button');
const popUp = document.querySelector('.popup-container');

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();

  const serviceID = 'default_service';
  const templateID = 'template_8eadzxr';

  function sent() {
    popUp.classList.add('send');
    document.getElementById('form').reset();
  }

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      sent();

      function removeClass() {
        popUp.classList.remove('send');
      }
      setTimeout(removeClass, 3000);
    },
    (err) => {
      alert(JSON.stringify(err));
    }
  );
});

// change text when choosing the pl language

function changeWelcomeText(welcomeText) {
  const boxLeft = document.querySelector(welcomeText);

  boxLeft.innerHTML = `          
  <h1 class="welcome-text">Cześć<span class="yellow-dot">.</span></h1>
  <div class="developer-text">
    <div>
      <h1>Jestem</h1>
    </div>
    <div class="front-end">
      <p class="accent-text">front-end developer</p>
    </div>
  </div>
  <h1>Stanisław</h1>
  <p class="text-bottom">
    Pomagam firmom w kodowaniu produktów cyfrowych i przekształcaniu
    pomysłów w funkcjonalne i zachwycające doświadczenie. <br />
    Zróbmy razem coś wspaniałego!
  </p>
  <div class="btn-center">
    <a href="#contact" class="btn btn-main">Kontakt</a>
    <a
      href="https://drive.google.com/file/d/1Sx9VOQO2_JzmusuirE5l_pqFJpw1VfXp/view?usp=sharing"
      target="_blank"
      class="btn btn-main"
    >
      <img src="images/user.png" alt="" />CV</a
    >
  </div>
  `;
}

function changeTech(h2, para) {
  const skillsTitle = document.querySelector(h2),
    skillsPara = document.querySelector(para);

  skillsTitle.textContent = 'Technologie';
  skillsPara.textContent = 'które używam';
}

function aboutMe(h2, para) {
  const aboutTitle = document.querySelector(h2),
    aboutPara = document.querySelector(para);

  aboutTitle.textContent = 'O mnie';
  aboutPara.textContent =
    ' Nazywam się Stanisław Griszko. Tworzenie stron oraz aplikacji internetowych to moja największa pasja. Od 2 lat nieustannie ją rozwijam. Całą swoją uwagę koncentruję na rozwijaniu imiejętności oraz poznawaniu nowych technologii.';
}

function languages(h2, para) {
  const skillsTitle = document.querySelector(h2),
    skillsPara = document.querySelector(para);

  skillsTitle.textContent = 'Języki';
  skillsPara.textContent = 'w których mówię';
}

const lang = document.querySelector('.lang-pl');

lang.addEventListener('click', (e) => {
  e.preventDefault();
  changeWelcomeText('.box__left');

  changeTech('.skills__tech-title h2', '.skills__tech-title p');
  aboutMe('.about-me__container h2', '.about-me__container p');
  languages('.skills__lang-title h2', '.skills__lang-title p');
});
