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
    maxWidth: '1170px',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    justifyContent: 'space-around',
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
