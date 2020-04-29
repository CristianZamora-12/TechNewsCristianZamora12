function ocultar(){
  document.getElementById('xd').style.display = 'none';
  document.getElementById('xd1').style.display = 'none';
  document.getElementById('xd2').style.display = 'none';
  document.getElementById('xd3').style.display = 'none';
  document.getElementById('xd4').style.display = 'none';
  document.getElementById('xd5').style.display = 'none';
  document.getElementById('xd6').style.display = 'none';
  document.getElementById('xd7').style.display = 'none';
}

function mostrar(){
  document.getElementById('xd').style.display = 'flex';
  document.getElementById('xd1').style.display = 'flex';
  document.getElementById('xd2').style.display = 'flex';
  document.getElementById('xd3').style.display = 'flex';
  document.getElementById('xd4').style.display = 'flex';
  document.getElementById('xd5').style.display = 'flex';
  document.getElementById('xd6').style.display = 'flex';
  document.getElementById('xd7').style.display = 'flex';
}

ocultar();

function mostrar_ocultar(){
  var listB = document.getElementById('xd');
  console.log('Boton funcionando');
  if(listB.style.display == 'none'){
    mostrar();
  } else {
    ocultar();
  }
}
