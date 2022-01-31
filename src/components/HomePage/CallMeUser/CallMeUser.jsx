import React, { useEffect } from 'react';
import { Box, Typography, Link } from '@material-ui/core';
import { useStyles } from './CallMeUser.styled';
import Aos from 'aos';
import 'aos/dist/aos.css';

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
              <Typography className={classes.titleAward} component="h2" variant="h3">
                {item.title}
              </Typography>
              <p className={classes.textAward}>{item.text}</p>
            </Box>
          );
        })}
      </Box>
      <Box className={classes.wrapperShortInfo}>
        <Box className={classes.wrapperNameUser}>
          <Typography className={classes.titleFirstName} component="h3" variant="h4">
            Alexander
          </Typography>
          <Typography className={classes.titleLastName} component="h2" variant="h3">
            Vodorez
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
    </Box>
  );
};

export default CallMeUser;
