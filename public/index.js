const button=document.getElementById("loginbutton")
const logo = document.getElementById('logo');
const loginimg=document.getElementById('loginimg')
const welcomepage=document.getElementById('welcomepage')
const enrollsection=document.getElementById('enrollsection')
const copyrights=document.getElementById('copyrights')
const companyname=document.getElementById('companyname')
const bighouse=document.getElementById('bighouse')
const logoimage=document.getElementById('logoimage')




button.addEventListener('submit', (e) => {
    e.preventDefault()
   welcomepage.classList.add('scale');
})
button.addEventListener('submit', (e) => {
    e.preventDefault()
    enrollsection.classList.add('scale');
 })
button.addEventListener('submit', (e) => {
    e.preventDefault()
    copyrights.classList.add('scale');
 })
button.addEventListener('submit', (e) => {
    e.preventDefault()
    companyname.classList.add('scale');
 })
 button.addEventListener('submit', (e)=>{
    e.preventDefault()
   logo.classList.add('move-rotate')

 
 setTimeout(() => {
    logo.classList.add('scale-down');
}, 1000); 


}); 
 button.addEventListener('submit', (e) => {
    e.preventDefault()
    loginimg.classList.add('scale');
});
   button.addEventListener('submit', (e) => {
    e.preventDefault()
 
    bighouse.classList.add('scale-down');

    
    setTimeout(() => {
        bighouse.classList.remove('scale-down');
        bighouse.classList.add('scale-up');
    }, 2000);
      
});
   button.addEventListener('submit', (e) => {
    e.preventDefault()
    logoimage.classList.add('scaledown');

    setTimeout(() => {
        logoimage.classList.remove('scaledown');
        logoimage.classList.add('scaleup');
    }, 2000);

    setTimeout(()=>{
        logoimage.classList.remove('scaleup');
    },4000)
  
   
 
      
});