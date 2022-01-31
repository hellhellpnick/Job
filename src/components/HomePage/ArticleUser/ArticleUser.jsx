import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useStyles } from './ArticleUser.styled';

const ArticleUser = ({ title, text }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapperArticle}>
      <Typography className={classes.titleArticle} component="h2" variant="h3">
        {title}
      </Typography>
      <Typography className={classes.subtitleArticle} component="h3" variant="h4">
        {text}
      </Typography>
    </Box>
  );
};

export default ArticleUser;
