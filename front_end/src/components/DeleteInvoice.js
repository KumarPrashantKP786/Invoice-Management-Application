import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DeleteInvoice = ({deleteopen,deleteHandler,deletehandleClose,deletesubmithandler }) => {
  return (
    <div>
 <Dialog open={deleteopen} onClose={deletehandleClose}>
        <DialogTitle style={{backgroundColor: "#2A3E4C",color:"white"}}>DELETE RECORDS ?</DialogTitle>
        <DialogContent style={{backgroundColor: "#2A3E4C"}}>
          <DialogContentText style={{color:"white"}}>
            Are you sure you want to delete this record[s]?
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{backgroundColor: "#2A3E4C",justifyContent:"center"}}>
          <Button style={{width:"50%",color:"white",borderColor:"white"}}onClick={deletehandleClose}>Cancel</Button>
          <Button style={{width:"50%",color:"white",borderColor:"white"}}onClick={deletesubmithandler}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DeleteInvoice