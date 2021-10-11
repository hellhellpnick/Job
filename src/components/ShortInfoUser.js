import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapperShortInfo: {
    padding: '25px 25px 30px',
    backgroundColor: theme.palette.background.main,
    transition: 'all 0.2s ease',

    '@media screen and (min-width: 1024px)': {
      padding: 25,
      width: '100%',
    },
  },

  titleInfo: {
    fontSize: '76px',
    lineHeight: '0.9',
    marginBottom: '8px',
  },

  subtitleInfo: {
    textAlign: 'center',
    fontSize: '26px',
    lineHeight: '0.9',
    marginBottom: '8px',
    padding: 10,
    fontWeight: 300,
    color: theme.palette.text.main,
  },

  wrapperName: {
    fontSize: '65%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  firstWord: {
    textAlign: 'center',
    textTransform: 'lowercase',
    color: theme.palette.text.main,
  },

  secondWord: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: theme.palette.text.second,
  },

  wrapperUser: {
    marginBottom: '25px',
  },

  wrapperSocial: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '33px',
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

  wrapperLocation: {
    borderTop: `2px solid ${theme.palette.border.main}`,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  locationContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '25px',
    width: '100%',

    '@media screen and (min-width: 600px)': {
      paddingRight: '50px',
      width: '50%',
    },

    '@media screen and (min-width: 1024px)': {
      width: '25%',
      paddingRight: 0,
    },
  },

  locatioTitle: {
    marginBottom: '8px',
    color: theme.palette.text.primary,
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '1.75',
  },

  locationSubtitle: {
    fontSize: '16px',
    fontWeight: 400,
    color: theme.palette.text.primary,
    fontStyle: 'normal',
  },

  wrapperFlexWrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 0',

    '@media screen and (min-width: 1024px)': {
      flexDirection: 'row',
      marginTop: '25%',
      marginBottom: '15%',
    },
  },
}));

const ShortInfoUser = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapperShortInfo}>
      <Box className={classes.wrapperFlexWrap}>
        <Box className={classes.wrapperUser}>
          <h1 className={classes.titleInfo}>
            <span className={classes.wrapperName}>
              <span className={classes.firstWord}>Alexander</span>
              <span className={classes.secondWord}>Vodorez</span>
            </span>
          </h1>
          <h2 className={classes.subtitleInfo}>
            <span className={classes.wrapperName}>Web Developer & Front-end Expert</span>
          </h2>
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
      <Box className={classes.wrapperLocation}>
        <Box className={classes.locationContent}>
          <h4 className={classes.locatioTitle}>Location </h4>
          <address className={classes.locationSubtitle}> Poltave, UA</address>
        </Box>

        <Box className={classes.locationContent}>
          <h4 className={classes.locatioTitle}>Phone </h4>
          <address className={classes.locationSubtitle}> 098-131-xxxx, Vodafone</address>
        </Box>

        <Box className={classes.locationContent}>
          <h4 className={classes.locatioTitle}>Web </h4>
          <address className={classes.locationSubtitle}> hellhellpnick.github.io/job</address>
        </Box>

        <Box className={classes.locationContent}>
          <h4 className={classes.locatioTitle}>Email </h4>
          <address className={classes.locationSubtitle}>hellhellpnick@gmail.com</address>
        </Box>
      </Box>
    </Box>
  );
};

export default ShortInfoUser;
