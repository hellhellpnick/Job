import imgVue from './../assets/works/beetoor.jpg';
import imgJsonPlaceholder from './../assets/works/json_placeholder.jpg';
import imgCahee from './../assets/works/cahee.PNG';
import imgTajam from './../assets/works/tajam.PNG';
import imgContango from './../assets/works/contango.PNG';
import imgMonticello from './../assets/works/monticello.PNG';
import imgBhromaon from './../assets/works/bhromaon.PNG';
import imgITRex from './../assets/works/itRex.PNG';
import imgEmailJS from './../assets/works/emailJS.PNG';
import imgITRexMedicine from './../assets/works/itRex_medicine.PNG';
import imgGameDots from './../assets/works/gameDots.jpg';
import imgGameShooter from './../assets/works/gameShooter.jpg';
import imgGameMemory from './../assets/works/gameMemory.jpg';
import imgToDoList from './../assets/works/toDoList.jpg';
import imgTipCalculator from './../assets/works/tipCalculator.jpg';
import imgTimer from './../assets/works/timer.jpg';
import imgStickyNotes from './../assets/works/stickyNotes.jpg';
import imgRandomQuotes from './../assets/works/randomQuotes.jpg';
import imgQuotesApi from './../assets/works/quotesApi.jpg';
import imgMathKids from './../assets/works/mathKids.jpg';
import imgImageCarousel from './../assets/works/imageCarousel.jpg';
import imgHexColor from './../assets/works/hexColor.jpg';
import imgGroceryList from './../assets/works/groceryList.jpg';
import imgFlashCards from './../assets/works/flashCards.jpg';
import imgDigitalClock from './../assets/works/digitalClock.jpg';
import imgCalculator from './../assets/works/calculator.jpg';
import imgMusicPlayer from './../assets/works/musicPlayer.jpg';


const ExpertiseUserArr = [
  {
    title: 'Advanced CSS',
    text: 'Advanced use of css capabilities. Such as flex, animation, pseudo-operators and more. There is also an implementation of these things. You can look in the Work section and see for yourself',
  },
  {
    title: 'Front-end Design',
    text: 'The ability to design and implement. You can create different interactive designs with different features :). Of course, you can check it in the Work section',
  },
  {
    title: 'JavaScript',
    text: 'Quite a few features were developed, but they never came across in my repositories. Now all this can be checked in the Work section. JS is very easy to use, but I want to dive into TS in the future :)',
  },
  {
    title: 'React',
    text: 'The best library I have ever used. Gives a lot of opportunities and the implementation of the same task in different ways. You can look in the Work section and see for yourself',
  },
];

const ProgressBarSkillArr = [
  { procent: '85', title: 'photoshop' },
  { procent: '70', title: 'git' },
  { procent: '65', title: 'after effects' },
  { procent: '60', title: 'css3' },
  { procent: '40', title: 'vue' },
  { procent: '60', title: 'react' },
];

const CallMeUserArr = [
  {
    title: 'Location',
    text: 'Kremenchuk, UA',
  },

  {
    title: 'Phone',
    text: '098-131-0543',
  },

  {
    title: 'Web',
    text: 'hellhellpnick.github.io/Job',
  },

  {
    title: 'Email',
    text: 'hellhellpnick@gmail.com',
  },
];

const AwardUserArr = [
  {
    title: '1st Place at page designer',
    text: 'Competition for 1 place between courses of the same specialty. Best web page creator wins an award ',
    time: '1000',
  },
  {
    title: 'Certificate Brain Basket',
    text: 'Certificate for completing the course from the brain basket. Languages considered: c ++, js, html, css and python',
    time: '1500',
  },
];

const ProfilesUserArr = [
  {
    icon: 'fab fa-github-alt',
    title: 'github',
    link: 'https://github.com/hellhellpnick',
    text: 'All my open source projects for you analyze. ',
    time: '1000',
  },
  {
    icon: 'fab fa-linkedin',
    link: 'https://www.linkedin.com/in/alexander-vodoriz-24a27a1b5/',
    title: 'linkedin',
    text: 'All brief information about me can be found here. Also view comments about me ',
    time: '1500',
  },
];

