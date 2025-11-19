const config = {
  db: { host: "localhost", port: 3306 },
};

function freez(obj){
    Object.freeze(obj)
    for(let i in obj){
        if(typeof obj[i] ==='object'){
            freez(obj[i])
        }
    }
}
freez(config)

config.db.host = "changed";
console.log(config.db.host)