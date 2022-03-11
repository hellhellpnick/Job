import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.background.main,
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  works: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export { useStyles };
