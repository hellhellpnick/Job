import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles((theme) => ({
  wrapperProfiles: {
    padding: '25px 25px 0 25px ',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',

    '@media screen and (min-width: 600px)': {
      width: '50%',
      paddingRight: 50,
    },
  },

  wrapperInfo: {
    display: 'flex',
    flexDirection: 'column',
  },

  iconProfileUser: {
    marginRight: 20,
    color: theme.palette.iconColor.primary,
    fontSize: 25,
  },

  titleProfileUser: {
    marginBottom: 10,
    fontSize: 20,
    color: theme.palette.text.second,
    textTransform: 'uppercase',
  },

  textProfileUser: {
    marginBottom: 10,
    fontSize: 14,
    lineHeight: '1.5',
    color: theme.palette.text.primary,
  },

  linkProfileUser: {
    cursor: 'pointer',
    transition: 'all 0.2s ease',

    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
}));

const ProfilesUser = ({ icon, link, title, text, time }) => {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Box className={classes.wrapperProfiles} data-aos="fade-up" data-aos-duration={time}>
      <a href={link} alt={title} className={classes.linkProfileUser}>
        <i className={`${icon} ${classes.iconProfileUser}`}></i>
      </a>
      <Box className={classes.wrapperInfo}>
        <h2 className={classes.titleProfileUser}>{title}</h2>
        <p className={classes.textProfileUser}>{text}</p>
      </Box>
    </Box>
  );
};

export default ProfilesUser;
