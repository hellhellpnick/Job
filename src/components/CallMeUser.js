import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles((theme) => ({
  wrapperInfo: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottom: `1px solid ${theme.palette.border.main}`,
  },

  wrapperCallMeUser: {
    width: '100%',
  },

  titleAward: {
    fontSize: 16,
    color: theme.palette.text.main,
    fontWeight: 600,
    marginBottom: 10,
  },

  wrapperCallMeInfo: {
    paddingBottom: 25,
    width: '100%',

    '@media screen and (min-width: 600px)': {
      paddingRight: 50,
      width: '50%',
    },

    '@media screen and (min-width: 1024px)': {
      width: '25%',
      paddingRight: 0,
    },
  },

  textAward: {
    fontSize: 14,
    color: theme.palette.text.primary,
  },

  wrapperNameUser: {
    paddingBottom: 25,
    paddingTop: 50,
    marginBottom: 25,

    '@media screen and (min-width: 600px)': {
      paddingBottom: 0,
      marginBottom: 0,
    },
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

    '@media screen and (min-width: 600px)': {
      top: 0,
    },
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

  wrapperShortInfo: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const CallMeUser = ({ items }) => {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Box className={classes.wrapperCallMeUser}>
      <Box className={classes.wrapperInfo}>
        {items.map((item, index) => {
          return (
            <Box
              key={index}
              className={classes.wrapperCallMeInfo}
              data-aos="fade-up"
              data-aos-duration={(index + 1) * 500}
            >
              <h2 className={classes.titleAward}>{item.title}</h2>
              <p className={classes.textAward}>{item.text}</p>
            </Box>
          );
        })}
      </Box>
      <Box className={classes.wrapperShortInfo}>
        <Box className={classes.wrapperNameUser}>
          <h3 className={classes.titleFirstName}>Alexander</h3>
          <h2 className={classes.titleLastName}>Vodorez</h2>
        </Box>
        <ul className={classes.wrapperSocial}>
          <li className={classes.socialBtn}>
            <a
              href="https://www.facebook.com/profile.php?id=100008973467157"
              className={classes.socialLink}
            >
              <i className={`fab fa-facebook-f ${classes.socialIcon} `}></i>
            </a>
          </li>

          <li className={classes.socialBtn}>
            <a href="https://github.com/hellhellpnick" className={classes.socialLink}>
              <i className={`fab fa-github ${classes.socialIcon} `}></i>
            </a>
          </li>

          <li className={classes.socialBtn}>
            <a
              href="https://www.linkedin.com/in/alexander-vodoriz-24a27a1b5/"
              className={classes.socialLink}
            >
              <i className={`fab fa-linkedin ${classes.socialIcon} `}></i>
            </a>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default CallMeUser;
