import React, { useCallback, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import Form from "./Form";

const BlrForm = ({ data, handleToogle }) => {
  const [open, setOpen] = useState(true)
  const handleOpen = useCallback(() => {
    setOpen(false);
  }, []);
  const printItem = useRef();
 
  return (
    <div>
      
      {
        open && (
          <div className="mt-2">
            <h1 onClick={handleOpen} className="p-2 bg-rose-500 rounded-md text-center hover:bg-rose-700 text-white transition duration-300 cursor-pointer">Close BLR Form</h1>
            <div ref={printItem}>
            <div className="flex justify-center">
            <Form data={data}  />
            <Form data={data}  />
            </div>
      </div>
      <ReactToPrint
        trigger={() => <button onClick={handleToogle} className="p-2 bg-rose-500 rounded-md text-center hover:bg-rose-700 text-white transition duration-300 cursor-pointer w-full">Print</button>}
        content={() => printItem.current}
      />
          </div>
        )
      }
      
    </div>
  );
};

export default BlrForm;
