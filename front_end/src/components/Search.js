import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Search = (props) => {
    //console.log(props)
    const getSearchTerm = (e) => {
     console.log(e.target.value)
     props.searchKeyword(e.target.value)
    }
  return (
    <div>
     <Box style={{marginLeft:'30px',height:'10px'}}>
      <TextField 
      id="outlined-basic" 
      placeholder="Search Customer Id" 
      variant="outlined"
      size="small" 
      style={{backgroundColor:"white"}}
      value={props.term}
      onChange={getSearchTerm}
       />
       
    </Box>
    </div>
  )
}

export default Search