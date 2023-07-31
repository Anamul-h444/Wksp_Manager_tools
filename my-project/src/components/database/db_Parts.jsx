export const partsData = [
    {parts:'Brake Booster Assy', reason:["Because its bore has been excessive corroded.", "Because its body has been unserviceable"]},
    {parts:'Radiator Assy', reason:"Because its fens has been unserviceable."},
    {parts:'Self Starter Assy 12 volt', reason:"Because its fens has been unserviceable."},
    {parts:'Self Starter Assy 24 volt', reason:"Because its fens has been unserviceable."},
    {parts:'Alternator Assy 12 volt', reason:"Because its fens has been unserviceable."},
    {parts:'Alternator Assy 24 volt', reason:"Because its fens has been unserviceable."},
    {parts:'Compressor Assy', reason:"Because its fens has been unserviceable."},
    {parts:'Cyl Assy Brake Master', reason:"Because its fens has been unserviceable."},
    {parts:'Cyl Assy Clutch Master', reason:"Because its fens has been unserviceable."},
    {parts:'Cyl Assy Clutch Release', reason:"Because its fens has been unserviceable."},
]

//Showing vehicle type
export const partsName = [
    { key: "Select Parts Name", value: "" },
    ...partsData.map((data) => ({ key: data.parts, value: data.parts })),
];


// Showing reason
export const getReasonByParts = (selectedPartsName) => {
    const selectedParts = partsData.find((data) => data.parts === selectedPartsName);
    if (selectedParts) {
      const reasons = Array.isArray(selectedParts.reason)
        ? selectedParts.reason
        : [selectedParts.reason];
  
      return [
        { key: "Select reason", value: "" },
        ...reasons.map((reason) => ({ key: reason, value: reason })),
      ];
    } else {
      return [{ key: "Select reason", value: "" }];
    }
  };
  