import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.background.main,
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  titleWorks: {
    fontFamily: "'Gemunu Libre', sans-serif",
    color: theme.palette.text.primary,
    fontSize: '24px',
    textAlign: 'center',
    marginBottom: 20,
  },

  wrapperWorks: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  wrapperTypeWorks: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },

  works: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export { useStyles };