const EducationUserArr = [
  {
    data: '2015 - 2018',
    title: 'Higher vocational school №7',
    position: 'Operator with information processing and software',
    location: 'Poltava, UA',
    text: 'Skilled worker in such software: microsoft office (Powerpoint, Word, Excel), Adobe IndeSign, Adobe Photoshop and other. Trained in the basic concept of programming. Languages viewed visual basic 1996 and pascal',
    time: '1000',
  },
  {
    data: '2018 - Present',
    title: 'KrNU named  Mikhail Ostrogradsky',
    position: 'Computer science (122)',
    location: 'Poltava, UA',
    text: 'Trained in the basic concept of programming. Languages viewed с++, python, java, js and php. At the moment studying the theory of artificial intelligence, project management and computer networks',
    time: '1500',
  },
  {
    data: '2020 March - 2020 August',
    title: 'Beetroot Academy',
    position: 'Junior Front-end developer',
    location: 'Poltava, UA',
    text: 'Trained in the basic concepts of Front - end development. The learning came from scratch HTML, CSS, JS and ended with Vue. The final project of the courses was a video search site',
    time: '2000',
  },
];

const ExperienceUserArr = [
  {
    data: '2020 October - 2020 December',
    title: 'Productera',
    position: 'Junior Full-stack developer',
    location: 'Canada',
    text: 'Completed an internship as a fullstack developer in June. I learned React and Python from scratch. Learning React was successful, but Python was not. Helped maintain the main site and trained in a separate branch for the current project.',
    time: '1000',
  },
  {
    data: '2021 September - 2021 December',
    title: 'It-Rex',
    position: 'Junior Front-end developer',
    location: 'Kyiv',
    text: 'Creation of a website for medicine using various technologies Formic, yup, Redux and others. The essence of the project is to check the ability of a candidate for the position of Front-end developer in the company.',
    time: '1000',
  },
];

