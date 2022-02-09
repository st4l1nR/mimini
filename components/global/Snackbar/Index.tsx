import React from "react";
import { Snackbar, Alert, AlertColor } from "@mui/material";

type props = {
  open: boolean;
  setSnackbar:any;
  severity: AlertColor
  children: any;
};

const Index = ({ open, setSnackbar, severity, children }: props) => {
  const handleClose = () => setSnackbar({open:false, severity:"", message:""});
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical:'top', horizontal:'right'}}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {children}
      </Alert>
    </Snackbar>
  );
};

export default Index;
