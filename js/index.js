const btnMobile = document.getElementById('checkbox-menu');

function toggleMenu(event) {
  if (event.type === 'touchstart') {
    event.preventDefault();
  }
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



const bntHospedagem = document.getElementById('hospedagem-option');
const menuHospedagens = document.getElementById('menu-hospedagem');

const caretTransf = document.getElementById('caret-hospedagem').style.transform;
const caret = document.getElementById('caret');
let openOrClose = 0;

function toggleHospedagens (event){
  event.preventDefault();
  console.log(`aqui:${caret.style.transform} `);

  if(openOrClose===0){
    caret.style.transform= 'rotate(180deg)';
    openOrClose++;
    menuHospedagens.style.display='inline';
  }else{
    caret.style.transform= 'rotate(0deg)'
    openOrClose--
    menuHospedagens.style.display='none';
  }
  
  }


bntHospedagem.addEventListener('click', toggleHospedagens);
bntHospedagem.addEventListener('touchstart', toggleHospedagens);




const btnVillaEstrelas = document.getElementById('vEstrelas-PC');
const options = document.getElementById('optionsDesktop');
const villaEstrelasDiv = document.getElementById('VillaDasEstrelas-PC');
const cimaEstrelas = document.getElementById('estrelas-cimaBotao');

function MostrarSuite (){
  if(btnVillaEstrelas.checked){
    console.log('ok');
    villaEstrelasDiv.classList.add('villaShow');
    cimaEstrelas.classList.add('btnSelected');
    document.getElementById('fotoEstrelas').src="images/logos/SELOS GANSO_VILA DAS ESTRELAS.png";
  }else{
    document.getElementById('fotoEstrelas').src="images/logos/VILA DAS ESTRELAS_BRANCO.png";
    cimaEstrelas.classList.remove('btnSelected');
    villaEstrelasDiv.classList.remove('villaShow');
  }
}

options.onclick=MostrarSuite;


const btnVillaPC = document.getElementById('reserva-estrelas');
const spanSeta = document.querySelector('.seta-btn');

btnVillaPC.onmouseover= () => {
  spanSeta.style.visibility="visible"
}

btnVillaPC.onmouseout= () => {
  spanSeta.style.visibility="hidden"
}