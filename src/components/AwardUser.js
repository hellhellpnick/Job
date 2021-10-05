import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapperAwardUser: {
    position: 'relative',
    paddingTop: 25,
    paddingBottom: 25,

    '&::after': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: 0,
      height: 5,
      width: '30%',
      backgroundColor: theme.palette.text.second,
    },
  },

  titleAward: {
    lineHeight: '1.5',
    color: theme.palette.text.main,
    fontSize: 20,
    marginBottom: 10,
    textTransform: 'uppercase',
  },

  textAward: {
    lineHeight: '1.5',
    color: theme.palette.text.primary,
    fontSize: 14,
  },
}));
const AwardUser = ({ title, text }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapperAwardUser}>
      <h2 className={classes.titleAward}>{title}</h2>
      <p className={classes.textAward}>{text}</p>
    </Box>
  );
};

export default AwardUser;