const ListWorks = [
  {
    title: 'Search video',
    tag: 'project-beetroot',
    description: 'Web-app',
    text: 'Final work on courses from Beetroot-Academy. It was created in a month and on the Vue framework',
    img: imgVue,
    url: 'https://hellhellpnick.github.io/project-beetroot/',
    typeWork: 'vue',
    local: false,
    truePath: '',
  },
  {
    title: 'Music Player',
    tag: 'MusicPlayer',
    description: 'Web-app',
    text: 'It was a test task for an interview. The essence of the task is to get information from the network and receive encrypted video',
    img: imgMusicPlayer,
    url: '/Job/works/MusicPlayer',
    typeWork: 'js',
    local: true,
    truePath: `${document.location.protocol}//${document.location.host}/Job/works/musicPlayer/index.html`,
  },
  {
    title: 'Work with JSON Placeholder',
    tag: '-PartsTech',
    description: 'Web-app',
    text: 'Initially, it was a test task for an interview, and now it has become a pet-project.',
    img: imgJsonPlaceholder,
    url: 'https://hellhellpnick.github.io/-PartsTech',
    typeWork: 'react',
    local: false,
    truePath: '',
  },
  {
    title: 'Work with API and React',
    tag: 'itrex-training',
    description: 'Web-app',
    text: 'It was a task for an courses. Technologies used: Redux, React, Formik, Jest and others',
    img: imgITRexMedicine,
    url: 'https://hellhellpnick.github.io/itrex-training/',
    typeWork: 'react',
    local: false,
    truePath: '',
  },
  {
    title: 'Work with EmailJS-com and React',
    tag: 'reactForm',
    description: 'Web-app',
    text: 'It was a test task for an interview. The purpose of the assignment was to demonstrate React skills and interaction with the library.',
    img: imgEmailJS,
    url: '/Job/works/reactForm',
    typeWork: 'react',
    local: false,
    truePath: `${document.location.protocol}//${document.location.host}/Job/works/reactForm/index.html`,
  },
  {
    title: 'Cahee',
    tag: 'Cahee',
    description: 'Web-app',
    text: 'My first website created. It used clean markup. This site was created during the training courses at the Beetroot-Academy',
    img: imgCahee,
    url: '/Job/works/Cahee',
    typeWork: 'layout',
    local: true,
    truePath: `${document.location.protocol}//${document.location.host}/Job/works/cahee/index.html`,
  },
  {
    title: 'Tajam',
    tag: 'Tajam',
    description: 'Web-app',
    text: 'Created my site for the closure of the subject of the university. The layout was found on the Internet',
    img: imgTajam,
    url: '/Job/works/Tajam',
    typeWork: 'layout',
    local: true,
    truePath: `${document.location.protocol}//${document.location.host}/Job/works/tajam/index.html`,
  },
  {
    title: 'Contango',
    tag: 'Contango',
    description: 'Web-app',
    text: 'Test task of one of the vacancies. It was required to create a website with a custom slider and get data from the Network',
    img: imgContango,
    url: '/Job/works/Contango',
    typeWork: 'layout',
    local: true,
    truePath: `${document.location.protocol}//${document.location.host}/Job/works/contango/index.html`,
  },
  {
    title: 'Monticello',
    tag: 'Monticello',
    description: 'Web-app',
    text: 'A test task for a module in Beetroot-Academy courses to confirm your knowledge. Start learning JS',
    img: imgMonticello,
    url: '/Job/works/Monticello',
    typeWork: 'layout',
    local: true,
    truePath: `${document.location.protocol}//${document.location.host}/Job/works/monticello/index.html`,
  },
  {
    title: 'Bhromaon',
    tag: 'Bhromaon',
    description: 'Web-app',
    text: 'A test task for a module in Beetroot-Academy courses to confirm your knowledge',
    img: imgBhromaon,
    url: '/Job/works/Bhromaon',
    typeWork: 'layout',
    local: true,
    truePath: `${document.location.protocol}//${document.location.host}/Job/works/bhromaon/index.html`,
  },
  {
    title: 'ItRex-JSON',
    tag: 'itRex',
    description: 'Web-app',
    text: 'It was a test task for an interview. After the successful completion of the assignment, he was admitted to the courses. The essence of the task is to use the JSON server and work with it',
    img: imgITRex,
    url: '/Job/works/itRex',
    typeWork: 'js',
    local: true,
    truePath: `${document.location.protocol}//${document.location.host}/Job/works/itRex/index.html`,
  },
  {
    title: 'To do list',
    tag: 'toDoList',
    description: 'Web-app',
    text: 'It was a test task for an interview. The essence of the task is to get information from the network and receive encrypted video',
    img: imgToDoList,
    url: '/Job/works/toDoList',
    typeWork: 'js',
    local: true,
    truePath: `${document.location.protocol}//${document.location.host}/Job/works/toDoList/index.html`,
  },
  {
    title: 'Tip calculator',
    tag: 'TipCalculator',
    description: 'Web-app',
    text: 'It was a test task for an interview. The essence of the task is to get information from the network and receive encrypted video',
    img: imgTipCalculator,
    url: '/Job/works/TipCalculator',
    typeWork: 'js',
    local: true,
    truePath: `${document.location.protocol}//${document.location.host}/Job/works/tipCalculator/index.html`,
  },
  {
    title: 'Timer',
    tag: 'Timer',
    description: 'Web-app',
    text: 'It was a test task for an interview. The essence of the task is to get information from the network and receive encrypted video',
    img: imgTimer,
    url: '/Job/works/Timer',
    typeWork: 'js',
    local: true,
    truePath: `${document.location.protocol}//${document.location.host}/Job/works/timer/index.html`,
  },
  {
    title: 'Sticky Notes',
    tag: 'StickyNotes',
    description: 'Web-app',
    text: 'It was a test task for an interview. The essence of the task is to get information from the network and receive encrypted video',
    img: imgStickyNotes,
    url: '/Job/works/StickyNotes',
    typeWork: 'js',
    local: true,
    truePath: `${document.location.protocol}//${document.location.host}/Job/works/stickyNotes/index.html`,
  },
  {
    title: 'Random Quotes',
    tag: 'RandomQuotes',
    description: 'Web-app',
    text: 'It was a test task for an interview. The essence of the task is to get information from the network and receive encrypted video',
    img: imgRandomQuotes,
    url: '/Job/works/RandomQuotes',
    typeWork: 'js',
    local: true,
    truePath: `${document.location.protocol}//${document.location.host}/Job/works/randomQuotes/index.html`,
  },
  {
    title: 'Quotes Api',
    tag: 'QuotesApi',
    description: 'Web-app',
    text: 'It was a test task for an interview. The essence of the task is to get information from the network and receive encrypted video',
    img: imgQuotesApi,
    url: '/Job/works/QuotesApi',
    typeWork: 'js',
    local: true,
    truePath: `${document.location.protocol}//${document.location.host}/Job/works/quotesApi/index.html`,
  },
  {
    title: 'Math 4 Kids',
    tag: 'MathKids',
    description: 'Web-app',
    text: 'It was a test task for an interview. The essence of the task is to get information from the network and receive encrypted video',
    img: imgMathKids,
    url: '/Job/works/MathKids',
    typeWork: 'js',
    local: true,
    truePath: `${document.location.protocol}//${document.location.host}/Job/works/mathKids/index.html`,
  },
  {
    title: 'Image Carousel',
    tag: 'ImageCarousel',
    description: 'Web-app',
    text: 'It was a test task for an interview. The essence of the task is to get information from the network and receive encrypted video',
    img: imgImageCarousel,
    url: '/Job/works/ImageCarousel',
    typeWork: 'js',
    local: true,
    truePath: `${document.location.protocol}//${document.location.host}/Job/works/imageCarousel/index.html`,
  },
  {
    title: 'Hex Color',
    tag: 'Hex Color',
    description: 'Web-app',
    text: 'It was a test task for an interview. The essence of the task is to get information from the network and receive encrypted video',
    img: imgHexColor,
    url: '/Job/works/HexColor',
    typeWork: 'js',
    local: true,
    truePath: `${document.location.protocol}//${document.location.host}/Job/works/HexColor/index.html`,
  },
  {
    title: 'Grocery List',
    tag: 'GroceryList',
    description: 'Web-app',
    text: 'It was a test task for an interview. The essence of the task is to get information from the network and receive encrypted video',
    img: imgGroceryList,
    url: '/Job/works/GroceryList',
    typeWork: 'js',
    local: true,
    truePath: `${document.location.protocol}//${document.location.host}/Job/works/groceryList/index.html`,
  },
  {
    title: 'Flash Cards',
    tag: 'FlashCards',
    description: 'Web-app',
    text: 'It was a test task for an interview. The essence of the task is to get information from the network and receive encrypted video',
    img: imgFlashCards,
    url: '/Job/works/FlashCards',
    typeWork: 'js',
    local: true,
    truePath: `${document.location.protocol}//${document.location.host}/Job/works/flashCards/index.html`,
  },
  {
    title: 'Digital Clock',
    tag: 'DigitalClock',
    description: 'Web-app',
    text: 'It was a test task for an interview. The essence of the task is to get information from the network and receive encrypted video',
    img: imgDigitalClock,
    url: '/Job/works/DigitalClock',
    typeWork: 'js',
    local: true,
    truePath: `${document.location.protocol}//${document.location.host}/Job/works/digitalClock/index.html`,
  },
  {
    title: 'Calculator',
    tag: 'Calculator',
    description: 'Web-app',
    text: 'It was a test task for an interview. The essence of the task is to get information from the network and receive encrypted video',
    img: imgCalculator,
    url: '/Job/works/Calculator',
    typeWork: 'js',
    local: true,
    truePath: `${document.location.protocol}//${document.location.host}/Job/works/calculator/index.html`,
  },
  {
    title: 'Game Dots',
    tag: 'DotsPhaser',
    description: 'Web-app',
    text: 'It was a test task for an interview. The essence of the task is to get information from the network and receive encrypted video',
    img: imgGameDots,
    url: '/Job/works/DotsPhaser',
    typeWork: 'game',
    local: true,
    truePath: `${document.location.protocol}//${document.location.host}/Job/works/dotsPhaser/index.html`,
  },
  {
    title: 'Game Shooter',
    tag: 'ShooterPhaser',
    description: 'Web-app',
    text: 'It was a test task for an interview. The essence of the task is to get information from the network and receive encrypted video',
    img: imgGameShooter,
    url: '/Job/works/ShooterPhaser',
    typeWork: 'game',
    local: true,
    truePath: `${document.location.protocol}//${document.location.host}/Job/works/shooterPhaser/index.html`,
  },
  {
    title: 'Game Memory Card',
    tag: 'MemoryCardPhaser',
    description: 'Web-app',
    text: 'It was a test task for an interview. The essence of the task is to get information from the network and receive encrypted video',
    img: imgGameMemory,
    url: '/Job/works/MemoryCardPhaser',
    typeWork: 'game',
    local: true,
    truePath: `${document.location.protocol}//${document.location.host}/Job/works/memoryCardPhaser/index.html`,
  },
];

export {
  ExperienceUserArr,
  ExpertiseUserArr,
  ProgressBarSkillArr,
  CallMeUserArr,
  AwardUserArr,
  ProfilesUserArr,
  EducationUserArr,
  ListWorks,
};
