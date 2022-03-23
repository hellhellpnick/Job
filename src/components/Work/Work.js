import { Navigate, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { ListWorks } from './../../constants/index';
import React from 'react';
import { routes } from './../../Router';

const Work = () => {
  const { title } = useParams();
  const objSite = ListWorks.find((item) => item.tag === title);

  if (objSite === undefined) {
    return <Navigate to={routes.works.main} />
  }

  return <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(objSite.truePath) }} />;
};

export default Work;
