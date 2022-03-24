import { Navigate, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { ListWorks } from '../../constants/index';
import React from 'react';
import { routes } from '../../Router';
import { useStyles } from './Work.styled';

const Work = () => {
  const classes = useStyles();
  const { title } = useParams();
  const objSite = ListWorks.find((item) => item.tag === title);

  if (objSite === undefined) {
    return <Navigate to={routes.works.main} />
  } else {
    return (
      <div className={classes.wrapper}>
        <iframe
          src={DOMPurify.sanitize(objSite.truePath)}
          title={objSite.title} className={classes.wrapper} />
      </div>)
  }
};

export default Work;
