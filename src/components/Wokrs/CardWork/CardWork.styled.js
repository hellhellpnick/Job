import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 'auto',
    width: '100%',
    margin: '0 20px',
    overflowY: 'auto',
    marginBottom: '30px',
    position: 'relative',
    backgroundColor: theme.palette.background.second,
    display: 'flex',
    transition: '0.3s',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 10,
    boxShadow: '0 0 0 8px rgba(255, 255, 255, 0.2)',
    overflow: 'hidden',
    zIndex: 1,

    '@media (min-width: 768px)': {
      marginBottom: '40px',
      marginRight: '20px',
      maxWidth: 340,
    },
  },
  cardHeader: {
    position: 'relative',
    display: 'flex',
    height: 200,
    flexShrink: 0,
    width: '100%',
    transition: '0.3s',

    '*': {
      transition: '0.3s',
    },
  },

  cardCover: {
    width: '100%',
    position: 'absolute',
    height: '160px',
    top: '-20%',
    left: 0,
    willChange: 'top',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(30px)',
    transform: 'scale(1.2)',
    transition: '0.5s',
    backgroundImage: (props) => `url(${props.bgImgHeader})`,
  },

  cardAvatarBox: {
    width: '100px',
    height: '100px',
    boxShadow: '0 8px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '50%',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%) translateY(-64px)',
    overflow: 'hidden',
    zIndex: 3
  },

  cardAvatarBigBox: {
    width: '100px',
    height: '100px',
    boxShadow: '0 8px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '50%',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%) translateY(-64px)',
    overflow: 'hidden',
    zIndex: 3,

    '@media (min-width: 768px)': {
      position: 'absolute',
      top: '30%',
      left: '50%',
      bottom: 0,
      right: 0,
      width: '100%',
      borderRadius: '0',
      maxWidth: 340,
      height: '300px',
      boxShadow: '0 8px 8px rgba(0, 0, 0, 0.2)',
      overflow: 'hidden',
      zIndex: 3,
    },

    "& > iframe": {
      display: 'none',
      zIndex: 4,

      "@media(min-width: 768px)": {
        display: 'block'
      }
    }
  },

  cardAvatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectPosition: 'center',
    objectFit: 'cover',
    zIndex: 1,
  },

  boxFrame: {
    position: 'absolute',
    width: '100%',
    maxWidth: 340,
    height: '300px',
    zIndex: 4
  },

  cardFullName: {
    position: 'absolute',
    bottom: 0,
    fontSize: '22px',
    fontWeight: 700,
    color: theme.palette.text.primary,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    transform: 'translateY(-10px) translateX(-50%)',
    left: '50%',
    fontFamily: "'Gemunu Libre', sans-serif",
  },

  cardJobTitle: {
    position: 'absolute',
    bottom: -10,
    fontSize: '11px',
    whiteSpace: 'nowrap',
    fontWeight: 500,
    opacity: 0.7,
    color: theme.palette.text.main,
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    margin: 0,
    left: '50%',
    transform: 'translateX(-50%) translateY(-7px)',
    fontFamily: "'Gemunu Libre', sans-serif",
  },

  cardMain: {
    position: 'relative',
    flex: 1,
    display: 'flex',
    paddingTop: '10px',
    flexDirection: 'column',
  },

  cardSubtitle: {
    fontWeight: 700,
    color: theme.palette.text.primary,
    fontSize: 13,
    marginBottom: 8,
  },

  cardContent: {
    padding: 20,
  },

  cardDesc: {
    lineHeight: 1.6,
    color: theme.palette.text.main,
    fontSize: 14,
    margin: 0,
    fontWeight: 400,
    fontFamily: '"DM Sans", sans-serif',
  },
}));

const Link = styled('a')(({ theme }) => ({
  position: 'absolute',
  bottom: '-10px',
  right: '-10px',
  alignSelf: 'flex-end',
  marginBottom: 20,
  marginRight: 20,
  width: 20,
  height: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 10,
  borderRadius: '50%',
  backgroundColor: theme.palette.background.main,
  textDecoration: 'none',

  '& > i': {
    fontSize: 13,
    color: theme.palette.iconBack.primary,
  },
}));

const LinkSite = styled(NavLink)(({ theme }) => ({
  position: 'absolute',
  bottom: '-10px',
  right: '-10px',
  alignSelf: 'flex-end',
  marginBottom: 20,
  marginRight: 20,
  width: 20,
  height: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 10,
  borderRadius: '50%',
  backgroundColor: theme.palette.background.main,
  textDecoration: 'none',

  '& > i': {
    fontSize: 13,
    color: theme.palette.iconBack.primary,
  },
}));


export { useStyles, Link, LinkSite };
