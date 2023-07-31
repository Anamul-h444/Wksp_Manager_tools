// Control vehicle model
const jeepData =[
    {model:"HZJ-70", name:"Trk 1/4 Ton 4x4 Toyota Jeep HZJ-70"},
    {model:"HZJ-71", name:"Trk 1/4 Ton 4x4 Toyota Jeep HZJ-71"},

]
const pickupData = [
    {model:"HZJ-75", name:"Trk 1 Ton 4x4 Toyota Pickup HZJ-75"},
    {model:"HZJ-79", name:"Trk 1 Ton 4x4 Toyota Pickup HZJ-79"},
]
const vehData = [
    {
        type: "Jeep",
        data: [...jeepData],
    },
    {
        type: "Pickup",
        data: [...pickupData],
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