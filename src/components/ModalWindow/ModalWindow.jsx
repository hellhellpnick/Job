import * as React from 'react';
import { Box, Typography, Modal } from '@material-ui/core';
import { useStyles } from './ModalWindow.styled';

const ModalWindow = ({ title, text }) => {
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
};

export default ModalWindow;
