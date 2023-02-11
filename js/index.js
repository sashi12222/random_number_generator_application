const num=document.getElementById('number');
const btn=document.getElementById('generate');


btn.addEventListener('click',()=>{
    num.innerHTML=randomNum();
})

const randomNum=()=>{
    return Math.floor(Math.random()*1000);
}