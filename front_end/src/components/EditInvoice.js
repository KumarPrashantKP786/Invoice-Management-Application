import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import {updateInvoice} from '../services/data'
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


const EditInvoice = ({editinvoice,editopen,edithandleClose}) => {

  function loadRefreshContent() {  //FOR AUTO REFRESH
    window.location.reload(false);
  }

  const [IcInput, setIcInput] = useState("");
  const [CPInput, setCPInput] = useState("");


  const handleIcInputChange = event => {
    
    setIcInput(event.target.value);
    
  };

  const handleCPInputChange = event => {
  
    setCPInput(event.target.value);
    
  };

  const editsubmitHandler=async(ic, cp, sl_no, editinvoice)=>{
    //e.preventDefault();
    
    if (ic && cp){
      var editresponse=await updateInvoice(ic, cp, sl_no);
      if(editresponse){
        loadRefreshContent();
        console.log(editresponse);
        edithandleClose();
      }
    }

    else if (ic && !cp){
      var editresponse=await updateInvoice(ic, editinvoice.cust_payment_terms, sl_no);
      if(editresponse){
        loadRefreshContent();
        console.log(editresponse);
        edithandleClose();
      }
    }
    else if (!ic && cp){
      var editresponse=await updateInvoice(editinvoice.invoice_currency, cp, sl_no);
      if(editresponse){
        loadRefreshContent();
        console.log(editresponse);
        edithandleClose();
      }
    }
    else {
      var editresponse=await updateInvoice(editinvoice.invoice_currency, editinvoice.cust_payment_terms, sl_no);
      if(editresponse){
        loadRefreshContent();
        console.log(editresponse);
        edithandleClose();
      }
    }


   }


  return (
    <div>
        <Dialog open={editopen} onClose={edithandleClose}>
        <DialogTitle style={{backgroundColor: "#2A3E4C",color:"white"}}>EDIT</DialogTitle>
        <DialogContent style={{backgroundColor: "#2A3E4C"}}>
        <TextField style={{backgroundColor:"white"}}
          autoFocus
          name="invoice_currency"
          id="invoice_currency"
          value={IcInput}//
          placeholder={editinvoice.invoice_currency}
          type="text"
          onChange={handleIcInputChange}
        />
        <TextField style={{marginLeft:"30px",backgroundColor:"white"}}
          autoFocus
          name="cust_payment_terms"
          id="cust_payment_terms"
          value={CPInput}//
          placeholder={editinvoice.cust_payment_terms}
          type="text"
          onChange={handleCPInputChange}
        />
        </DialogContent>
        <DialogActions  style={{backgroundColor: "#2A3E4C",justifyContent:"center"}}>
          <Button style={{width:"50%",color:"white",borderColor:"white"}} onClick={edithandleClose}>Cancel</Button>
          <Button style={{width:"50%",color:"white",borderColor:"white"}} onClick={()=>editsubmitHandler(IcInput, CPInput, editinvoice.sl_no, editinvoice)}>Add</Button>
        </DialogActions>
      </Dialog>   
    </div>
  )
}

export default EditInvoice