import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapperLoader: {
    backgroundColor: theme.palette.background.main,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    minHeight: '100vh',
  },

  loader: {
    position: 'relative',
    width: '200px',
    height: '200px',

    '& span': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      border: '3px solid rgba(255, 255, 255, 0.15)',
      borderRadius: '50%',
      background: 'none',
      boxShadow: `0px 5px 18px 10px #2b2b2b`,
      transition: 'all 0.2s ease',
      animation: '$rotate 5s linear infinite',
    },

    '& span:nth-child(2)': {
      animationDirection: 'normal',
      borderRadius: '44% 56% 39% 61% / 37% 35% 65% 63%',
      boxShadow: '0px 18px 20px 2px #00A0FF',
    },

    '& span:nth-child(3)': {
      animationDirection: 'normal',
      borderRadius: '37% 63% 71% 29% / 44% 39% 61% 56%',
      boxShadow: '0px 8px 30px 4px #156EA3',
    },

    '& span:nth-child(4)': {
      animationDirection: 'normal',
      borderRadius: '68% 32% 46% 54% / 29% 51% 49% 71% ',
      boxShadow: `0px 8px 45px 5px #2b2b2b`,
    },

    '& span:nth-child(5)': {
      animationDirection: 'normal',
      borderRadius: '62% 38% 51% 49% / 42% 42% 58% 58%',
      boxShadow: '2px 15px 49px 12px #4CADE8',
    },

    '& span:nth-child(6)': {
      animationDirection: 'normal',
      borderRadius: '67% 33% 57% 43% / 45% 61% 39% 55%',
      boxShadow: '2px 10px 59px 22px #75CBFF',
    },

    '& span:nth-child(7)': {
      animationDirection: 'normal',
      borderRadius: '67% 33% 66% 34% / 36% 70% 30% 64%',
      boxShadow: '2px 6px 69px 2px #0084D3 ',
    },
  },

  '@keyframes rotate': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
}));

export { useStyles };
