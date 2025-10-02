const inputEl=document.querySelector('input')
const normal=document.getElementById('normal')
const debounce=document.getElementById('debounce')


const updateFn = debounceFn((text)=>{
    debounce.textContent =text

})

inputEl.addEventListener('input',e=>{
    normal.textContent = e.target.value
        updateFn(e.target.value)
})



function debounceFn(cb,wait=2000){
    let time
    return (...args)=>{
        clearTimeout(time)
       time= setTimeout(()=>{
            cb(...args)
        },wait)
    }
}