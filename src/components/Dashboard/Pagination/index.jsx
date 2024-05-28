import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import "./styles.css";

export default function PaginationComponent({page, handlePageChange}) {

  return (
    <div className="pagination-component">
      <Pagination count={10} page={page} onChange={(event, value)=>handlePageChange(event, value)} sx={{
          '& .MuiPaginationItem-root': {
            color: 'var(--white)',
            border: '1px solid var(--grey)',
          },
          '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: 'var(--blue) !important',
            color: '#fff !important',
            borderColor: 'var(--blue) !important',
          },
          '& .MuiPaginationItem-ellipsis': {
            border: '0px solid var(--grey) !important',
          },
      }}/>
    </div>
  );
}
