import React from 'react';
import { Box, Typography, Link } from '@material-ui/core';
import { useStyles } from './ShortInfoUser.styled';

const ShortInfoUser = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapperShortInfo}>
      <Box className={classes.wrapperFlexWrap}>
        <Box className={classes.wrapperUser}>
          <Typography className={classes.titleInfo} component="h1" variant="h2">
            <span className={classes.wrapperName}>
              <span className={classes.firstWord}>Alexander</span>
              <span className={classes.secondWord}>Vodorez</span>
            </span>
          </Typography>
          <Typography className={classes.subtitleInfo} component="h2" variant="h3">
            <span className={classes.wrapperName}>Web Developer & Front-end Expert</span>
          </Typography>
        </Box>
        <ul className={classes.wrapperSocial}>
          <li className={classes.socialBtn}>
            <Link
              href="https://www.facebook.com/profile.php?id=100008973467157"
              className={classes.socialLink}
            >
              <i className={`fab fa-facebook-f ${classes.socialIcon} `}></i>
            </Link>
          </li>

          <li className={classes.socialBtn}>
            <Link href="https://github.com/hellhellpnick" className={classes.socialLink}>
              <i className={`fab fa-github ${classes.socialIcon} `}></i>
            </Link>
          </li>

          <li className={classes.socialBtn}>
            <Link
              href="https://www.linkedin.com/in/alexander-vodoriz-24a27a1b5/"
              className={classes.socialLink}
            >
              <i className={`fab fa-linkedin ${classes.socialIcon} `}></i>
            </Link>
          </li>
        </ul>
      </Box>
      <Box className={classes.wrapperLocation}>
        <Box className={classes.locationContent}>
          <Typography className={classes.locatioTitle} component="h4" variant="h5">
            Location{' '}
          </Typography>
          <address className={classes.locationSubtitle}> Poltave, UA</address>
        </Box>

        <Box className={classes.locationContent}>
          <Typography className={classes.locatioTitle} component="h4" variant="h5">
            Phone{' '}
          </Typography>
          <address className={classes.locationSubtitle}> 098-131-xxxx, Vodafone</address>
        </Box>

        <Box className={classes.locationContent}>
          <Typography className={classes.locatioTitle} component="h4" variant="h5">
            Web{' '}
          </Typography>
          <address className={classes.locationSubtitle}> hellhellpnick.github.io/job</address>
        </Box>

        <Box className={classes.locationContent}>
          <Typography className={classes.locatioTitle} component="h4" variant="h5">
            Email{' '}
          </Typography>
          <address className={classes.locationSubtitle}>hellhellpnick@gmail.com</address>
        </Box>
      </Box>
    </Box>
  );
};

export default ShortInfoUser;
