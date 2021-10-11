import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapperArticle: {
    display: 'flex',
    flexDirection: 'column',
    padding: '25px',
    borderTop: `1px solid ${theme.palette.border.main}`,
    borderBottom: `1px solid ${theme.palette.border.main}`,
    backgroundColor: theme.palette.backgroundArticle.main,
    minWidth: '30%',
    width: '100%',

    '@media screen and (min-width: 1024px)': {
      border: 'none',
      width: '30%',
      alignItems: 'flex-end',
    },
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
    fontWeight: 300,
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
