import { makeStyles, withStyles } from '@material-ui/core/styles';
import { InputLabel } from '@material-ui/core';

const InputLabelCustom = withStyles((theme) => ({
  root: {
    color: theme.palette.text.main,
  },

  formControl: {
    color: `${theme.palette.text.main} !important`,
  },

  focused: {
    color: `${theme.palette.text.primary} !important`,
  },
}))(InputLabel);

const useStyles = makeStyles((theme) => ({
  wrapperMain: {
    backgroundColor: theme.palette.background.main,
    paddingBottom: 30
  },

  header: {
    padding: '10px',
    backgroundColor: theme.palette.background.main,
    boxShadow: `0px 8px 10px -11px ${theme.palette.text.main}`,
    transition: 'all 0.2s ease',

    '@media screen and (min-width: 1024px)': {
      padding: 0,
    },
  },

  wrapperSection: {
    display: 'flex',
    flexDirection: 'column',

    '@media screen and (min-width: 1024px)': {
      flexDirection: 'row',
      borderTop: `2px solid ${theme.palette.border.main}`,
    },
  },

  wrapperCallMeUser: {
    width: '100%',
    padding: '25px 25px 0 25px',
    backgroundColor: theme.palette.background.main,
    transition: 'all 0.2s ease',
  },

  navActive: {
    width: '100%',
    height: '100%',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 12,
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '0 auto',
    padding: 0,
    backgroundColor: theme.palette.background.main,
    boxShadow: `0 5px 5px -5px ${theme.palette.shadow.main}`,

    '@media (min-width: 780px)': {
      justifyContent: 'space-around',
    },

    '@media (min-width: 1024px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: '10%',
    },
  },

  navDisable: {
    width: '0',
    height: '100%',
    top: 0,
    right: 0,
    left: '-200%',
    zIndex: 12,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    maxWidth: '1440px',
    margin: '0 auto',
    padding: 0,
    backgroundColor: theme.palette.background.main,

    '@media (min-width: 1024px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: '10%',
    },
  },

  menu: {
    width: '100%',
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px',
    transition: 'all 0.2s ease',

    '@media (min-width: 1024px)': {
      flexDirection: 'row',
      justifyContent: 'center',
    },
  },

  item: {
    cursor: 'pointer',
    padding: 30,
    transition: 'all 0.2s ease',

    '& > a': {
      textAlign: 'center',
      width: '100%',
      position: 'relative',
      fontSize: 20,
      padding: 30,
      color: theme.palette.text.main,
      textTransform: 'uppercase',
      textDecoration: 'none',
      marginRight: '20px',
      transition: 'all 0.2s ease',
    },

    '&:hover': {
      cursor: 'pointer',

      '&:before': {
        opacity: 1,
        transition: ' 0.5s transform ease, 0.8s opacity ease',
        transform: 'translateX(-20px)',
      },
    },
  },

  waves: {
    position: 'relative',
    width: '100%',
    maxWidth: '400px',
    height: '15vh',
    marginBottom: '-7px',
    minHeight: '10px',
    maxHeight: '20px',
    transition: 'all 0.2s ease',
  },

  parallax: {
    '&>use': {
      animation: '$move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite',
    },

    '& > use:nth-child(1)': {
      animationDelay: '-2s',
      animationDuration: '7s',
    },

    '& > use:nth-child(2)': {
      animationDelay: '-3s',
      animationDuration: '10s',
    },

    '& > use:nth-child(3)': {
      animationDelay: '-4s',
      animationDuration: '13s',
    },

    '& > use:nth-child(4)': {
      animationDelay: '-5s',
      animationDuration: '20s',
    },
  },

  formControl: {
    minWidth: 120,
  },

  flexRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20,

    '@media (min-width: 1024px)': {
      justifyContent: 'center',
    },
  },

  wrapperBtn: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    zIndex: 10,

    '@media (min-width: 1024px)': {
      top: 10,
      right: 10,
    },
  },

  wrapperBtnOpenDisable: {
    position: 'fixed',
    top: 20,
    left: -30,
    padding: '5px 0 5px 25px',
    backgroundColor: theme.palette.background.primary,
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
    zIndex: 10,
    animation: '$move-btn-to-right-open 2s',
  },

  wrapperBtnOpenActive: {
    position: 'fixed',
    top: 20,
    left: -30,
    padding: '5px 0 5px 25px',
    backgroundColor: theme.palette.background.primary,
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
    zIndex: 10,
    animation: '$move-btn-to-right-close 2s',
  },

  iconClose: {
    fontSize: 20,
    color: theme.palette.iconColor.main,
  },

  iconArrow: {
    fontSize: 20,
    color: theme.palette.iconColor.main,
    textAlign: 'right',
  },

  '@keyframes move-forever': {
    '0%': {
      transform: 'translate3d(-90px,0,0)',
    },
    '100%': {
      transform: 'translate3d(85px,0,0)',
    },
  },

  '@keyframes move-btn-to-right-open': {
    '0%': {
      position: 'absolute',
      left: '-30px',
    },
    '100%': {
      left: '100%',
    },
  },
}));

export { InputLabelCustom, useStyles };
