import { useEffect, useState, useRef } from 'react';
import { Box, Typography } from '@material-ui/core';
import { LinearProgress, useStyles } from './ProgressBarSkill.styled';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function ProgressBarSkill({ item }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);

  const progressRef = useRef(() => {});

  useEffect(() => {
    progressRef.current = () => {
      if (progress < item.procent) {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const classes = useStyles();

  return (
    <Box className={classes.wrapperProgressBar} data-aos="fade-up" data-aos-duration="1000">
      <Box className={classes.wrapperInfoProgressBar}>
        <Typography className={classes.procentProgressBar} component="h2" variant="h3">
          {item.procent}%
        </Typography>
        <Typography className={classes.titleProgressBar} component="h2" variant="h3">
          {item.title}{' '}
        </Typography>
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
