import { Box, Typography } from '@material-ui/core';
import CardWork from './../CardWork/CardWork';
import { useStyles } from './BoxWork.styled';

const BoxWork = ({ title, workArray }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapperTypeWorks}>
      <Typography variant="h2" className={classes.titleWorks}>
        Works: {title}
      </Typography>
      <Box className={classes.wrapperWorks}>
        {!!workArray.length && workArray.map((item, index) => <CardWork item={item} key={index} />)}
      </Box>
    </Box>
  );
};

export default BoxWork;
