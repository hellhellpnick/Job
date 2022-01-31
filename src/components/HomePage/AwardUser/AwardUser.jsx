import React, { useEffect } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useStyles } from './AwardUser.styled';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AwardUser = ({ item }) => {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Box className={classes.wrapperAwardUser} data-aos="fade-up" data-aos-duration={item.time}>
      <Typography className={classes.titleAward} component="h2" variant="h3">
        {item.title}
      </Typography>
      <p className={classes.textAward}>{item.text}</p>
    </Box>
  );
};

export default AwardUser;
