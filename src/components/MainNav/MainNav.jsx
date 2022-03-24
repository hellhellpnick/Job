import React, {useEffect} from 'react';
import SwitchTheme from './Switches/SwitcheTheme';
import { Box, Button } from '@material-ui/core';
import '../../css/mainNavAnimation.css';
import { NavLink, Outlet } from 'react-router-dom';
import { useStyles } from './MainNav.styled';
import { routes } from '../../Router';
import {
  CallMeUserArr,
} from '../../constants';
import ArticleUser from './../HomePage/ArticleUser/ArticleUser';
import CallMeUser from './../HomePage/CallMeUser/CallMeUser';
import Aos from 'aos';

const MainNav = () => {
  const [stateMenu, setStateMenu] = React.useState(false);
  const [stateAnimationMenu, setstateAnimationMenu] = React.useState(false);
  const classes = useStyles();
  
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const SwitchStateMenu = () => {
    setStateMenu(!stateMenu);
    setstateAnimationMenu(!stateAnimationMenu);
  }

  return (
    <Box className={classes.wrapperMain}>
      <header className={classes.header}>
        <Button
          variant="text"
          className={stateMenu ? classes.wrapperBtnOpenDisable : classes.wrapperBtnOpenActive}
          onClick={() => {SwitchStateMenu()}}
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
            onClick={() => {SwitchStateMenu()}}
          >
            <i className={`fas fa-times ${classes.iconClose}`}></i>
          </Button>
          <ul className={classes.menu}>
            <li
              className={classes.item}
              onClick={() => {SwitchStateMenu()}}
            >
              <NavLink to={routes.main}>Home</NavLink>
            </li>
            <li
              className={classes.item}
              onClick={() => {SwitchStateMenu()}}
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
            <SwitchTheme />
          </Box>
        </nav>
      </header>
      <Outlet />
      <Box data-aos="fade-right" className={classes.wrapperSection}>
        <ArticleUser title="Contact" text="Call me!" />
        <Box className={classes.wrapperCallMeUser}>
          <CallMeUser items={CallMeUserArr} />
        </Box>
      </Box>
    </Box>
  );
};

export default MainNav;
