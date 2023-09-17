import React, { useCallback, useEffect, useState } from "react";
import { Formik, Form, FieldArray, Field } from "formik";
import FormikControl from "../control/FormikControl";
import BlrForm from "./BlrForm";
import { unitName, garisionName } from "./database/Db_unit";
import { type, getModelsByType } from "./database/Db_vehData";
import { partsName, getReasonByParts } from "./database/db_Parts";

const PartsBlr = () => {
  const [open, setOpen] = useState(false);
  const [parts, setParts] = useState(null);
  const [data, setData] = useState(null);
  const [customReason, setCustomReason] = useState(""); // Initialize customReason state
  const [vehType, setVehType] = useState(null);
  const [no, setNo] = useState(null);

  const onSubmit = (values) => {
    console.log("values", values);
    // Use customReason as the value for "reason" field on form submission
    setData({ ...values, reason: customReason });
    setNo(values.items);
  };

  const handleToogle = () => {
    setOpen(!open);
  };

  const handleChange = (e) => {
    setParts(null); // Reset selected parts when the vehicle type changes
  };

  const handleReason = (e) => {
    const selectedParts = e.target.value;
    setParts(selectedParts);

    // Update the customReason state when parts state changes
    const updatedReason = getReasonByParts(selectedParts);
    setCustomReason(updatedReason);
  };

  const handleType = (e) => {
    setVehType(e.target.value);
  };

  return (
    <div>
      <h1 className="mt-8 text-center">Spare Parts BLR Form</h1>
      <Formik
        initialValues={{
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
          reason: customReason, // Use customReason as the initial value
          items: [""],
          size: "",
        }}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="grid grid-cols-3 items-center space-x-3 px-8 mt-12">
            {/* First column */}
            <div className="w-[350px] flex flex-col space-y-5">
              <FormikControl control="select" name="unit" options={unitName} />
              <FormikControl
                control="select"
                name="garision"
                options={garisionName}
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
                control="select"
                name="typeOfVeh"
                onChange={handleType}
                options={type}
              />

              <FormikControl
                control="select"
                name="model"
                options={getModelsByType(vehType)}
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
                control="select"
                name="partsName"
                options={partsName}
                onChange={handleReason}
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
                value={customReason}
                onChange={(e) => setCustomReason(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-between px-8 mt-4">
            <div className="w-[350px]">
              <FormikControl
                control="input"
                type="text"
                label="Bty-Tyre Size"
                name="size"
              />
            </div>
            <div>
              <FieldArray name="items">
                {(FieldArrayProps) => {
                  // console.log(FieldArrayProps);
                  const { form, push, remove } = FieldArrayProps;
                  const { values } = form;
                  const { items } = values;
                  return (
                    <div>
                      {items.map((items, index) => (
                        <div key={index} className="flex justify-center">
                          <div className="flex justify-center mt-6 w-[350px] space-x-3 ">
                            <Field
                              name={`items[${index}]`}
                              className="py-3 px-2 rounded-sm w-[320px] "
                            />
                            <button onClick={() => push("")}>
                              <span className="text-gray-500">Add</span>{" "}
                            </button>
                            <button onClick={() => remove(index)}>
                              <span className="text-gray-500">Delete</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
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
              Submit
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
        {open && data && parts && (
          <BlrForm
            data={data}
            parts={parts}
            handleToogle={handleToogle}
            className="hidden"
            no={no}
          />
        )}
      </div>
    </div>
  );
};

export default PartsBlr;
