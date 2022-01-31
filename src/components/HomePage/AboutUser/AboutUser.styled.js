import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapperAbout: {
    padding: 25,
    backgroundColor: theme.palette.background.main,
  },

  aboutText: {
    color: theme.palette.text.main,
    ...theme.typography.text,
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

export { useStyles };
