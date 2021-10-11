import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import MainNav from '../components/MainNav';
import { makeStyles } from '@material-ui/core/styles';
import ShortInfoUser from '../components/ShortInfoUser';
import ArticleUser from '../components/ArticleUser';
import AboutUser from '../components/AboutUser';
import ExpertiseUser from '../components/ExpertiseUser';
import ProgressBarSkill from '../components/ProgressBarSkill';
import ExperienceAndEducationUser from '../components/ExperienceAndEducationUser';
import ProfilesUser from '../components/ProfilesUser';
import AwardUser from '../components/AwardUser';
import CallMeUser from '../components/CallMeUser';
import ModalWindowFromComment from '../components/ModalWindowFromComment';
import Aos from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles((theme) => ({
  wrapperMain: {
    backgroundColor: theme.palette.background.main,
  },

  wrapperHeader: {
    position: 'relative',
    padding: '25px 25px 0 25px',
    backgroundColor: theme.palette.background.main,
    transition: 'all 0.2s ease',
    zIndex: 1,

    '@media screen and (min-width: 1024px)': {
      minWidth: '30%',
      backgroundColor: theme.palette.backgroundArticle.main,
      paddingTop: '20%',
      paddingBottom: '20%',
      height: '100%',
      padding: '0 25px',
    },
  },

  wrapperImg: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: '50%',
    minHeight: '100%',
  },

  headerImg: {
    maxWidth: '100%',
    minHeight: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: 'center',
    margin: '0 auto',
  },

  wrapperSkills: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '25px 25px 0 25px',
    backgroundColor: theme.palette.background.main,
    transition: 'all 0.2s ease',

    '@media screen and (min-width: 600px)': {
      alignItems: 'stretch',
    },
  },

  wrapperExperienceUser: {
    padding: '25px 25px 0 25px',
    backgroundColor: theme.palette.background.main,
    transition: 'all 0.2s ease',
  },

  wrapperProfileUser: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.main,
    transition: 'all 0.2s ease',

    '@media screen and (min-width: 600px)': {
      alignItems: 'stretch',
    },
  },

  wrapperAwards: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 25px 0 25px',
    backgroundColor: theme.palette.background.main,
    transition: 'all 0.2s ease',

    '@media screen and (min-width: 600px)': {
      alignItems: 'stretch',
    },
  },

  wrapperCallMeUser: {
    padding: '25px 25px 0 25px',
    backgroundColor: theme.palette.background.main,
    transition: 'all 0.2s ease',
  },

  wrapperSection: {
    display: 'flex',
    flexDirection: 'column',

    '@media screen and (min-width: 1024px)': {
      flexDirection: 'row',
      borderTop: `2px solid ${theme.palette.border.main}`,
    },
  },

  wrapperFlex: {
    display: 'flex',
    flexDirection: 'column',

    '@media screen and (min-width: 1024px)': {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
}));

