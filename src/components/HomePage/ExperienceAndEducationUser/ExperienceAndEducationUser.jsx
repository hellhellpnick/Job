import { useEffect } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useStyles } from './ExperienceAndEducationUser.styled';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ExperienceAndEducationUser = ({ item }) => {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Box className={classes.wrapperExperience} data-aos="fade-up" data-aos-duration={item.time}>
      <Box className={classes.wrapperExperienceInterior}>
        <Typography className={classes.titleData} component="h4" variant="h5">
          {item.data}
        </Typography>
        <Typography className={classes.titleWork} component="h2" variant="h3">
          {item.title}
        </Typography>
        <p className={classes.titlePosition}>{item.position}</p>
        <p className={classes.titleData}>{item.location}</p>
        <p className={classes.textInfo}>{item.text}</p>
      </Box>
      <Box className={classes.wrapperDot}>
        <Box className={classes.dot}></Box>
      </Box>
    </Box>
  );
};

export default ExperienceAndEducationUser;
