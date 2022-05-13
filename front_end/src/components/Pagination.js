import React from 'react'
import TablePagination from '@mui/material/TablePagination';

const Pagination = ({count,page,rowsPerPage,handleChangePage,handleChangeRowsPerPage}) => {
    
  return (
    <div>
      <TablePagination
      rowsPerPageOptions={[5, 10, 25,50,100]}
      component="div"
      count={count}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      sx={{backgroundColor: "#2A3E4C", color:"white"}}
    />
    </div>
  )
}

export default Pagination