const users = [
  {
    name: "Praveen",
    id: 1,
    userId: "USR001",
    services: ["Email", "Hosting", "Analytics"]
  },
  {
    name: "Alwin",
    id: 2,
    userId: "USR002",
    services: ["Cloud Storage", "VPN", "Backup"]
  },
  {
    name: "Felwin",
    id: 3,
    userId: "USR003",
    services: ["Domain", "SSL", "Firewall"]
  },
  {
    name: "Rohit",
    id: 4,
    userId: "USR004",
    services: ["Email", "Hosting", "Analytics"]
  },
  {
    name: "Sneha",
    id: 5,
    userId: "USR005",
    services: ["Cloud Storage", "VPN", "Backup"]
  }
];

// console.log(users);

// const uniq = [...new Set(users.flatMap(user=>user.services))]
// console.log(uniq);




///////////////////////

const uniq=[]
for(let i=0;i<users.length;i++){
    let serv=users[i].services
    for(let j=0;j<serv.length;j++){
        s=serv[j]
        if(!uniq.includes(s))uniq.push(s)
    }
}
console.log(uniq);
