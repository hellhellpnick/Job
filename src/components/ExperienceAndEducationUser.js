import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapperExperience: {
    position: 'relative',
    paddingLeft: 25,
    borderLeft: `2px solid ${theme.palette.border.main}`,
  },

  titleData: {
    fontSize: 11,
    opacity: 0.7,
    color: theme.palette.text.main,
    fontWeight: 500,
    marginBottom: 8,
  },

  titleWork: {
    fontSize: 20,
    color: theme.palette.text.primary,
    fontWeight: 700,
    marginBottom: 8,
    textTransform: 'uppercase',
  },

  titlePosition: {
    fontSize: 14,
    color: theme.palette.text.primary,
    marginBottom: 8,
  },

  textInfo: {
    fontSize: 14,
    lineHeight: '1.5',
    color: theme.palette.text.primary,
    paddingBottom: 20,
  },

  wrapperDot: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: -11,
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor: theme.palette.background.main,
  },

  dot: {
    width: 10,
    height: 10,
    backgroundColor: theme.palette.progress.main,
    borderRadius: '50%',
  },
}));

const ExperienceAndEducationUser = ({ data, title, position, location, text }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapperExperience}>
      <Box className={classes.wrapperExperienceInterior}>
        <h4 className={classes.titleData}>{data}</h4>
        <h2 className={classes.titleWork}>{title}</h2>
        <p className={classes.titlePosition}>{position}</p>
        <p className={classes.titleData}>{location}</p>
        <p className={classes.textInfo}>{text}</p>
      </Box>
      <Box className={classes.wrapperDot}>
        <Box className={classes.dot}></Box>
      </Box>
    </Box>
  );
};

export default ExperienceAndEducationUser;
