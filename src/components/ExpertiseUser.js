import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles((theme) => ({
  wrapperExpertise: {
    padding: '25px 25px 0 25px',
    backgroundColor: theme.palette.background.main,
  },

  listExpertise: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',

    '@media screen and (min-width: 600px)': {
      alignItems: 'stretch',
    },
  },

  expertiseItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',

    '@media screen and (min-width: 600px)': {
      paddingRight: 50,
      width: '50%',
    },
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
