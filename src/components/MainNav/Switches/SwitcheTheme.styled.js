import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const SwitchThemeStyle = withStyles((theme) => ({
  root: {
    width: 55,
    height: 26,
    padding: 0,
    marginRight: 20,
  },

  switchBase: {
    padding: 1,

    '& + $track': {
      backgroundColor: theme.palette.text.main,
      opacity: 1,
      border: 'none',
    },

    '&$checked': {
      transform: 'translateX(30px)',
      color: theme.palette.background.main,

      '& + $track': {
        backgroundColor: theme.palette.text.main,

        opacity: 1,
        border: 'none',
      },
    },
  },

  thumb: {
    width: 24,
    height: 24,
    color: theme.palette.background.main,
  },

  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
}))(Switch);

export { SwitchThemeStyle };
