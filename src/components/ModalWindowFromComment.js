import * as React from 'react';
import { Box, Typography, Modal } from '@material-ui/core';
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

export default function ModalWindowFromComment({ title, text }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.wrapperModalWindow}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className={classes.modalTitle}
          >
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} className={classes.modalText}>
            {text}
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
