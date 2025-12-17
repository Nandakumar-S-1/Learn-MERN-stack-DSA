const input=document.querySelector('input')
const normal=document.getElementById('normal')
const throttle=document.getElementById('throttle')

const updateThrottle = throttleFn(text=>{
    throttle.textContent=text
})

input.addEventListener('input',e=>{
    normal.textContent=e.target.value
    updateThrottle(e.target.value)
})

function throttleFn(cb,delay=1000){
    let wait = false
    return (...args)=>{
        if(wait) return
        cb(...args)
        wait=true
        setTimeout(()=>{
            wait=false
        },delay)
    }
}