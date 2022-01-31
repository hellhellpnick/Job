import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapperModalWindow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: theme.palette.background.main,
    outline: 'none',
    border: `2px solid ${theme.palette.border.main}`,
    padding: '20px 40px',
  },

  modalText: {
    fontSize: 14,
    lineHeight: '1.5',
    color: theme.palette.text.primary,
  },

  modalTitle: {
    fontSize: 20,
    lineHeight: '1.5',
    color: theme.palette.text.main,
    marginBottom: 10,
  },
}));

export { useStyles };
