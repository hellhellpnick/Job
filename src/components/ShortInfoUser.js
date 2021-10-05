import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapperShortInfo: {
    padding: '25px 25px 30px',
    backgroundColor: theme.palette.background.main,
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
  },

  locationContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '25px',
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
}));

const ShortInfoUser = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapperShortInfo}>
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
            <i className={`fab fa-linkedin ${classes.socialIcon} `}></i>
          </a>
        </li>
      </ul>
      <Box className={classes.wrapperLocation}>
        <Box className={classes.locationContent}>
          <h4 className={classes.locatioTitle}>Location </h4>
          <address className={classes.locationSubtitle}> Poltave, UK</address>
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
