import { Box } from '@material-ui/core';
import { useStyles } from './NotFound.styled';

const NotFound = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.container} data-text="404">
        <Box className={`${classes.title} ${classes.glitch}`} data-text="404">
          404
        </Box>
        <Box className={`${classes.description} ${classes.glitch}`} data-text="PAGE NOT FOUND">
          PAGE NOT FOUND
        </Box>
      </Box>
    </Box>
  );
};

export default NotFound;
