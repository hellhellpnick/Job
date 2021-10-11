import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapperAbout: {
    padding: 25,
    backgroundColor: theme.palette.background.main,
  },

  aboutText: {
    color: theme.palette.text.main,
    fontSize: 16,
    lineHeight: '1.5',

    '&:not(:last-child)': {
      marginBottom: 15,
    },

    '@media screen and (min-width: 600px)': {
      fontSize: 20,
    },
  },
}));
const AboutUser = ({ title, text }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapperAbout}>
      <p className={classes.aboutText}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
        aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed ,
        ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
        nibh. Nullam mollis. Ut justo. Suspendisse potenti. Nulla vitae mauris non felis mollis
        faucibus.
      </p>
      <p className={classes.aboutText}>
        Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu
        augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
        Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a
        ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
        arcu, dapibus eu, fermentum et, dapibus sed, urna. Fusce lacinia arcu et nulla. Nulla vitae
        mauris non felis mollis.
      </p>
    </Box>
  );
};

export default AboutUser;
