import React,{useState,useEffect} from 'react'
import {AdvanceSearchFun, getData} from '../services/data'
import Button from '@mui/material/Button';
import "./Button.css"
import ButtonGroup from '@mui/material/ButtonGroup';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell,{ tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import AddInvoice from './AddInvoice'
import {addInvoice,updateInvoice,deleteInvoice,aging_bucket} from '../services/data'
import EditInvoice from './EditInvoice';
import Pagination from "./Pagination"
import DeleteInvoice from './DeleteInvoice';
import { styled } from '@mui/material/styles';
import './DataGrid.css'
import AdvanceSearch from './AdvanceSearch';


const StyledCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {

    color: theme.palette.common.white,
    whiteSpace: 'wrap'
  },
  [`&.${tableCellClasses.body}`]: {
    color: theme.palette.common.white,
    whiteSpace: 'nowrap'
  },
}));

const DataGrid = () => {
    const[data,setData]=useState([]);
    const [query, setQuery] = useState("")
   

    
    
    function loadRefreshContent() {  //REFRESH
      window.location.reload(false);
    }

    //ADD 
    const[open,setOpen]=useState(false)

    const addHandler = () => {
      setOpen(true)
    }

    const handleClose = () => {
    setOpen(false);
    };

    const[invoice,setInvoice]=useState({business_code:'',cust_number:'',clear_date:'',buisness_year:'',
      doc_id:'',posting_date:'',document_create_date:'',due_in_date:'',invoice_currency:'',
      document_type:'',posting_id:'',total_open_amount:'',baseline_create_date:'',cust_payment_terms:'',invoice_id:''})
    
    const {business_code,cust_number,clear_date,buisness_year,
      doc_id,posting_date,document_create_date,due_in_date,invoice_currency,
      document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id}=invoice;
 
      const changeHandler=(e)=>{
        const{name,value}=e.target;
        setInvoice({...invoice,[name]:value})
        
      }

      const submitHandler=async(e)=>{
        e.preventDefault();
        // console.log("hii")
        console.log(invoice)
        let response=await addInvoice(invoice)
        if(response){
          setInvoice({business_code:'',cust_number:'',clear_date:'',buisness_year:'',
          doc_id:'',posting_date:'',document_create_date:'',due_in_date:'',invoice_currency:'',
          document_type:'',posting_id:'',total_open_amount:'',baseline_create_date:'',cust_payment_terms:'',invoice_id:''})
          loadRefreshContent()
        }
        setOpen(false)
      }



    //EDIT 
    const[editopen,seteditOpen]=useState(false)
   
    const editHandler = () => {
      seteditOpen(true)
    }
    
    const edithandleClose =() => {
    seteditOpen(false);
    };




    const [editinvoice,setEditinvoice]=useState({sl_no1:'', invoice_currency1:'',cust_payment_terms1:''})
    
    
    const checkHandler = (e,sl_no) => {
      if(e.target.checked){
        let editInvoice=data.filter(editinvoice=>editinvoice.sl_no==sl_no)[0];
      setEditinvoice(editInvoice)
      }
    }
     

    
     //DELETE
     const [deleteopen, setdeleteOpen] = useState(false)

      const deletehandleClose =() => {
       setdeleteOpen(false);
      };

     const deleteHandler=()=>{
      setdeleteOpen(true)
     }

    

     const deletesubmithandler = async (e) =>{
      e.preventDefault();
      let response=await deleteInvoice(editinvoice.sl_no)  
      if(response){
        setdeleteOpen(false);
        loadRefreshContent()
      }
     }

     // PAGINATION
     const[count,setCount]=useState(0);
     const [page, setPage] =useState(0);
     const [rowsPerPage, setRowsPerPage] =useState(50);

     const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      
    };

   


    // SORTING
    const [orderBy,setOrderBy]=useState("sl_no")
    const [order,setOrder]=useState("ASC")
    
    const sortingHandler=(newField)=>{
      if(orderBy==newField){
        let newOrder=order=="ASC"?"DESC":"ASC"
        setOrder(newOrder)
      }else{
        setOrder("ASC");
      }
     setOrderBy(newField)
    }

   

    
    useEffect(async function() {
      if(rowsPerPage!=null){
        let data=await getData(page,rowsPerPage,orderBy,order)
        setData(data['data'])
        
      setCount(data['count'])
      }
      
    },[rowsPerPage,page,order,orderBy])
     //Advance Search
     const[AdvanceSearchOpen,setAdvanceSearchOpen]=useState(false)

      const OpensetAdvanceSearch = (e) => {
        console.log(e.target.value);
      setAdvanceSearchOpen(true);
      };

    const AdvanceSearchHandleClose = () => {
    setAdvanceSearchOpen(false);
    };
      
      const AdvanceSearchHandler=async (e)=>{
        e.preventDefault();
        let data=await AdvanceSearchFun(AdvanceSearchInvoice)
       setData(data['data'])
            
          setCount(data['count'])
         setAdvanceSearchOpen(false);
        
          
        }

      const[AdvanceSearchInvoice,setAdvanceSearchInvoice]=useState([])
    
      const AdvanceSearchChangeHandler=(e)=>{
        const{name,value}=e.target;
        setAdvanceSearchInvoice({...AdvanceSearchInvoice,[name]:value})
        
      }
      
  
      return (
    <div style={{marginTop:"20px",backgroundColor: "#2A3E4C"}}>
        <div className='' style={{marginLeft:"20px",marginTop:"1px"}}>
        <ButtonGroup style={{marginTop:"40px"}}>
        <Button variant="contained" style={{border: '2px solid #00BFFF', borderRadius: '0.5em',paddingcenter: '20px', paddingTop: '10px', width:'175px',height:'35px'}}>PREDICT</Button>
        <Button style={{ border: '2px solid #00BFFF',paddingcenter: '20px', borderRadius: '0.5em', paddingTop: '10px', width:'175px', color:'white',height:'35px'}}>ANALYTICS VIEW</Button>
        <Button onClick={OpensetAdvanceSearch}  style={{border: '2px solid #00BFFF', paddingcenter: '10px', borderRadius: '0.5em', paddingTop: '10px', width:'175px',color:'white',height:'35px'}}>ADVANCE SEARCH</Button>
        <AdvanceSearch open={AdvanceSearchOpen} handleClose={AdvanceSearchHandleClose} searchHandler={AdvanceSearchHandler} changeHandler={AdvanceSearchChangeHandler}
        />
        <Stack direction="row" spacing={1} style={{marginLeft:"20px"}}>
      <Button onClick={loadRefreshContent} variant="outlined" startIcon={<RefreshOutlinedIcon/>} />
    </Stack>
    
    <input placeholder="Enter Customer Number" style={{marginLeft:"50px" }} onChange={event => setQuery(event.target.value)}/>
    <Button  onClick={addHandler} style={{border: '2px solid #00BFFF', borderRadius: '0.5em', marginLeft:'70px',paddingcenter: '20px', paddingTop: '10px', width:'175px',height:'35px',color:'white'}}>ADD</Button>
      <AddInvoice open={open} handleClose={handleClose} business_code={business_code} cust_number={cust_number} clear_date={clear_date} buisness_year={buisness_year}
  doc_id={doc_id} posting_date={posting_date} document_create_date={document_create_date} due_in_date={due_in_date} invoice_currency={invoice_currency}
  document_type={document_type} posting_id={posting_id} total_open_amount={total_open_amount} baseline_create_date={baseline_create_date} cust_payment_terms={cust_payment_terms} invoice_id={invoice_id} changeHandler={changeHandler} submitHandler={submitHandler}/>
        
        <Button  onClick={editHandler} style={{borderTop:'2px solid #696969',borderRadius: '0.5em',borderBottom:'2px solid #696969', paddingcenter: '20px', paddingTop: '10px', width:'175px', color:'white',height:'35px'}}>EDIT</Button>
        <EditInvoice editinvoice={editinvoice} editopen={editopen} edithandleClose={edithandleClose} setOPen={seteditOpen}/>
        
        <Button  onClick={deleteHandler} style={{border: '2px solid #00BFFF', borderRadius: '0.5em',paddingcenter: '20px', paddingTop: '10px', width:'175px',color:'white',height:'35px'}}>DELETE</Button>
        <DeleteInvoice deleteopen={deleteopen} deletehandleClose={deletehandleClose} deletesubmithandler={deletesubmithandler } />
    </ButtonGroup>
        </div>
        <div style={{ height: 400, width: '100%' , marginTop:'30px',backgroundColor: "#2A3E4C"}}>
        <TableContainer component={Paper}  sx={{ width: '100%', mb: 2 , backgroundColor: "#2A3E4C" }} style={{marginTop:"2px",color:"white"}}>
      <Table  sx={{ minWidth: 750}} aria-labelledby="tableTitle" size="small" style={{marginTop:"20px", marginBottom:"20px"}}>   
        <TableHead>
          <TableRow>
          <StyledCell>Select</StyledCell>
            <StyledCell onClick={()=>sortingHandler("sl_no")}>Sl no</StyledCell>
            <StyledCell onClick={()=>sortingHandler("business_code")} align="center">Business Code</StyledCell>
            <StyledCell onClick={()=>sortingHandler("cust_number")} align="center">Cust Number</StyledCell>
            <StyledCell onClick={()=>sortingHandler("clear_date")} align="center">Clear Date</StyledCell>
            <StyledCell onClick={()=>sortingHandler("buisness_year")} align="center">Buisness Year</StyledCell>
            <StyledCell onClick={()=>sortingHandler("doc_id")} align="center">Doc Id</StyledCell>
            <StyledCell onClick={()=>sortingHandler("posting_date")} align="center">Posting Date</StyledCell>
            <StyledCell onClick={()=>sortingHandler("document_create_date")} align="center">Document Create Date</StyledCell>
            <StyledCell onClick={()=>sortingHandler("document_create_date1")} align="center">Document Create Date1</StyledCell>
            <StyledCell onClick={()=>sortingHandler("due_in_date")} align="center">Due In Date</StyledCell>
            <StyledCell onClick={()=>sortingHandler("invoice_currency")} align="center">Invoice Currency</StyledCell>
            <StyledCell onClick={()=>sortingHandler("document_type")} align="center">Document Type</StyledCell>
            <StyledCell onClick={()=>sortingHandler("posting_id")} align="center">Posting Id</StyledCell>
            <StyledCell onClick={()=>sortingHandler("area_business")} align="center">Area Business</StyledCell>
            <StyledCell onClick={()=>sortingHandler("total_open_amount")} align="center">Total Open Amount</StyledCell>
            <StyledCell onClick={()=>sortingHandler("baseline_create_date")} align="center">Baseline Create Date</StyledCell>
            <StyledCell onClick={()=>sortingHandler("cust_payment_terms")} align="center">Cust Payment Terms</StyledCell>
            <StyledCell onClick={()=>sortingHandler("invoice_id")} align="center">Invoice Id</StyledCell>
            <StyledCell onClick={()=>sortingHandler("isOpen")} align="center">IsOpen</StyledCell>
            <StyledCell onClick={()=>sortingHandler("aging_bucket")} align="center">Aging Bucket</StyledCell>
            <StyledCell onClick={()=>sortingHandler("is_deleted")} align="center">Is Deleted</StyledCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          data.filter(row=>{
            if(query==''){
              return row;
            }
            else if(row.cust_number.includes(query)){
              return row;
            }
          }).map((row) => (
            <TableRow
              key={row.sl_no}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               
              <StyledCell component="th" scope="row">
              <Checkbox onClick={(e)=>checkHandler(e,row.sl_no)}/>
              </StyledCell>
              <StyledCell width="10%" style={{whiteSpace:"nowrap"}} align="center">{row.sl_no}</StyledCell>
              <StyledCell style={{whiteSpace:"nowrap"}} align="center">{row.business_code}</StyledCell>
              <StyledCell style={{whiteSpace:"nowrap"}} align="center">{row.cust_number}</StyledCell>
              <StyledCell style={{whiteSpace:"nowrap"}} align="center">{row.clear_date}</StyledCell>
              <StyledCell style={{whiteSpace:"nowrap"}} align="center">{row.buisness_year}</StyledCell>
              <StyledCell style={{whiteSpace:"nowrap"}} align="center">{row.doc_id}</StyledCell>
              <StyledCell style={{whiteSpace:"nowrap"}} align="center">{row.posting_date}</StyledCell>
              <StyledCell style={{whiteSpace:"nowrap"}} align="center">{row.document_create_date}</StyledCell>
              <StyledCell style={{whiteSpace:"nowrap"}} align="center">{row.document_create_date1}</StyledCell>
              <StyledCell style={{whiteSpace:"nowrap"}} align="center">{row.due_in_date}</StyledCell>
              <StyledCell style={{whiteSpace:"nowrap"}} align="center">{row.invoice_currency}</StyledCell>
              <StyledCell style={{whiteSpace:"nowrap"}} align="center">{row.document_type}</StyledCell>
              <StyledCell style={{whiteSpace:"nowrap"}} align="center">{row.posting_id}</StyledCell>
              <StyledCell style={{whiteSpace:"nowrap"}} align="center">{row.area_business}</StyledCell>
              <StyledCell style={{whiteSpace:"nowrap"}} align="center">{row.total_open_amount}</StyledCell>
              <StyledCell style={{whiteSpace:"nowrap"}} align="center">{row.baseline_create_date}</StyledCell>
              <StyledCell style={{whiteSpace:"nowrap"}} align="center">{row.cust_payment_terms}</StyledCell>
              <StyledCell style={{whiteSpace:"nowrap"}} align="center">{row.invoice_id}</StyledCell>
              <StyledCell style={{whiteSpace:"nowrap"}} align="center">{row.isOpen}</StyledCell>
              <StyledCell style={{whiteSpace:"nowrap"}} align="center">{row.aging_bucket}</StyledCell>
              <StyledCell style={{whiteSpace:"nowrap"}} align="center">{row.is_deleted}</StyledCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    <Pagination
      count={count}
      page={page}
      rowsPerPage={rowsPerPage}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      
          /> 
         
        </div>
        
    
    </div>
  )
}

export default DataGrid