import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapperAwardUser: {
    position: 'relative',
    paddingTop: 25,
    paddingBottom: 25,
    width: '100%',

    '&::after': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: 0,
      height: 5,
      width: '30%',
      backgroundColor: theme.palette.text.second,
    },

    '@media screen and (min-width: 600px)': {
      width: '50%',
      paddingRight: 50,
    },
  },

  titleAward: {
    ...theme.typography.h2,
    lineHeight: '1.5',
    color: theme.palette.text.main,
    fontSize: 20,
    marginBottom: 10,
    textTransform: 'uppercase',
  },

  textAward: {
    ...theme.typography.text,
    lineHeight: '1.5',
    color: theme.palette.text.primary,
    fontSize: 14,
  },
}));

export { useStyles };
