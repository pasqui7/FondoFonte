const step1=document.getElementById('step1');
const step2=document.getElementById('step2');
const ral=document.getElementById('ral');
const slider=document.getElementById('slider');

document.getElementById('next').addEventListener('click',()=>{
  step1.classList.remove('active');
  step2.classList.add('active');
  update();
});

document.getElementById('back').addEventListener('click',()=>{
  step2.classList.remove('active');
  step1.classList.add('active');
});

slider.addEventListener('input',update);

function update(){
 const pct=parseFloat(slider.value);
 document.getElementById('percent').textContent=slider.value.replace('.',',')+'%';
 const r=parseFloat((ral.value||'0').replace(/\./g,'').replace(',','.'))||0;
 const ann=r*pct/100;
 document.getElementById('summary').textContent=
 'Contributo annuo: € '+ann.toLocaleString('it-IT',{minimumFractionDigits:2});
}
update();
