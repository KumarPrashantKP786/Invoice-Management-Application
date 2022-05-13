import axios from "axios"
export const getData = async (start,limit,orderBy,order) => {
      let str="start="+(start*limit)+"&limit="+limit+"&orderby="+orderBy+"&order="+order;
      let response=await axios.get("http://localhost:8080/HRC_Final/getUser?"+str);
      let data=response.data.customers;
      let count=response.data.count;
      return {count,data};
}
export const addInvoice=async({business_code,cust_number,clear_date,buisness_year,
   doc_id,posting_date,document_create_date,due_in_date,invoice_currency,
   document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id})=>{
      console.log(business_code);
      let data="business_code="+business_code+"&cust_number="+cust_number+"&clear_date="+clear_date.toString()+"&buisness_year="+buisness_year+
      "&doc_id="+doc_id+"&posting_date="+posting_date.toString()+"&document_create_date="+document_create_date.toString()+"&due_in_date="+due_in_date.toString()+"&invoice_currency="+invoice_currency+
      "&document_type="+document_type+"&posting_id="+posting_id+"&total_open_amount="+total_open_amount+"&baseline_create_date="+baseline_create_date.toString()+"&cust_payment_terms="+cust_payment_terms+"&invoice_id="+invoice_id;
      let response=await axios.get("http://localhost:8080/HRC_Final/AddCustomer?" + data)
      return response.data;
}

export const updateInvoice=async(invoice_currency,cust_payment_terms,sl_no)=>{
   let data="invoice_currency="+invoice_currency+"&cust_payment_terms="+cust_payment_terms+"&sl_no="+sl_no;
   let response=await axios.get("http://localhost:8080/HRC_Final/editInvoice?" + data)
   return response.data;
}

export const deleteInvoice=async(sl_no)=>{
   let data="sl_no="+sl_no;
   let response=await axios.get("http://localhost:8080/HRC_Final/deleteInvoice?"+data);
   return response.data;
}


export const AdvanceSearchFun  = async (AdvanceSearchInvoice) => {
   let str="invoice_id="+AdvanceSearchInvoice.invoice_id+"&cust_number="+AdvanceSearchInvoice.cust_number+"&buisness_year="+AdvanceSearchInvoice.buisness_year+"&doc_id="+AdvanceSearchInvoice.doc_id;
   let response=await axios.get("http://localhost:8080/HRC_Final/advanceSearch?"+str);
   let data=response.data.customers;
   let count=response.data.count;
   return {count,data};   
}