import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.background.main,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: '66px 16px 66px',
    border: `1px solid ${theme.palette.border.main}`,
    textAlign: 'center',
    color: theme.palette.text.main,
    width: '92%',
    maxWidth: '400px',
    margin: '0 4% 0 4%',
  },
  title: {
    fontSize: 120,
  },
  description: {
    fontSize: 48,
  },
  glitch: {
    position: 'relative',

    '&:before': {
      content: 'attr(data-text)',
      position: 'absolute',
      textShadow: `1px 0 ${theme.palette.shadow.primary}`,
      top: 0,
      left: -4,
      color: theme.palette.text.main,
      overflow: 'hidden',
      clip: 'rect(0, 900px, 0, 0)',
      animation: '$glitch 3s infinite linear alternate-reverse',
      height: '100%',
      width: '100%',
    },

    '&:after': {
      content: 'attr(data-text)',
      position: 'absolute',
      textShadow: `-1px 0 ${theme.palette.shadow.second}`,
      top: 0,
      left: 4,
      color: theme.palette.text.main,
      overflow: 'hidden',
      clip: 'rect(0, 900px, 0, 0)',
      animation: '$glitch 2s infinite linear alternate-reverse',
      height: '100%',
      width: '100%',
    },
  },
  '@keyframes glitch': {
    '0%': {
      clip: 'rect(24px, 9999px, 136px, 0)',
    },
    '5%': {
      clip: 'rect(142px, 9999px, 83px, 0)',
    },
    '10%': {
      clip: 'rect(82px, 9999px, 37px, 0)',
    },
    '15%': {
      clip: 'rect(51px, 9999px, 78px, 0)',
    },
    '20%': {
      clip: 'rect(150px, 9999px, 39px, 0)',
    },
    '25%': {
      clip: 'rect(66px, 9999px, 122px, 0)',
    },
    '30%': {
      clip: 'rect(141px, 9999px, 33px, 0)',
    },
    '35%': {
      clip: 'rect(126px, 9999px, 17px, 0)',
    },
    '40%': {
      clip: 'rect(125px, 9999px, 124px, 0)',
    },
    '45%': {
      clip: 'rect(34px, 9999px, 22px, 0)',
    },
    '50%': {
      clip: 'rect(54px, 9999px, 71px, 0)',
    },
    '55%': {
      clip: 'rect(34px, 9999px, 135px, 0)',
    },
    '60%': {
      clip: 'rect(150px, 9999px, 98px, 0)',
    },
    '65%': {
      clip: 'rect(26px, 9999px, 32px, 0)',
    },
    '70%': {
      clip: 'rect(50px, 9999px, 2px, 0)',
    },
    '75%': {
      clip: 'rect(144px, 9999px, 77px, 0)',
    },
    '80%': {
      clip: 'rect(135px, 9999px, 53px, 0)',
    },
    '85%': {
      clip: 'rect(131px, 9999px, 143px, 0)',
    },
    '90%': {
      clip: 'rect(127px, 9999px, 133px, 0)',
    },
    '95%': {
      clip: 'rect(24px, 9999px, 125px, 0)',
    },
    '100%': {
      clip: 'rect(30px, 9999px, 147px, 0)',
    },
  },
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.container} data-text="404">
        <Box className={`${classes.title} ${classes.glitch}`} data-text="404">
          404
        </Box>
        <Box className={`${classes.description} ${classes.glitch}`} data-text="PAGE NOT FOUND">
          PAGE NOT FOUND
        </Box>
      </Box>
    </Box>
  );
};

export default NotFound;
