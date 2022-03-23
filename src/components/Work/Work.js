import { useParams } from 'react-router-dom';
import { ListWorks } from './../../constants/index';
import React from 'react';

const Work = () => {
  const { title } = useParams();
  const objSite = ListWorks.find((item) => item.tag === title);
  //const path = require(`${objSite.truePath}`)

  console.log(objSite, title, objSite.truePath)

  return <iframe src={objSite.truePath} title={objSite.title} width='100%' height='100vh' />;
};

export default Work;
