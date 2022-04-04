document.addEventListener('DOMContentLoaded', () => {
  //
  // change text when choosing the pl language
  //
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

  function createProjects() {
    const container = document.querySelector('.portfolio_section');

    container.innerHTML = `
    <div class="portfolio__projects-title">
      <h2>Projekty</h2>
      <p>które stworzyłem</p>
    </div>
    <div class="portfolio-projects__container reverse">
    <div class="projects-image project__one">
      <img src="images/race_place.png" alt="" />
    </div>
    <div class="project-description">
      <h3>Race_Place</h3>
      <h4>Javascript</h4>
      <p>Projekt poświęcony grze Dirt Rally 2.0</p>
      <p>
        Obecnie jest w fazie rozwoju. Celem jest zebranie konfiguracji
        samochodów w jednym miejscu w celu szybszego ustawienia samochodu
        na etap rajdu
      </p>
      <div>
        <a
          class="btn"
          href="https://stevenris.github.io/race_place/"
          target="_blank"
          >Demo</a
        >
        <a
          class="btn"
          href="https://github.com/StevenRis/race_place"
          target="_blank"
          >Code</a
        >
      </div>
    </div>
  </div>
  
  <div class="portfolio-projects__container">
    <div class="projects-image project__one">
      <img src="images/note-keeper-app.png" alt="" />
    </div>
    <div class="project-description">
      <h3>Note Keeper</h3>
      <h4>React, CSS</h4>
      <p>Notatnik</p>
      <div>
        <a
          class="btn"
          href="https://loving-haibt-a002d5.netlify.app/"
          target="_blank"
          >Demo</a
        >
        <a
          class="btn"
          href="https://github.com/StevenRis/Note-Keeper"
          target="_blank"
          >Code</a
        >
      </div>
    </div>
  </div>
  
  <div class="portfolio-projects__container reverse">
    <div class="projects-image project__one">
      <img src="images/weather-app.png" alt="" />
    </div>
    <div class="project-description">
      <h3>Weather App</h3>
      <h4>React, CSS</h4>
      <p>Aplikacja korzysta z API pogody</p>
      <div>
        <a
          class="btn"
          href="https://musing-brown-fb90d2.netlify.app/"
          target="_blank"
          >Demo</a
        >
        <a
          class="btn"
          href="https://github.com/StevenRis/Weather-app"
          target="_blank"
          >Code</a
        >
      </div>
    </div>
  </div>
  
  <div class="portfolio-projects__container">
    <div class="projects-image project__one">
      <img src="images/to-do-list.png" alt="" />
    </div>
    <div class="project-description">
      <h3>To Do List</h3>
      <h4>React, CSS</h4>
      <p>
        Lista zadań - web aplikacja napisana z użyciem frameworku React
      </p>
      <div>
        <a
          class="btn"
          href="https://stevenris.github.io/ToDoList/"
          target="_blank"
          >Demo</a
        >
        <a
          class="btn"
          href="https://github.com/StevenRis/ToDoList"
          target="_blank"
          >Code</a
        >
      </div>
    </div>
  </div>
  
  <div class="portfolio-projects__container reverse">
    <div class="projects-image">
      <img src="images/game.png" alt="" />
    </div>
    <div class="project-description">
      <h3>Rock, Paper, Scissors Game</h3>
      <h4>JavaScript, CSS</h4>
      <p>Projekt został oparty na znanej grze Kamień, Papier, Nożyczki</p>
      <div>
        <a
          class="btn"
          href="https://stevenris.github.io/Game-rock-paper-scissors/"
          target="_blank"
          >Demo</a
        >
        <a
          class="btn"
          href="https://github.com/StevenRis/Game-rock-paper-scissors"
          target="_blank"
          >Code</a
        >
      </div>
    </div>
  </div>
  
  <div class="portfolio-projects__container">
    <div class="projects-image project__one">
      <img src="images/date.png" alt="" />
    </div>
    <div class="project-description">
      <h3>DatePet</h3>
      <h4>HTML, CSS, JS</h4>
      <p>Portal randkowy dla zwierzaków</p>
      <div>
        <a
          class="btn"
          href="https://stevenris.github.io/DatePet/"
          target="_blank"
          >Demo</a
        >
        <a
          class="btn"
          href="https://github.com/StevenRis/DatePet"
          target="_blank"
          >Code</a
        >
      </div>
    </div>
  </div>
  
  <div class="portfolio-projects__container reverse">
    <div class="projects-image">
      <img src="images/port.png" alt="" />
    </div>
    <div class="project-description">
      <h3>Portfolio website</h3>
      <h4>Bootstrap</h4>
      <p>Strona stworzona jako portfolio fotografa</p>
      <div>
        <a
          class="btn"
          href="https://stevenris.github.io/Photographer-portfolio/"
          target="_blank"
          >Demo</a
        >
        <a
          class="btn"
          href="https://github.com/StevenRis/Photographer-portfolio"
          target="_blank"
          >Code</a
        >
      </div>
    </div>
  </div>
  
    `;
  }

  function contact(h2, para, n, p, m, btn) {
    const parag = document.querySelector(para),
      title = document.querySelector(h2),
      name = document.querySelector(n),
      phone = document.querySelector(p),
      message = document.querySelector(m),
      button = document.querySelector(btn);

    title.textContent = 'Kontakt';
    parag.textContent = 'Skontaktuj się ze mną';
    name.textContent = 'Twoje imię';
    phone.textContent = 'Telefon';
    message.textContent = 'Wiadomość';
    button.innerHTML = `
    <img src="images/send-mail.png" alt="" />Wyślij
    `;
  }

  const lang = document.querySelector('.lang-pl');

  lang.addEventListener('click', (e) => {
    e.preventDefault();
    changeWelcomeText('.box__left');

    changeTech('.skills__tech-title h2', '.skills__tech-title p');
    aboutMe('.about-me__container h2', '.about-me__container p');
    languages('.skills__lang-title h2', '.skills__lang-title p');

    createProjects();
    contact(
      '.contact-form h2',
      '.p__text',
      '.name',
      '.phone',
      '.message',
      '.btn-form'
    );
  });

  // function init() {
  //   lang.addEventListener('click', changeLanguage);
  //   window.addEventListener('popstate', newurl);
  //   history.replaceState('en', null, '#en');
  // }

  // function changeLanguage() {
  //   showpage('pl');
  //   history.pushState('pl', null, '#pl');
  // }

  // function newurl(e) {
  //   showpage(e.state);
  //   // changeWelcomeText('.box__left');

  //   console.log(history.state);
  //   console.log(e.state);
  // }

  // function showpage(current) {
  //   // databox.innerHTML = 'url-adres - page' + current;
  //   if (current == 'pl') {
  //     changeWelcomeText('.box__left');
  //   } else {
  //     console.log('huj');
  //   }
  // }

  // window.addEventListener('load', init);

  // console.log(history.state);
  // console.log(location);
});
