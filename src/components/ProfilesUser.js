import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapperProfiles: {
    padding: '25px 25px 0 25px ',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
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

const ProfilesUser = ({ icon, link, title, text }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapperProfiles}>
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
