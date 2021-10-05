import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapperExperience: {
    paddingLeft: 25,
    borderLeft: `2px solid ${theme.palette.border.main}`,
  },
}));

const ExperienceUser = ({ data, title, position, location, text }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapperExperience}>
      <Box className={classes.wrapperExperienceInterior}>
          
      </Box>
    </Box>
  );
};

export default ExperienceUser;
