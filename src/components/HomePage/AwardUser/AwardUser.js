import React, { useEffect } from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles((theme) => ({
  wrapperAwardUser: {
    position: 'relative',
    paddingTop: 25,
    paddingBottom: 25,
    width: '100%',

    '&::after': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: 0,
      height: 5,
      width: '30%',
      backgroundColor: theme.palette.text.second,
    },

    '@media screen and (min-width: 600px)': {
      width: '50%',
      paddingRight: 50,
    },
  },

  titleAward: {
    ...theme.typography.h2,
    lineHeight: '1.5',
    color: theme.palette.text.main,
    fontSize: 20,
    marginBottom: 10,
    textTransform: 'uppercase',
  },

  textAward: {
    ...theme.typography.text,
    lineHeight: '1.5',
    color: theme.palette.text.primary,
    fontSize: 14,
  },
}));

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
