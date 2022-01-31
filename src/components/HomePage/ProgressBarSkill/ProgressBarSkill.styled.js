import MuiLinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapperProgressBar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '25px',

    '@media screen and (min-width: 600px)': {
      width: '50%',
      paddingRight: 50,
    },
  },

  wrapperInfoProgressBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '10px',
  },

  procentProgressBar: {
    ...theme.typography.h2,
    fontSize: 25,
    color: theme.palette.text.second,
    lineHeight: '1.5',
    textTransform: 'uppercase',
    marginRight: '10px',
  },

  titleProgressBar: {
    ...theme.typography.h2,
    fontSize: 25,
    color: theme.palette.text.primary,
    lineHeight: '1.5',
    textTransform: 'uppercase',
  },

  progressBar: {
    colorPrimary: {
      backgroundColor: '#b2dfdb',
    },
    barColorPrimary: {
      backgroundColor: '#00695c',
    },
  },
}));

const LinearProgress = withStyles((theme) => ({
  root: {
    height: 5,
  },

  barColorPrimary: {
    backgroundColor: theme.palette.progress.main,
  },
}))(MuiLinearProgress);

export { LinearProgress, useStyles };