const ViewHomePage = ({ statusTheme, func }) => {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Box className={classes.wrapperMain}>
      <MainNav statusTheme={statusTheme} func={func} />
      <Box className={classes.wrapperFlex}>
        <Box className={classes.wrapperHeader}>
          <Box className={classes.wrapperImg}>
            <img
              src="data:image/jpeg;base64,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"
              alt="avatar"
              className={classes.headerImg}
            />
          </Box>
        </Box>
        <ShortInfoUser />
      </Box>

      <Box data-aos="fade-right" className={classes.wrapperSection}>
        <ArticleUser title="intro" text="What I am all about" />
        <AboutUser />
      </Box>

      <Box data-aos="fade-right" className={classes.wrapperSection}>
        <ArticleUser title="expertise" text="Batman would be jealous" />
        <ExpertiseUser
          items={[
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
          ]}
        />
      </Box>

      <Box data-aos="fade-right" className={classes.wrapperSection}>
        <ArticleUser title="skills" text="Progress bars, anyone?" />
        <Box className={classes.wrapperSkills}>
          <ProgressBarSkill procent="85" title="photoshop" time="1000" />
          <ProgressBarSkill procent="70" title="git" time="1500" />
          <ProgressBarSkill procent="65" title="after effects" time="2000" />
          <ProgressBarSkill procent="60" title="css3" time="2500" />
          <ProgressBarSkill procent="40" title="vue" time="3000" />
          <ProgressBarSkill procent="60" title="react" time="3500" />
        </Box>
      </Box>

      <Box data-aos="fade-right" className={classes.wrapperSection}>
        <ArticleUser title="Experience" text="Yes. I've been around." />
        <Box className={classes.wrapperExperienceUser}>
          <ExperienceAndEducationUser
            data="2020 October - 2020 December"
            title="Productera"
            position="Junior Full-stack developer"
            location="Canada"
            text="Completed an internship as a fullstack developer in June. I learned React and Python from scratch. Learning React was successful, but Python was not. Helped maintain the main site and trained in a separate branch for the current project."
            time="1000"
          />
        </Box>
      </Box>

      <Box data-aos="fade-right" className={classes.wrapperSection}>
        <ArticleUser title="Education" text="Lazy isn`t in my vocabulary." />
        <Box className={classes.wrapperExperienceUser}>
          <ExperienceAndEducationUser
            data="2015 - 2018"
            title="Higher vocational school №7"
            position="Operator with information processing and software"
            location="Poltava, UA"
            text="Skilled worker in such software: microsoft office (Powerpoint, Word, Excel), Adobe IndeSign, Adobe Photoshop and other. Trained in the basic concept of programming. Languages viewed visual basic 1996 and pascal"
            time="1000"
          />
          <ExperienceAndEducationUser
            data="2018 - Present"
            title="KrNU named  Mikhail Ostrogradsky"
            position="Computer science (122)"
            location="Poltava, UA"
            text="Trained in the basic concept of programming. Languages viewed с++, python, java, js and php. At the moment studying the theory of artificial intelligence, project management and computer networks"
            time="1500"
          />
          <ExperienceAndEducationUser
            data="2020 March - 2020 August"
            title="Beetroot Academy"
            position="Junior Front-end developer"
            location="Poltava, UA"
            text="Skilled worker in such software: microsoft office (Powerpoint, Word, Excel), Adobe IndeSign, Adobe Photoshop and other. Trained in the basic concept of programming. Considered visual basic 1996 and pascal"
            time="2000"
          />
        </Box>
      </Box>

      <Box data-aos="fade-right" className={classes.wrapperSection}>
        <ArticleUser title="Profiles" text="Busy as usualy." />
        <Box className={classes.wrapperProfileUser}>
          <ProfilesUser
            icon="fab fa-github-alt"
            title="github"
            link="https://github.com/hellhellpnick"
            text="All my open source projects for you analyze. "
            time="1000"
          />
          <ProfilesUser
            icon="fab fa-linkedin"
            link="https://www.linkedin.com/in/alexander-vodoriz-24a27a1b5/"
            title="linkedin"
            text="All brief information about me can be found here. Also view comments about me "
            time="1500"
          />
        </Box>
      </Box>

      <Box data-aos="fade-right" className={classes.wrapperSection}>
        <ArticleUser title="Awards" text="Happy times!" />
        <Box className={classes.wrapperAwards}>
          <AwardUser
            title="1st Place at page designer"
            text="Competition for 1 place between courses of the same specialty. Best web page creator wins an award "
            time="1000"
          />
          <AwardUser
            title="Certificate Brain Basket"
            text="Certificate for completing the course from the brain basket. Languages considered: c ++, js, html, css and python"
            time="1500"
          />
        </Box>
      </Box>

      <Box data-aos="fade-right" className={classes.wrapperSection}>
        <ArticleUser title="Contact" text="Call me, maybe" />
        <Box className={classes.wrapperCallMeUser}>
          <CallMeUser
            items={[
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
            ]}
          />
        </Box>
      </Box>

      <ModalWindowFromComment
        data-aos="flip-up"
        title="Appeal to the user"
        text="The website is under construction. Please don't complain much"
      />
    </Box>
  );
};

export default ViewHomePage;
