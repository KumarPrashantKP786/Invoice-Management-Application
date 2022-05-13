import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { getValue } from '@testing-library/user-event/dist/utils';
 

const AdvanceSearch = ({open,handleClose,searchHandler,changeHandler}) => {
   // console.log(open)

   
   
  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullwidth maxWidth="sm"> 
        <DialogTitle style={{color:"white",backgroundColor: "#2A3E4C"}}>Advance Search</DialogTitle>
        <DialogContent style={{backgroundColor: "#2A3E4C"}}>
          <div style={{display:'flex'}}>
          <TextField type="text" style={{width:'2000px',backgroundColor:"white"}}
          name="doc_id"
          
          placeholder="Document ID"
        
          onChange={changeHandler}
          
        />
        <TextField type="text" style={{marginLeft:"30px",width:'2000px',backgroundColor:"white"}}
          name="invoice_id"
          placeholder="Invoice ID"
          onChange={changeHandler}
        />
        </div>
        <br/>
        <div style={{display:'flex'}}>
        <TextField type="text" style={{width:'2000px',backgroundColor:"white"}}
          name="cust_number"
          placeholder="Customer Number"
          
          onChange={changeHandler}
          
        />
        <TextField type="text " style={{marginLeft:"30px",width:'2000px',backgroundColor:"white"}}
          name="buisness_year"
          placeholder="Business Year"
          
         
          onChange={changeHandler}
          
    
        />
        </div>
       
        </DialogContent>
        <DialogActions style={{backgroundColor: "#2A3E4C",justifyContent:"center"}}>
          <Button style={{width:"50%",color:"white",borderColor:"white"}} onClick={handleClose}>Cancel</Button>
          <Button style={{width:"50%",color:"white",borderColor:"white"}} onClick={searchHandler}>Search</Button>
        </DialogActions>
       
      </Dialog>   
    </div>
  )
}

export default AdvanceSearch