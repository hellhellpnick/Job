import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { SwitchTheme } from './Switches/';
import { Box, Button, Select, InputLabel, MenuItem, FormControl } from '@material-ui/core';
import '../../css/mainNavAnimation.css';
import { NavLink } from 'react-router-dom';
import { routes } from '../../Router';

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
  header: {
    padding: '10px',
    backgroundColor: theme.palette.background.main,
    boxShadow: `0px 8px 10px -11px ${theme.palette.text.main}`,
    transition: 'all 0.2s ease',

    '@media screen and (min-width: 1024px)': {
      padding: 0,
    },
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
      justifyContent: 'space-between',
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

    '@media (min-width: 1024px)': {
      flexDirection: 'row',
      justifyContent: 'center',
    },
  },

  item: {
    cursor: 'pointer',
    padding: 30,

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

      '&:before': {
        position: 'absolute',
        bottom: '-2px',
        content: '""',
        width: '100%',
        height: '3px',
        background: theme.palette.link.primary,
        transform: 'translateX(100%)',
        opacity: 0,
      },
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
    width: '200px',
    height: '15vh',
    marginBottom: '-7px' /*Fix for safari gap*/,
    minHeight: '10px',
    maxHeight: '20px',
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

const MainNav = ({ statusTheme, func }) => {
  const [lang, setAge] = React.useState('');
  const [stateMenu, setStateMenu] = React.useState(false);
  const [stateAnimationMenu, setstateAnimationMenu] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCloseMenu = () => {
    setStateMenu(false);
    document.body.style.overflow = 'visible';
  };

  const handleOpenMenu = () => {
    setStateMenu(true);
    document.body.style.overflow = 'hidden';
  };

  const handleOpenAnimation = () => {
    setstateAnimationMenu(true);
  };

  const handleCloseAnimation = () => {
    setstateAnimationMenu(false);
  };

  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Button
        variant="text"
        className={stateMenu ? classes.wrapperBtnOpenDisable : classes.wrapperBtnOpenActive}
        onClick={() => {
          handleOpenMenu();
          handleOpenAnimation();
        }}
      >
        <i className={`fas fa-angle-double-right ${classes.iconArrow}`}></i>
      </Button>
      <nav
        className={`
          ${stateMenu ? classes.navActive : classes.navDisable}
          ${stateAnimationMenu ? `nav-active-animation` : `nav-disable-animation`}
        `}
      >
        <Button
          variant="text"
          className={classes.wrapperBtn}
          onClick={() => {
            handleCloseMenu();
            handleCloseAnimation();
          }}
        >
          <i className={`fas fa-times ${classes.iconClose}`}></i>
        </Button>
        <ul className={classes.menu}>
          <li
            className={classes.item}
            onClick={() => {
              handleCloseMenu();
              handleCloseAnimation();
            }}
          >
            <NavLink to={routes.main}>Home</NavLink>
          </li>
          <li
            className={classes.item}
            onClick={() => {
              handleCloseMenu();
              handleCloseAnimation();
            }}
          >
            <NavLink to={routes.works.main}>Works</NavLink>
          </li>
        </ul>

        <Box>
          <svg
            className={classes.waves}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className={classes.parallax}>
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </Box>

        <Box className={classes.flexRow}>
          <SwitchTheme statusTheme={statusTheme} func={func} />

          <FormControl className={classes.formControl}>
            <InputLabelCustom id="demo-controlled-open-select-label">Lang</InputLabelCustom>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={lang}
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </nav>
    </header>
  );
};

export default MainNav;
