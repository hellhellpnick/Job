import { makeStyles } from '@material-ui/core/styles';
import { SwitchThemeStyle } from './SwitcheTheme.styled';
import { Box } from '@material-ui/core';
import useActionTheme from '../../../hooks/useActionTheme';

const useStyles = makeStyles((theme) => ({
  wrapperSwitch: {
    display: 'flex',
    flexDirection: 'column',
  },

  textSwitch: {
    fontSize: 14,
    color: theme.palette.text.main,
    lineHeight: '1.5',
    marginBottom: 10,
  },
}));

const SwitchTheme = () => {
  const { getTheme, changeTheme } = useActionTheme();
  const classes = useStyles();

  return (
    <Box className={classes.wrapperSwitch}>
      <p className={classes.textSwitch}>Switch theme</p>
      <SwitchThemeStyle onClick={changeTheme} checked={getTheme} />
    </Box>
  );
};

export default SwitchTheme;
