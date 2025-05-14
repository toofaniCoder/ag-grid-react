import { AgGridReact } from 'ag-grid-react';
import { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [rowData, setRowData] = useState([]);

  const [columnDefs, setColumnDefs] = useState([

  ])

  return (
    <>
      <div className="bg-gray-50 py-10 min-h-screen">
        <div className="container mx-auto">
          <div className='h-[500px] shadow-sm rounded'>
            <AgGridReact rowData={rowData} columnDefs={columnDefs} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
