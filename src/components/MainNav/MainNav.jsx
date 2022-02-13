import React from 'react';
import SwitchTheme from './Switches/SwitcheTheme';
import { Box, Button } from '@material-ui/core';
import '../../css/mainNavAnimation.css';
import { NavLink, Outlet } from 'react-router-dom';
import { useStyles } from './MainNav.styled';
import ModalWindow from './../ModalWindow/ModalWindow';
import { routes } from '../../Router';

const MainNav = ({ statusTheme, func }) => {
  const [stateMenu, setStateMenu] = React.useState(false);
  const [stateAnimationMenu, setstateAnimationMenu] = React.useState(false);

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
    <>
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

          <Box style={{ maxWidth: 200, width: '100%' }}>
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
          </Box>
        </nav>
      </header>

      <ModalWindow
        data-aos="flip-up"
        title="Appeal to the user"
        text="The website is under construction. Please don't complain much"
      />
      <Outlet />
    </>
  );
};

export default MainNav;
