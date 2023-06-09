// ------------- MOBILE MENU ---------------

const menuContainer = document.querySelector('#mobile-menu-hidden');
const hamburguer = document.getElementById('hamburguer');
const closeIcon = document.getElementById('closing-Icon');
const menuList = document.querySelector('.list-menu-mobile');
const menuListPortfolio = document.querySelector('.menu-mobile-portfolio');
const menuListContact = document.querySelector('.menu-mobile-contact');
const menuListAbout = document.querySelector('.menu-mobile-about');

function displayMobileMenu() {
  menuContainer.classList.remove('hidden');
  menuList.classList.remove('hidden');
}
hamburguer.addEventListener('click', displayMobileMenu);

function closeMobileMenu() {
  menuContainer.classList.add('hidden');
  menuList.classList.add('hidden');
}
menuListPortfolio.addEventListener('click', closeMobileMenu);
menuListContact.addEventListener('click', closeMobileMenu);
menuListAbout.addEventListener('click', closeMobileMenu);
closeIcon.addEventListener('click', closeMobileMenu);

// ------------- DYNAMIC HTML ---------------

const cardData = [
  {
    project: '0',
    name: 'To Do List',
    role: ['MICROVERSE', 'Full Stack Dev', '2023'],
    description: 'This project is about a generation of a To Do List where the user can add, edit and remove items through a user-friendly interface.',
    techskills: ['JavaScript', 'Webpack', 'CSS', 'Local Storage'],
    image: 'src="Images_Background/ToDoList_Screenshot.png"',
    liveButton: 'https://hfg43.github.io/ToDoList/',
    sourceButton: 'https://github.com/HFG43/ToDoList',
  },
  {
    project: '1',
    name: 'Forum Invitation',
    role: ['MICROVERSE', 'Full Stack Dev', '2023'],
    description: 'Applied responsive design, the use of best practicies for HTML, CSS & JavaScript.',
    techskills: ['HTML', 'CSS','JavaScript', 'RWD'],
    image: 'src="Images_Background/Capstone1_Screenshot.png"',
    liveButton: 'https://hfg43.github.io/Capstone1/',
    sourceButton: 'https://github.com/HFG43/Capstone1',
  },
  {
    project: '2',
    name: 'Tonic',
    role: ['CANOPY', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techskills: ['HTML', 'CSS', 'Ruby on Rails', 'JavaScript'],
    image: 'src="Images_Background/Snapshoot Portfolio 3_Ballerina.svg"',
    liveButton: '#',
    sourceButton: '#',
  },
  {
    project: '3',
    name: 'Multi-Post Stories',
    role: ['CANOPY', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techskills: ['HTML', 'CSS', 'Ruby on Rails', 'JavaScript'],
    image: 'src="Images_Background/Snapshoot Portfolio 4_Art Printing.svg"',
    liveButton: '#',
    sourceButton: '#',
  },
];

const cardContainer = document.querySelector('.dynamic-card-container');

function loadCard(item) {
  cardContainer.innerHTML += `
<article id="card-work-1" class="mobile-card">
          <img
            class="card-snapshot"
            ${cardData[item].image}
            alt="Project Snapshot"
          />
          <div class="project-description-block">
            <h2 class="card-title mobile-display">${cardData[item].name}</h2>
            <h2 class="card-title big-size">${cardData[item].name}</h2>
            <ul class="project-role-detail">
              <li class="project-role-client mobile-display">${cardData[item].role[0]}</li>
              <li class="project-role-client big-size">${cardData[item].role[0]}</li>
              <li>
                <i class="fa-solid fa-circle fa-2xs project-role-counter"></i>
              </li>
              <li class="mobile-display">${cardData[item].role[1]}</li>
              <li class="big-size weight-desktop">${cardData[item].role[1]}</li>
              <li>
                <i class="fa-solid fa-circle fa-2xs project-role-counter"></i>
              </li>
              <li class="weight-desktop">${cardData[item].role[2]}</li>
            </ul>
            <p class="project-description-paragraph mobile-display">
            ${cardData[item].description}
            </p>
            <p class="project-description-paragraph big-size">
            ${cardData[item].description}
            </p>
            <ul class="project-language-list">
              <li>${cardData[item].techskills[0]}</li>
              <li>${cardData[item].techskills[1]}</li>
              <li class="big-size">${cardData[item].techskills[2]}</li>
              <li>${cardData[item].techskills[3]}</li>
            </ul>
            <div class="button-container">
              <button type="button" id="${item}" class="see-project-button get-button mobile-display">See project</button>
              <button type="button" id="${item}" class="facebook360-button-desktop big-size get-button">See project</button>
              </div>
          </div>
        </article>`;
}

for (let item = 0; item < cardData.length; item += 1) {
  loadCard(item);
}

// ------------- DYNAMIC POP UP --------------- //

const popUpContainer = document.getElementById('mobilepopup-container');
const buttons = document.querySelectorAll('.get-button');

buttons.forEach((item) => {
  item.addEventListener('click', () => {
    const buttonId = item.id;
    const uploadMobileCard = cardData[buttonId];
    const mobilePopUp = document.createElement('div');
    mobilePopUp.id = 'mobilePopUpContainer';
    mobilePopUp.innerHTML = `
<div class="subcontainer-mobile-popup">
  <div class="title-close-mobile-popup-container">
     <h2 class="mobile-popup-card-title">${uploadMobileCard.name}</h2>
    <div id="close-mobile-popup">
    <ul>
      <li><span><i class="fa-solid fa-xmark fa-xl cross-popup"></i></span></li>
    </ul>
    </div>        
  </div>

  <div class="mobile-pop-up-role-container">
    <ul class="project-role-detail">
      <li class="project-role-client mobile-popup-role-fontweight">${uploadMobileCard.role[0]}</li>
      <li>
        <i class="fa-solid fa-circle fa-2xs project-role-counter"></i>
      </li>
      <li>${uploadMobileCard.role[1]}</li>
      <li>
        <i class="fa-solid fa-circle fa-2xs project-role-counter"></i>
      </li>
      <li class="weight-desktop">${uploadMobileCard.role[2]}</li>
    </ul>
  </div>

  <div class="image-container-mobile-popup">
    <img class="mobile-popup-image" ${uploadMobileCard.image}/>
  </div>

  <div class="desktop-bottom-container">

    <div class="desktop-pop-up-paragraph-container">
      <p class="mobile-popup-paragraph">
        ${uploadMobileCard.description}
      </p>
    </div>
  
    <div class="desktop-popup-buttons-container">
      <ul class="project-language-list mobile-popup-tech-margin desktop-popup-tech-margin">
        <li>${uploadMobileCard.techskills[0]}</li>
        <li>${uploadMobileCard.techskills[1]}</li>
        <li class="big-size">${uploadMobileCard.techskills[2]}</li>
        <li>${uploadMobileCard.techskills[3]}</li>
      </ul>

      <div class="line-separation">
        <img src="./Images_Background/Devider.png"/>
      </div>

      <div class="mobile-popup-button-container">
        <button class="see-project-button-pop-up" type="button" href="${uploadMobileCard.liveButton}">
          See live
          <img class="see-live-icon" src="./Images_Background/see Live Icon.png"/>
        </button>
     
        <button class="see-project-button-pop-up" type="button" href="${uploadMobileCard.sourceButton}">
          See source 
          <img class="github-see-source-icon" src="./Images_Background/See Source Icon -GitHub.png"/>
        </button>
      </div>  
    </div>   
  </div>
  <div class="closing-line-container">
    <img
      class="closing-line"
      src="Images_Background/Shape.png"
      alt="closing-line"
    />
  </div>
</div>  
`;
    popUpContainer.appendChild(mobilePopUp);

    const closePopUpButton = document.getElementById('close-mobile-popup');
    function closePopUp() {
      popUpContainer.removeChild(mobilePopUp);
    }
    closePopUpButton.addEventListener('click', closePopUp);
  });
});

// ------------- CLIENT SIDE VALIDATION ---------------

const inputMail = document.querySelector('#mail');
const regex = /[A-Z]/g;

function verifyMail() {
  if ((inputMail.value.match(regex)) != null) {
    inputMail.setCustomValidity('We were not able to receive your comment, as you are not aloud to use capital letters in your email!');
  } else {
    inputMail.setCustomValidity('');
  }
}
inputMail.addEventListener('input', verifyMail);

// =========  SAVE DATA FORM ==========

const inputMessage = document.getElementById('message');
const inputName = document.getElementById('name');
const dataStored = {
  name: '',
  mail: '',
  message: '',
};

function getData() {
  if (localStorage.length > 0) {
    const obteindData = localStorage.getItem('dataStored');
    const returnedData = JSON.parse(obteindData);
    dataStored.name = returnedData.name;
    dataStored.mail = returnedData.mail;
    dataStored.message = returnedData.message;
    inputMail.value = dataStored.mail;
    inputName.value = dataStored.name;
    inputMessage.value = dataStored.message;
  }
}
window.addEventListener('load', getData);

function storeData() {
  localStorage.setItem('name', dataStored.name.value);
  localStorage.setItem('mail', dataStored.mail.value);
  localStorage.setItem('message', dataStored.message.value);
  dataStored.name = inputName.value;
  dataStored.mail = inputMail.value;
  dataStored.message = inputMessage.value;
  localStorage.setItem('dataStored', JSON.stringify(dataStored));
}
inputName.addEventListener('keydown', storeData);
inputMail.addEventListener('keydown', storeData);
inputMessage.addEventListener('keydown', storeData);
