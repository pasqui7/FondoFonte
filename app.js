
const state={tfr:null,company:null};
function show(n){
 document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
 document.getElementById('s'+n).classList.add('active');
 update();
}
slider.oninput=update;
function update(){
 const r=parseFloat((ral.value||'0').replace(/\./g,'').replace(',','.'))||0;
 const p=parseFloat(slider.value);
 pct.textContent=slider.value.replace('.',',')+'%';
 contrib.textContent='Contributo annuo: € '+(r*p/100).toLocaleString('it-IT',{minimumFractionDigits:2});
}
function pickTfr(el,v){
 document.querySelectorAll('#s3 .choice').forEach(c=>c.classList.remove('selected'));
 el.classList.add('selected');
 state.tfr=v;
 next3.disabled=false;
}
function pickCompany(el,v){
 document.querySelectorAll('#s4 .choice').forEach(c=>c.classList.remove('selected'));
 el.classList.add('selected');
 state.company=v;
 finish.disabled=false;
}
update();
