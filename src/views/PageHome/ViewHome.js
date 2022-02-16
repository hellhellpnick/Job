import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import {
  AboutUser,
  ArticleUser,
  AwardUser,
  CallMeUser,
  ExperienceAndEducationUser,
  ExpertiseUser,
  ProfilesUser,
  ProgressBarSkill,
  ShortInfoUser,
} from './../../components/HomePage';
import {
  ExpertiseUserArr,
  ProgressBarSkillArr,
  CallMeUserArr,
  AwardUserArr,
  ProfilesUserArr,
  EducationUserArr,
  ExperienceUserArr,
} from '../../constants';
import Aos from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles((theme) => ({
  wrapperMain: {
    backgroundColor: theme.palette.background.main,
  },

  wrapperHeader: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    maxWidth: '350px',
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '100%',
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

const ViewHome = () => {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <Box className={classes.wrapperMain}>
      <Box className={classes.wrapperFlex}>
        <Box className={classes.wrapperHeader}>
          <Box className={classes.wrapperImg}>
            <img
              src="https://www.shareicon.net/data/512x512/2017/01/06/868320_people_512x512.png"
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
        <ExpertiseUser items={ExpertiseUserArr} />
      </Box>

      <Box data-aos="fade-right" className={classes.wrapperSection}>
        <ArticleUser title="skills" text="Progress bars, anyone?" />
        <Box className={classes.wrapperSkills}>
          {ProgressBarSkillArr &&
            ProgressBarSkillArr.map((item, index) => <ProgressBarSkill item={item} key={index} />)}
        </Box>
      </Box>

      <Box data-aos="fade-right" className={classes.wrapperSection}>
        <ArticleUser title="Experience" text="Yes. I've been around." />
        <Box className={classes.wrapperExperienceUser}>
          {ExperienceUserArr &&
            ExperienceUserArr.map((item, index) => (
              <ExperienceAndEducationUser item={item} key={index} />
            ))}
        </Box>
      </Box>

      <Box data-aos="fade-right" className={classes.wrapperSection}>
        <ArticleUser title="Education" text="Lazy isn`t in my vocabulary." />
        <Box className={classes.wrapperExperienceUser}>
          {EducationUserArr &&
            EducationUserArr.map((item, index) => (
              <ExperienceAndEducationUser item={item} key={index} />
            ))}
        </Box>
      </Box>

      <Box data-aos="fade-right" className={classes.wrapperSection}>
        <ArticleUser title="Profiles" text="Busy as usualy." />
        <Box className={classes.wrapperProfileUser}>
          {ProfilesUserArr &&
            ProfilesUserArr.map((item, index) => <ProfilesUser item={item} key={index} />)}
        </Box>
      </Box>

      <Box data-aos="fade-right" className={classes.wrapperSection}>
        <ArticleUser title="Awards" text="Happy times!" />
        <Box className={classes.wrapperAwards}>
          {AwardUserArr && AwardUserArr.map((item, index) => <AwardUser item={item} key={index} />)}
        </Box>
      </Box>

      <Box data-aos="fade-right" className={classes.wrapperSection}>
        <ArticleUser title="Contact" text="Call me!" />
        <Box className={classes.wrapperCallMeUser}>
          <CallMeUser items={CallMeUserArr} />
        </Box>
      </Box>
    </Box>
  );
};

export default ViewHome;
