// Control vehicle model
const jeepData = [
  { model: "HZJ-70", name: "Trk 1/4 Ton 4x4 Toyota Jeep HZJ-70" },
  { model: "HZJ-71", name: "Trk 1/4 Ton 4x4 Toyota Jeep HZJ-71" },
  { model: "GF2WXTMHZR", name: "5 Door Jeep Model:GF2WXTMHZR " },
  { model: "TATA HEXA", name: "Jeep 5 Door  Model:TATA HEXA XT " },
  {
    model: "V-96WLNXFR",
    name: "Mitsubishi 5 Door Monetor GLS Model:V-96WLNXFR ",
  },
];
const pickupData = [
  { model: "HZJ-75", name: "Trk 1 Ton 4x4 Toyota Pickup HZJ-75" },
  { model: "HZJ-79", name: "Trk 1 Ton 4x4 Toyota Pickup HZJ-79" },
];
const threeTon = [
  { model: "FSS-33G", name: "Trk 3 Ton 4x4 Arunima Bolyan FSS-33G" },
  { model: "TRM 180.11", name: "Trk 3 Ton 4x4 Renault TRM 180.11" },
];
const motorCycle = [
  { model: "HJ125-5A", name: "Motor Cycle 125CC HJ125-5A" },
  { model: "Turbo-125CC", name: "Motor Cycle Runner Turbo 125 CC" },
  { model: "Walton-125CC", name: "Motor Cycle Walton 125 CC" },
];
const Generator = [
  { model: "APD 12 A", name: "Generator 10 KVA Model: APD 12 A" },
];
const arms = [{ model: "BD-08", name: "7.62 mm Automatic Rifle BD-08" }];
const WaterTailer = [
  { model: "2000 LTR", name: "Water Tailer Up to 2000 Ltr" },
];

const vehData = [
  {
    type: "Jeep",
    data: [...jeepData],
  },
  {
    type: "Pickup",
    data: [...pickupData],
  },
  {
    type: "3-Ton",
    data: [...threeTon],
  },
  {
    type: "Motor Cycle",
    data: [...motorCycle],
  },
  {
    type: "Generaot",
    data: [...Generator],
  },
  {
    type: "Arms",
    data: [...arms],
  },
  {
    type: "Water Tailer",
    data: [...WaterTailer],
  },
];

//Showing vehicle type
export const type = [
  { key: "Select Vehicle Type", value: "" },
  ...vehData.map((data) => ({ key: data.type, value: data.type })),
];

// Showing vehicle model full
export const getModelsByType = (selectedType) => {
  const selectedVehicle = vehData.find((data) => data.type === selectedType);
  if (selectedVehicle) {
    return [
      { key: "Select Vehicle Model", value: "" },
      ...selectedVehicle.data.map((data) => ({
        key: data.model,
        value: data.name,
      })),
    ];
  } else {
    return [{ key: "Select Vehicle Model", value: "" }];
  }
};
