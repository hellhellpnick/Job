import React, { useEffect } from 'react';
import { Box, Typography, Link } from '@material-ui/core';
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
    ...theme.typography.h2,
    marginBottom: 10,
    fontSize: 20,
    color: theme.palette.text.second,
    textTransform: 'uppercase',
  },

  textProfileUser: {
    ...theme.typography.text,
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
