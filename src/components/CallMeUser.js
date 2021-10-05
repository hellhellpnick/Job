import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapperInfo: {
    borderBottom: `1px solid ${theme.palette.border.main}`,
  },

  titleAward: {
    fontSize: 16,
    color: theme.palette.text.main,
    fontWeight: 600,
    marginBottom: 10,
  },

  wrapperCallMeInfo: {
    paddingBottom: 25,
  },

  textAward: {
    fontSize: 14,
    color: theme.palette.text.primary,
  },

  wrapperNameUser: {
    paddingBottom: 25,
    paddingTop: 50,
    marginBottom: 25,
  },

  titleFirstName: {
    fontSize: '36px',
    color: theme.palette.text.main,
    lineHeight: '1.5',
  },

  titleLastName: {
    position: 'relative',
    top: -30,
    fontSize: '70px',
    color: theme.palette.text.second,
    lineHeight: '1.5',
  },

  wrapperSocial: {
    position: 'relative',
    top: '-70px',
    listStyle: 'none',
    display: 'flex',
  },

  socialBtn: {
    cursor: 'pointer',
    marginRight: '6px',
    width: '33px',
    height: '33px',
    backgroundColor: theme.palette.iconBack.main,
    border: `1px solid ${theme.palette.iconBack.main}`,
  },

  socialLink: {
    display: 'block',
    textAlign: 'center',
    width: '33px',
    height: '33px',
    fontSize: '.8rem !important',
    lineHeight: '2.7 !important',
    borderRadius: '2px',
    textDecoration: 'none',
  },

  socialIcon: {
    color: '#c6c6c6',
    fontSize: '1.5em',
    lineHeight: '0.75em',
    verticalAlign: '-15%',
  },
}));

const CallMeUser = ({ items }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapperCallMeUser}>
      <Box className={classes.wrapperInfo}>
        {items.map((item, index) => {
          return (
            <Box key={index} className={classes.wrapperCallMeInfo}>
              <h2 className={classes.titleAward}>{item.title}</h2>
              <p className={classes.textAward}>{item.text}</p>
            </Box>
          );
        })}
      </Box>
      <Box className={classes.wrapperNameUser}>
        <h3 className={classes.titleFirstName}>Alexander</h3>
        <h2 className={classes.titleLastName}>Vodorez</h2>
      </Box>
      <ul className={classes.wrapperSocial}>
        <li className={classes.socialBtn}>
          <a href="http" className={classes.socialLink}>
            <i className={`fab fa-facebook-f ${classes.socialIcon} `}></i>
          </a>
        </li>

        <li className={classes.socialBtn}>
          <a href="http" className={classes.socialLink}>
            <i className={`fab fa-github ${classes.socialIcon} `}></i>
          </a>
        </li>

        <li className={classes.socialBtn}>
          <a href="http" className={classes.socialLink}>
            <i className={`fas fa-paper-plane ${classes.socialIcon} `}></i>
          </a>
        </li>
      </ul>
    </Box>
  );
};

export default CallMeUser;
