import { Box, Typography } from '@material-ui/core';
import { useStyles, Link } from './CardWork.styled';

const CardWork = ({ item }) => {
  const props = {
    bgImgHeader: item.img,
  };
  const classes = useStyles(props);

  return (
    <Box className={classes.card}>
      <Box className={classes.cardHeader}>
        <Box className={classes.cardCover} />
        <img src={item.img} alt={item.title} className={classes.cardAvatar} />
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
        <Link href={item.url}>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </Box>
    </Box>
  );
};

export default CardWork;
