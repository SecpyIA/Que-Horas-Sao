function formatarNumero(numero) {
    return numero.toString().padStart(2, '0');
  }
  
  function atualizarRelógio() {
    var horas = new Date().getHours();
    var minutos = new Date().getMinutes();
    var segundos = new Date().getUTCSeconds();
    var semana = new Date().getDay();
  
    switch (semana) {
      case 0: semana = "Domingo"; break;
      case 1: semana = "Segunda-Feira"; break;
      case 2: semana = "Terça-Feira"; break;
      case 3: semana = "Quarta-Feira"; break;
      case 4: semana = "Quinta-Feira"; break;
      case 5: semana = "Sexta-Feira"; break;
      case 6: semana = "Sábado"; break;
    }
  
    var relógio = formatarNumero(horas) + ':' + formatarNumero(minutos) + ':' + formatarNumero(segundos);
    var diaSemana = semana;
  
    var relógioElement = document.getElementById("relógio");
    var diaElement = document.getElementById("dia");
  
    relógioElement.innerHTML = `<h2><strong>${relógio}</strong></h2>`;
    diaElement.innerHTML = `<h3><strong>${diaSemana}</strong></h3>`;
  
    const imagensDeFundo = {
      madrugada: 'madrugada',
      manhã: 'manhã',
      tarde: 'tarde',
      noite: 'noite'
    };
  
    const períodoDoDia = horas < 7 ? { mensagem: "BOA MADRUGADA!", fundo: imagensDeFundo.madrugada }
      : horas < 12 ? { mensagem: "BOM DIA!", fundo: imagensDeFundo.manhã }
        : horas < 18 ? { mensagem: "BOA TARDE!", fundo: imagensDeFundo.tarde }
          : { mensagem: "BOA NOITE!", fundo: imagensDeFundo.noite };
  
    var msgElement = document.getElementById("msg");
    var imgElement = document.getElementById("fotos");
  
    msgElement.innerHTML = `<h4><strong>${períodoDoDia.mensagem}</strong></h4>`;
    imgElement.className = períodoDoDia.fundo;
  }
  
  atualizarRelógio();
  setInterval(atualizarRelógio, 1000);


const card = document.getElementById('section');
let pressionado = false;

// Adiciona o círculo brilhante
const circle = document.createElement('div');
circle.classList.add('circle');
card.appendChild(circle);

card.addEventListener('mousemove', function (e) {
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    brilhoX = (mouseX / rect.width) * 2 - 1;
    brilhoY = (mouseY / rect.height) * 2 - 1;
    if (!pressionado) {
        card.style.transition = 'transform 0.05s ease-in-out';
        card.style.transform = `rotateX(${brilhoY * -20}deg) rotateY(${-brilhoX * -20}deg) scale(1.2)`;
        card.style.boxShadow = `${brilhoX * -7}px ${brilhoY * -7}px 2px #91efff36`;

        // Atualiza a posição do círculo brilhante
        circle.style.top = `${mouseY - 25}px`;
        circle.style.left = `${mouseX - 25}px`;
    }
});

card.addEventListener('mouseleave', function () {
    card.classList.add('card-initial');
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '20px 20px 50px #07070767';
    card.style.transition = 'transform 0.5s ease-in-out';

    // Esconde o círculo brilhante
    circle.style.opacity = 0;
});

card.addEventListener('mouseenter', function () {
    // Mostra o círculo brilhante
    circle.style.opacity = 1;
});