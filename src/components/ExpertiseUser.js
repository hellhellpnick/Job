import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapperExpertise: {
    padding: '25px 25px 0 25px',
    backgroundColor: theme.palette.background.main,
  },

  listExpertise: {
    listStyle: 'none',
  },

  expertiseItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  expertiseTitle: {
    position: 'relative',
    top: '-4px',
    fontSize: 20,
    textTransform: 'uppercase',
    lineHeight: '1.5',
    color: theme.palette.text.second,
    marginRight: 18,
  },

  expertiseBox: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 20,
  },

  expertiseSubtitle: {
    color: theme.palette.text.main,
    fontSize: 20,
    textTransform: 'uppercase',
    marginBottom: '8px',
  },

  expertiseText: {
    color: theme.palette.text.primary,
    fontSize: 16,
    lineHeight: '1.7',
  },
}));

const ExpertiseUser = ({ items }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapperExpertise}>
      <ul className={classes.listExpertise}>
        {items.map((item, index) => {
          return (
            <li className={classes.expertiseItem} key={index + 1}>
              <h1 className={classes.expertiseTitle}>0{index + 1}</h1>
              <Box className={classes.expertiseBox}>
                <h2 className={classes.expertiseSubtitle}>{item.title}</h2>
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
