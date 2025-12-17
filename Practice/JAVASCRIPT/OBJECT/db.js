const data = [
  {
    name: "John",
    status: "completed",
    services: ["Cleaning", "Repairing", "Painting"]
  },
  {
    name: "Alice",
    status: "pending",
    services: ["Washing", "Gardening"]
  },
  {
    name: "Bob",
    status: "completed",
    services: ["Cooking", "Driving"]
  }
];


function getFinished(data){
    return data
    .filter(val=>val.status==="completed")
    .map(val=>val.services)
    // .flat()
}

console.log(getFinished(data))

