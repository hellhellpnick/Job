import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import SwitchTheme from './switches/switcheTheme';
import { Box } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  header: {
    padding: '10px',
    backgroundColor: theme.palette.background.main,
    boxShadow: `0px 8px 10px -11px ${theme.palette.text.main}`,
    transition: 'all 0.2s ease',
  },

  nav: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '1440px',
    margin: '0 auto',
    padding: 0,

    '@media (min-width: 780px)': {
      justifyContent: 'space-between',
    },
  },

  menu: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    padding: '0 20px',
  },

  item: {
    position: 'relative',
    padding: 20,
    ...theme.typography.link,
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

  '@keyframes move-forever': {
    '0%': {
      transform: 'translate3d(-90px,0,0)',
    },
    '100%': {
      transform: 'translate3d(85px,0,0)',
    },
  },

  formControl: {
    minWidth: 120,
  },

  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

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

const MainNav = ({ statusTheme, func }) => {
  const [lang, setAge] = React.useState('');
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

  const classes = useStyles();

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.menu}>
          <li className={classes.item}>Home</li>
          <li className={classes.item}>Works</li>
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
