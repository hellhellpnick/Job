import React, { useEffect } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useStyles } from './ExpertiseUser.styled';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ConditionH2Render = ({ index }) => {
  const classes = useStyles();
  if (index < 10) {
    return <h2 className={classes.expertiseTitle}>0{index + 1}</h2>;
  } else {
    return <h2 className={classes.expertiseTitle}>{index + 1}</h2>;
  }
};

const ExpertiseUser = ({ items }) => {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Box className={classes.wrapperExpertise}>
      <ul className={classes.listExpertise}>
        {items.map((item, index) => {
          return (
            <li
              className={classes.expertiseItem}
              key={index + 1}
              data-aos="fade-up"
              data-aos-duration={(index + 1) * 500}
            >
              <ConditionH2Render index={index} />
              <Box className={classes.expertiseBox}>
                <Typography className={classes.expertiseSubtitle} component="h2" variant="h3">
                  {item.title}
                </Typography>
                <p className={classes.expertiseText}>{item.text}</p>
              </Box>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export default ExpertiseUser;
