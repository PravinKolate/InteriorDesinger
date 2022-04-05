//get Form
var form=document.querySelectorAll('.apbox')
form=this.addEventListener('change',()=>{
   var allform=document.querySelectorAll('.form1');
 
   allform.forEach(element => {
      element.style.display="block";
   });
})


// Preloader
var load=document.getElementById('loading');
function loading(){
   setInterval(loadimg,500)
  
}
function loadimg(){
   load.style.display="none";
}

//counter

var count1=document.querySelector('#counter1');
var c=0;

setInterval( ()=>{
 if(c<1000){
    c++;
    count1.innerText=c+"+";
 }

},0.1)

