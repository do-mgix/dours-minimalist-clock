const columns = 6;
const rows = 6;
const modules = [];

function createClock(){

 const container = document.getElementById('clock-container');

 // update layout css vars
 container.style.setProperty('--cols', columns);
 container.style.setProperty('--rows', rows);

 container.innerHTML = '';
 
 const totalModules = columns * rows;
 const fragment = document.createDocumentFragment();

 for (let i = 1; i <= totalModules; i++ ){
  const module = document.createElement('div');
  module.classList.add('module');	 

  const initialStatus = 0;
  module.setAttribute('data-status', initialStatus);
  fragment.appendChild(module);	 

  // salva array de modules com idexes	
  modules.push(module);	 
 }

 container.appendChild(fragment)	
}

function updateClock(){
 const now = new Date();
 
 // format to hh mm ss 
 const formatedTime = now.toLocaleTimeString('pt-BR')

 // update clock html tag
 document.getElementById("clock").textContent = formatedTime;

}

function updateAbacusClock(){
 const now = new Date();
 
 const y = now.getFullYear();
 const mo = now.getMonth();
 const d = now.getDate();
 const h = now.getHours();
 const m = now.getMinutes();
 const s = now.getSeconds();

 const maxDay = new Date(y, mo +1, 0).getDate();

 const sVal = Math.floor((s / 60) * columns);
 const mVal = Math.floor((m / 60) * columns);
 const hVal = Math.floor((h / 24) * columns);
 const dVal = Math.floor((d / maxDay) * columns);
 const moVal = Math.floor((mo / 12) * columns);

 // segundos - 10 = 01, 20 = 02, 60 = 06
 // minutos - 10 = 01, 20 = 02, 60 = 06
 // horas - 24/6 = 4; 4 = 01, 8 = 02, 24 = 06
 // dias - feveiro 30; 30/6 = 5; 5 = 01, 30 = 06
 // mês  - 12/6 = 2; 2 = 01, 12 = 06
 // ano [ 2 mi 2 ce 2 de ] 2026 = - X - - - X
 // -- = 0; -X = <50; X- = >50;  
 
 for ( let col = 0; col < columns; col++ ){
  for ( let row = 0; row < rows; row++ ){
   const index = row * columns + col;
   let active = false;

   if ( row === 5 && col === sVal ) { active = true; } 
   if ( row === 4 && col === mVal ) { active = true; } 
   if ( row === 3 && col === hVal ) { active = true; } 
   if ( row === 2 && col === dVal ) { active = true; } 
   if ( row === 1 && col === moVal ) { active = true; } 

   const status = active ? '1' : '0';	  

   if ( modules[index].getAttribute('data-status') !== status ) {
    modules[index].setAttribute('data-status', status );
   }	  
  } 
 }


}

createClock();

// updates on start
updateClock();
updateAbacusClock();

// 1000ms - 1s clock update
setInterval(updateClock, 1000);
setInterval(updateAbacusClock, 1000);
