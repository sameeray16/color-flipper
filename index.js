// hex 
const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const hexBtn = document.getElementById('hexBtn');
const hexText = document.getElementById('hexText');
const hexDiv = document.getElementById('hex');

hexBtn.addEventListener('click',function(){
   let hexColor = "#";
   function randomNumber(){
    return Math.floor(Math.random()*hex.length);
   }
   for(let i=0; i<6 ; i++){
    hexColor += hex[randomNumber()];
   } 
   hexText.textContent = hexColor;
   hexDiv.style.backgroundColor = hexColor;
});

//rgb
const rgbBtn = document.getElementById('rgbBtn');
const rgbText = document.getElementById('rgbText');
const rgbDiv = document.getElementById('rgb');

rgbBtn.addEventListener('click',function(){
    function randomNumber(){
        return Math.floor(Math.random()*256);
       }
    let rgbColor = "rgb("+randomNumber()+","+randomNumber()+","+randomNumber()+")";
    rgbText.textContent = rgbColor;
    rgbDiv.style.backgroundColor = rgbColor;
});

//hsl
const hslBtn = document.getElementById('hslBtn');
const hslText = document.getElementById('hslText');
const hslDiv = document.getElementById('hsl');

hslBtn.addEventListener('click',function(){
    function randomNumber(){
        return Math.floor(Math.random()*361);
       }
       function randomNumber2(){
        return Math.floor(Math.random()*101);
       }
    let hslColor = "hsl("+randomNumber()+","+randomNumber2()+"%,"+randomNumber2()+"%)";
    hslText.textContent = hslColor;
    hslDiv.style.backgroundColor = hslColor;
});