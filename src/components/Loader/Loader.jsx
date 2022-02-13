import { Box } from '@material-ui/core';
import { useStyles } from './Loader.styled';

const Loader = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.wrapperLoader}>
      <Box component="div" className={classes.loader}>
        <Box component="span" />
        <Box component="span" />
        <Box component="span" />
        <Box component="span" />
        <Box component="span" />
        <Box component="span" />
        <Box component="span" />
      </Box>
    </Box>
  );
};

export default Loader;
