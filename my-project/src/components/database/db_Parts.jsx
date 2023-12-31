export const partsData = [
  {
    parts: "Brake Booster Assy",
    reason: "Because its bore has been excessive corroded.",
  },
  {
    parts: "Radiator Assy",
    reason: "Because its fens has been unserviceable.",
  },
  {
    parts: "Self Starter Assy 12 volt",
    reason: "Because its fens has been unserviceable.",
  },
  {
    parts: "Self Starter Assy 24 volt",
    reason: "Because its fens has been unserviceable.",
  },
  {
    parts: "Alternator Assy 12 volt",
    reason: "Because its fens has been unserviceable.",
  },
  {
    parts: "Alternator Assy 24 volt",
    reason: "Because its fens has been unserviceable.",
  },
  {
    parts: "Compressor Assy",
    reason: "Because its fens has been unserviceable.",
  },
  {
    parts: "Cyl Assy Brake Master",
    reason: "Because its fens has been unserviceable.",
  },
  {
    parts: "Cyl Assy Clutch Master",
    reason: "Because its fens has been unserviceable.",
  },
  {
    parts: "Cyl Assy Clutch Release",
    reason: "Because its fens has been unserviceable.",
  },
  {
    parts: "Bty 12 Volt",
    reason: "Because its cells has been demaged.",
  },
  {
    parts: "Cover Outer",
    reason: "Because its treads has been 75% carious.",
  },
  {
    parts: "Vinyl Cover",
    reason: "Because this is unabel to use.",
  },
  {
    parts: "Hose Pipe",
    reason: "Because this is unabel to use.",
  },
];

//Showing vehicle type
export const partsName = [
  { key: "Select Parts Name", value: "" },
  ...partsData.map((data) => ({ key: data.parts, value: data.parts })),
];

// Showing reason
export const getReasonByParts = (selectedPartsName) => {
  const selectedParts = partsData.find(
    (data) => data.parts === selectedPartsName
  );

  // Check if selectedParts is not null and return the reason
  if (selectedParts) {
    return selectedParts.reason;
  }

  // Return a default value if the selectedParts is not found
  return "";
};

// Showing reason
// export const getReasonByParts = (selectedPartsName) => {
//   const selectedParts = partsData.find((data) => data.parts === selectedPartsName);
//   if (selectedParts) {
//     const reasons = Array.isArray(selectedParts.reason)
//       ? selectedParts.reason
//       : [selectedParts.reason];

//     return [
//       { key: "Select reason", value: "" },
//       ...reasons.map((reason) => ({ key: reason, value: reason })),
//     ];
//   } else {
//     return [{ key: "Select reason", value: "" }];
//   }
// };
