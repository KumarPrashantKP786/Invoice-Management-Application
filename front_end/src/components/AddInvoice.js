import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const AddInvoice = ({open,business_code,cust_number,clear_date,buisness_year,
    doc_id,posting_date,document_create_date,due_in_date,invoice_currency,
    document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id,changeHandler,submitHandler,handleClose}) => {
   // console.log(open)
  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullwidth maxWidth="xl"> 
        <DialogTitle style={{color:"white",backgroundColor: "#2A3E4C"}}>ADD</DialogTitle>
        <DialogContent style={{backgroundColor: "#2A3E4C"}}>
          <div style={{display:'flex'}}>
          <TextField style={{width:'2000px',backgroundColor:"white"}}
          name="business_code"
          value={business_code}
          placeholder="Business Code"
          type="text"
          onChange={changeHandler}
          fullWidth
        />
        <TextField style={{marginLeft:"30px",width:'2000px',backgroundColor:"white"}}
          name="cust_number"
          placeholder="Cust Number"
          value={cust_number}
          type="text"
          onChange={changeHandler}
        />
        <TextField style={{marginLeft:"30px",width:'2000px',backgroundColor:"white"}}
          name="clear_date"
          placeholder="Clear Date"
          inputFormat="yyyy-dd-MM"
          type="date"
          value={clear_date}
          onChange={changeHandler}
        />
        <TextField style={{marginLeft:"30px",width:'2000px',backgroundColor:"white"}}
          name="buisness_year"
          placeholder="Business Year"
          type="text"
          value={buisness_year}
          onChange={changeHandler}
    
        />
          </div>

          <div style={{display:'flex',marginTop:'30px'}}>
          <TextField
          style={{width:'2000px',backgroundColor:"white"}}
          name="doc_id"
          placeholder="Document id"
          type="text"
          value={doc_id}
          onChange={changeHandler}
        />
        <TextField style={{marginLeft:"30px",width:'2000px',backgroundColor:"white"}}
          name="posting_date"
          placeholder="Posting Date"
          type="date"
          value={posting_date}
          onChange={changeHandler}
        />
        <TextField style={{marginLeft:"30px",width:'2000px',backgroundColor:"white"}}
          name="document_create_date"
          placeholder="Document Create Date"
          type="date"
          value={document_create_date}
          onChange={changeHandler}
        />
        <TextField style={{marginLeft:"30px",width:'2000px',backgroundColor:"white"}}
          name="due_in_date"
          placeholder="Due Date"
          type="date"
          value={due_in_date}
          onChange={changeHandler}
        />
          </div>
       
       <div style={{display:'flex',marginTop:'30px'}}>

       <TextField
       style={{width:'2000px',backgroundColor:"white"}}
          name="invoice_currency"
          placeholder="Invoice Currency"
          type="text"
          value={invoice_currency}
          onChange={changeHandler}
        />
        <TextField style={{marginLeft:"30px",width:'2000px',backgroundColor:"white"}}
          name="document_type"
          placeholder="Document Type"
          type="text"
          value={document_type}
          onChange={changeHandler}
        />
        <TextField style={{marginLeft:"30px",width:'2000px',backgroundColor:"white"}}
          name="posting_id"
          placeholder="Posting Id"
          type="text"
          value={posting_id}
          onChange={changeHandler}
        />
        <TextField style={{marginLeft:"30px",width:'2000px',backgroundColor:"white"}}
          name="total_open_amount"
          placeholder="Total Open Amount"
          type="text"
          value={total_open_amount}
          onChange={changeHandler}
        />
        
       </div>

       <div style={{display:'flex',marginTop:'30px'}}>
       <TextField
          style={{width:'340px',backgroundColor:"white"}}
          name="baseline_create_date"
          placeholder="Baseline Create Date"
          type="date"
          value={baseline_create_date}
          onChange={changeHandler}
        />
        
        <TextField style={{marginLeft:"25px",width:'340px',backgroundColor:"white"}}
          name="cust_payment_terms"
          placeholder="Customer Payment Terms"
          type="text"
          value={cust_payment_terms}
          onChange={changeHandler}
        />
        <TextField style={{marginLeft:"25px",width:'340px',backgroundColor:"white"}}
          name="invoice_id"
          placeholder="Invoice Id"
          type="text"
          value={invoice_id}
          onChange={changeHandler}
        />
       </div>
       
        </DialogContent>
        <DialogActions style={{backgroundColor: "#2A3E4C",justifyContent:"center"}}>
          <Button style={{width:"50%",color:"white",borderColor:"white"}} onClick={handleClose}>Cancel</Button>
          <Button style={{width:"50%",color:"white",borderColor:"white"}} onClick={submitHandler}>Add</Button>
        </DialogActions>
       
      </Dialog>   
    </div>
  )
}

export default AddInvoice