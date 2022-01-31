import React, { useEffect } from 'react';
import { Box, Typography, Link } from '@material-ui/core';
import { useStyles } from './ProfilesUser.styled';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ProfilesUser = ({ item }) => {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Box className={classes.wrapperProfiles} data-aos="fade-up" data-aos-duration={item.time}>
      <Link href={item.link} alt={item.title} className={classes.linkProfileUser}>
        <i className={`${item.icon} ${classes.iconProfileUser}`}></i>
      </Link>
      <Box className={classes.wrapperInfo}>
        <Typography className={classes.titleProfileUser} component="h2" variant="h3">
          {item.title}
        </Typography>
        <p className={classes.textProfileUser}>{item.text}</p>
      </Box>
    </Box>
  );
};

export default ProfilesUser;
