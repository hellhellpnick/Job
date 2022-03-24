import { useEffect } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { useStyles, Link, LinkSite } from './CardWork.styled';
import Aos from 'aos';

const CardWork = ({ item }) => {
  const [isShow, setShow] = useState(false);
  const props = {
    bgImgHeader: item.img,
  };
  const classes = useStyles(props);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <Box className={classes.card} data-aos="fade-right">
      <Box className={classes.cardHeader}>
        <Box className={classes.cardCover} />
        <Box 
          className={item.local ? 
          (isShow ? classes.cardAvatarBigBox : classes.cardAvatarBox) :
          classes.cardAvatarBox} 
          onMouseEnter={() => {setShow(!isShow)}} 
          onMouseLeave={() => setShow(!isShow)}
         >
          {item.local && ((item.local === isShow) && <iframe src={item.truePath} title={item.title} className={classes.boxFrame}/>)}
          <img src={item.img} alt={item.title} className={classes.cardAvatar} />
        </Box>
        <Typography className={classes.cardFullName} variant="h2">
          {item.title}
        </Typography>
        <Typography className={classes.cardJobTitle} variant="h3">
          {item.description}
        </Typography>
      </Box>
      <Box className={classes.cardMain}>
        <Box className={classes.cardContent}>
          <Box className={classes.cardSubtitle}>ABOUT</Box>
          <p className={classes.cardDesc}>{item.text}</p>
        </Box>
        {item.local ? (
          <LinkSite to={item.url}>
            <i className="fas fa-arrow-right"></i>
          </LinkSite>) : (
          <Link href={item.url} target='_blank'>
            <i className="fas fa-arrow-right"></i>
          </Link>)}
      </Box>
    </Box>
  );
};

export default CardWork;
