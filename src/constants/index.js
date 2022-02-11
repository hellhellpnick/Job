import imgVue from './../assets/works/beetoor.jpg';
import imgJsonPlaceholder from './../assets/works/json_placeholder.jpg';
import imgCahee from './../assets/works/cahee.PNG';
import imgTajam from './../assets/works/tajam.PNG';
import imgContango from './../assets/works/contango.PNG';
import imgMonticello from './../assets/works/monticello.PNG';
import imgBhromaon from './../assets/works/bhromaon.PNG';
import imgITRex from './../assets/works/itRex.PNG';
import imgAppside from './../assets/works/appside.PNG';
import imgEmailJS from './../assets/works/emailJS.PNG';
import imgITRexMedicine from './../assets/works/itRex_medicine.PNG';

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
    text: 'Poltave, UA',
  },

  {
    title: 'Phone',
    text: '098-131-xxxx',
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
    titl: 'github',
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
    text: 'Skilled worker in such software: microsoft office (Powerpoint, Word, Excel), Adobe IndeSign, Adobe Photoshop and other. Trained in the basic concept of programming. Considered visual basic 1996 and pascal',
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
];

const ListVue = [
  {
    id: 1,
    title: 'Search video',
    description: 'Web-app',
    text: 'Final work on courses from Beetroot-Academy. It was created in a month and on the Vue framework',
    img: imgVue,
    url: 'https://hellhellpnick.github.io/project-beetroot/',
  },
];

const ListReact = [
  {
    id: 2,
    title: 'Work with JSON Placeholder',
    description: 'Web-app',
    text: 'Initially, it was a test task for an interview, and now it has become a pet-project.',
    img: imgJsonPlaceholder,
    url: 'json_placeholder',
  },
  {
    id: 3,
    title: 'Work with API and React',
    description: 'Web-app',
    text: 'It was a task for an courses. Technologies used: Redux, React, Formik, Jest and others',
    img: imgITRexMedicine,
    url: 'https://hellhellpnick.github.io/itrex-training/',
  },
  {
    id: 4,
    title: 'Work with EmailJS-com and React',
    description: 'Web-app',
    text: 'It was a test task for an interview. The purpose of the assignment was to demonstrate React skills and interaction with the library.',
    img: imgEmailJS,
    url: 'https://hellhellpnick.github.io/react-form/',
  },
];

const ListLayout = [
  {
    id: 5,
    title: 'Cahee',
    description: 'Web-app',
    text: 'My first website created. It used clean markup. This site was created during the training courses at the Beetroot-Academy',
    img: imgCahee,
    url: 'https://hellhellpnick.github.io/Cahee/',
  },
  {
    id: 6,
    title: 'Tajam',
    description: 'Web-app',
    text: 'Created my site for the closure of the subject of the university. The layout was found on the Internet',
    img: imgTajam,
    url: 'https://hellhellpnick.github.io/front-end/',
  },
  {
    id: 7,
    title: 'Contango',
    description: 'Web-app',
    text: 'Test task of one of the vacancies. It was required to create a website with a custom slider and get data from the Network',
    img: imgContango,
    url: 'https://hellhellpnick.github.io/contango/',
  },
  {
    id: 8,
    title: 'Monticello',
    description: 'Web-app',
    text: 'A test task for a module in Beetroot-Academy courses to confirm your knowledge. Start learning JS',
    img: imgMonticello,
    url: 'https://hellhellpnick.github.io/monticello/',
  },
  {
    id: 9,
    title: 'Bhromaon',
    description: 'Web-app',
    text: 'A test task for a module in Beetroot-Academy courses to confirm your knowledge',
    img: imgBhromaon,
    url: 'https://hellhellpnick.github.io/bhromaon/',
  },
  {
    id: 10,
    title: 'ItRex-JSON',
    description: 'Web-app',
    text: 'It was a test task for an interview. After the successful completion of the assignment, he was admitted to the courses. The essence of the task is to use the JSON server and work with it',
    img: imgITRex,
    url: 'https://hellhellpnick.github.io/itRex/',
  },
  {
    id: 11,
    title: 'Appside-Network',
    description: 'Web-app',
    text: 'It was a test task for an interview. The essence of the task is to get information from the network and receive encrypted video',
    img: imgAppside,
    url: 'https://hellhellpnick.github.io/appside/',
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
  ListVue,
  ListReact,
  ListLayout,
};
