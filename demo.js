const obj = {
  newObj: {
    obj2: {
      obj5: {
        one: 1,
      },
    },
  },
  obj3: {
    obj4: {
      two: 2,
    },
  },
};

// {
//     'newObj.obj2.obj5.one': 1,
//     'obj3.obj4.two': 2,
// }

function flat(object){
  const res={}
  function reccur(obj,pref){
    for(let key in obj){
      if(typeof obj[key]==='object' && obj[key] !==null){
        reccur(obj[key],`${pref}${key}.`)
      }else{
        res[`${pref}${key}`]=obj[key]
      }
    }
  }
  reccur(object,'')
  return res
}

const result = flat(obj);
console.log(result);