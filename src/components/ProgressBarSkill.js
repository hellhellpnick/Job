import React from 'react';
import { Box } from '@material-ui/core';
import MuiLinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapperProgressBar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '25px',
  },

  wrapperInfoProgressBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '10px',
  },

  procentProgressBar: {
    fontSize: 25,
    color: theme.palette.text.second,
    lineHeight: '1.5',
    textTransform: 'uppercase',
    marginRight: '10px',
  },

  titleProgressBar: {
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

export default function ProgressBarSkill({ procent, title }) {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});

  React.useEffect(() => {
    progressRef.current = () => {
      if (progress < procent) {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const classes = useStyles();

  return (
    <Box className={classes.wrapperProgressBar}>
      <Box className={classes.wrapperInfoProgressBar}>
        <h2 className={classes.procentProgressBar}>{procent}%</h2>
        <h2 className={classes.titleProgressBar}>{title} </h2>
      </Box>
      <LinearProgress
        variant="buffer"
        value={progress}
        valueBuffer={buffer}
        className={classes.progressBar}
      />
    </Box>
  );
}
