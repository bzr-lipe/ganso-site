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