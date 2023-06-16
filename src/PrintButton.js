import React from 'react'

function PrintButton() {

    const handlePrintButton=()=>{
        window.print();
    }

  return (
    <div>
    <button onClick={handlePrintButton}>Print</button>
    </div>
  )
}

export default PrintButton