import { Box, Typography } from '@material-ui/core';
import CardWork from './CardWork/CardWork';
import { useStyles } from './Works.styled';
import { ListVue, ListReact, ListLayout } from '../../constants';

const Works = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.works}>
        <Box className={classes.wrapperTypeWorks}>
          <Typography variant="h2" className={classes.titleWorks}>
            Works: Vue
          </Typography>
          <Box className={classes.wrapperWorks}>
            {!!ListVue.length && ListVue.map((item, index) => <CardWork item={item} key={index} />)}
          </Box>
        </Box>
        <Box className={classes.wrapperTypeWorks}>
          <Typography variant="h2" className={classes.titleWorks}>
            Works: React
          </Typography>
          <Box className={classes.wrapperWorks}>
            {!!ListReact.length &&
              ListReact.map((item, index) => <CardWork item={item} key={index} />)}
          </Box>
        </Box>
        <Box className={classes.wrapperTypeWorks}>
          <Typography variant="h2" className={classes.titleWorks}>
            Works: Layout
          </Typography>
          <Box className={classes.wrapperWorks}>
            {!!ListLayout.length &&
              ListLayout.map((item, index) => <CardWork item={item} key={index} />)}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Works;
