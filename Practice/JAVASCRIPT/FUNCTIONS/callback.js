// function callback(){
//     console.log('call back function called');
// }
// function MainFun(){
//     console.log('main function');
    
//     callback()
// }
// MainFun(callback)

///////////////////////
function greeting(name,cb){
    console.log('name: ',name);
    
    callbackFun()
}
function callbackFun(){
    console.log('call back workig')
}
greeting('nandu',callbackFun)