import { Box } from '@material-ui/core';
import { useStyles } from './Works.styled';
import { ListWorks } from '../../constants';
import BoxWork from './BoxWork/BoxWork';

const Works = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.works}>
        <BoxWork title={'Vue'} workArray={ListWorks.filter((item) => item.typeWork === 'vue')} />
        
        <BoxWork
          title={'React'}
          workArray={ListWorks.filter((item) => item.typeWork === 'react')}
        />
        <BoxWork
          title={'Games'}
          workArray={ListWorks.filter((item) => item.typeWork === 'game')}
        />
        <BoxWork
          title={'Layout'}
          workArray={ListWorks.filter((item) => item.typeWork === 'layout')}
        /><BoxWork
        title={'JavaScript'}
        workArray={ListWorks.filter((item) => item.typeWork === 'js')}
      />
      </Box>
    </Box>
  );
};

export default Works;
