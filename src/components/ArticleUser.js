import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapperArticle: {
    padding: '25px',
    borderTop: `1px solid ${theme.palette.border.main}`,

    borderBottom: `1px solid ${theme.palette.border.main}`,
    backgroundColor: theme.palette.backgroundArticle.main,
  },

  titleArticle: {
    fontSize: 20,
    textTransform: 'uppercase',
    lineHeight: '1.5',
    marginBottom: '8px',
    color: theme.palette.text.primary,
  },

  subtitleArticle: {
    fontSize: 16,
    color: theme.palette.text.main,
  },
}));
const ArticleUser = ({ title, text }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapperArticle}>
      <h1 className={classes.titleArticle}>{title}</h1>
      <h2 className={classes.subtitleArticle}>{text}</h2>
    </Box>
  );
};

export default ArticleUser;
