import { useEffect } from 'react';
import { Box } from '@material-ui/core';
import AboutUser from './AboutUser/AboutUser';
import ArticleUser from './ArticleUser/ArticleUser';
import AwardUser from './AwardUser/AwardUser';
import ExperienceAndEducationUser from './ExperienceAndEducationUser/ExperienceAndEducationUser';
import ExpertiseUser from './ExpertiseUser/ExpertiseUser';
import ProfilesUser from './ProfileUser/ProfilesUser';
import ProgressBarSkill from './ProgressBarSkill/ProgressBarSkill';
import ShortInfoUser from './ShortInfoUser/ShortInfoUser';

import {
  ExpertiseUserArr,
  ProgressBarSkillArr,
  AwardUserArr,
  ProfilesUserArr,
  EducationUserArr,
  ExperienceUserArr,
} from '../../constants';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useStyles} from './Home.styled'


const Home = () => {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <Box >
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

      
    </Box>
  );
};

export default Home;
