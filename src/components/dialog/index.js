import { Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import React from 'react';
import { CustomButton } from './styles';

const CustomDialog = ({ open, messagem, handleClose }) => {
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>{messagem}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <CustomButton onClick={handleClose} color="primary">
            Ok
          </CustomButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CustomDialog;
