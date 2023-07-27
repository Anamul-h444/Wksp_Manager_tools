import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import FormikControl from "../control/FormikControl";
import BlrForm from "./BlrForm";

const PartsBlr = () => {
  const [open, setOpen] = useState(false)
  const initialState = {
    unit: "",
    garision: "",
    workOrderNo: "",
    jobCardNo: "",
    baNo: "",
    typeOfVeh: "",
    model: "",
    action: "",
    partsName: "",
    qty: "",
    wkDt: "",
    reason: "",
  };
  const [data, setData] = useState(null);
  const onSubmit = (values) => {
    setData(values);
  };
  useEffect(() => {
    console.log("Data state changed:", data);
  }, [data]);
  const handleToogle = () =>{
    setOpen(!open)
  }
  return (
    <div>
      <h1 className="mt-8 text-center">Spare Parts BLR Form</h1>
      <Formik initialValues={initialState} onSubmit={onSubmit}>
        <Form>
          <div className="grid grid-cols-3 items-center space-x-3 px-8 mt-12">
            {/* First column */}
            <div className="w-[350px] flex flex-col space-y-5">
              <FormikControl
                control="input"
                type="text"
                label="Unit Name"
                name="unit"
              />
              <FormikControl
                control="input"
                type="text"
                label="Garison Name"
                name="garision"
              />
              <FormikControl
                control="input"
                type="text"
                label="Work Order No"
                name="workOrderNo"
              />
              <FormikControl
                control="input"
                type="text"
                label="Job Card No"
                name="jobCardNo"
              />
            </div>
            {/* second Column */}
            <div className="w-[350px] flex flex-col space-y-5">
              <FormikControl
                control="input"
                type="text"
                label="BA No"
                name="baNo"
              />
              <FormikControl
                control="input"
                type="text"
                label="Type of Veh"
                name="typeOfVeh"
              />
              <FormikControl
                control="input"
                type="text"
                label="Veh Model"
                name="model"
              />
              <FormikControl
                control="input"
                type="text"
                label="Action"
                name="action"
              />
            </div>
            {/* Third Column */}
            <div className="w-[350px] flex flex-col space-y-5">
              <FormikControl
                control="input"
                type="text"
                label="Parts Name"
                name="partsName"
              />
              <FormikControl
                control="input"
                type="text"
                label="Qty"
                name="qty"
              />
              <FormikControl
                control="input"
                type="text"
                label="Work Order Date"
                name="wkDt"
              />
              <FormikControl
                control="input"
                type="text"
                label="Reason of BLR"
                name="reason"
              />
            </div>
          </div>
          <div className="flex w-full justify-center mt-10">
            <button
            onClick={handleToogle}
              className="
    py-[20px]
    px-[10rem]
    rounded-md
    uppercase
    bg-gray-400
    text-white
    inline-block
    hover:translate-y-[-3px]
    transition-all
    duration-300
    relative
    group
    active:translate-y-[-1px]
  "
            >
              Elevating
              <span
                className="
      absolute
      top-0
      left-0
      w-full
      h-full
      rounded-md
      inline-block
      z-[-1]
      transition-all
      duration-300
      bg-gray-400
      group-hover:scale-[1.4]
      group-hover:scale-y-[1.6]
      group-hover:opacity-0
    "
              ></span>
            </button>
          </div>
        </Form>
      </Formik>
      <div className="">
        {open && <BlrForm data={data || {}} handleToogle={handleToogle} className="hidden" />}
      </div>
    </div>
  );
};

export default PartsBlr;
