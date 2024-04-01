// MAQUININHAS
var maquininhas = [
    'Minizinha NFC',
    'Minizinha Chip 3',
    'Moderninha Plus',
    'Moderninha Pro 2',
    'Moderninha Smart'
];

// NOMES DAS PESSOAS
var nomes = [
    "Edpo", "Isabella", "Camila", "Valentina", "Valeria", "Mariana", "Luciana", "Daniela", "Gabriela", "Victoria", 
    "Martina", "Lucia", "Fatima", "Leticia", "Sara", "Wilian", "Maria José", "Emiliana", "Marta", "Julieta", 
    "Antonella", "Renata", "Emilia", "Natalia", "Zoe", "Nicole", "Paula", "Amanda", "Maria Fernanda", "Emily", 
    "Antonia", "Alejandra", "Juliana", "Andrea", "Manuela", "Ana Sofia", "Agustina", "Elena", "Mara", "Bianca", 
    "Ariana", "Ivanna", "Carolina", "Maite", "Rafaela", "Regina", "Adriana", "Michelle", "Alana", "Salomão", 
    "Juliana", "Isabel", "Allison", "Julia", "Lola", "Luna", "Ana", "Alessandra", "Olivia", "Paulina", "Rebeca", 
    "Carla", "Maria Paula", "Micaela", "Fabiana", "Miranda", "Josefina", "Laura", "Alexa", "Alexandra", "Luana", 
    "Fátima", "Sara Sofia", "Isidora", "Malena", "Ana Paula", "Amelia", "Elizabeth", "Ariadna", "Maria Camila", 
    "Irene", "Silvana", "Clara"
];

// CIDADES
var cidades = [
    "São Paulo-SP", "Rio de Janeiro-RJ", "Salvador-BA", "Brasília-DF", "Fortaleza-CE", "Belo Horizonte-MG", 
    "Manaus-AM", "Curitiba-PR", "Recife-PE", "Porto Alegre-RS", "Belém-PA", "Goiânia-GO", "Guarulhos-SP", 
    "Campinas-SP", "São Luís-MA", "São Gonçalo-RJ", "Maceió-AL", "Duque de Caxias-RJ", "Natal-RN", 
    "Campo Grande-MS", "Teresina-PI", "São Bernardo do Campo-SP", "Nova Iguaçu-RJ", "João Pessoa-PB", 
    "Santo André-SP", "Osasco-SP", "São José dos Campos-SP", "Jaboatão dos Guararapes-PE", "Ribeirão Preto-SP", 
    "Uberlândia-MG", "Contagem-MG", "Sorocaba-SP", "Aracaju-SE", "Feira de Santana-BA", "Cuiabá-MT", 
    "Joinville-SC", "Juiz de Fora-MG", "Londrina-PR", "Aparecida de Goiânia-GO", "Ananindeua-PA", "Niterói-RJ", 
    "Porto Velho-RO", "Campos dos Goytacazes-RJ", "Belford Roxo-RJ", "Serra-ES", "Caxias do Sul-RS", 
    "Vila Velha-ES", "Florianópolis-SC", "São João de Meriti-RJ", "Mauá-SP", "Macapá-AP", 
    "São José do Rio Preto-SP", "Santos-SP", "Mogi das Cruzes-SP", "Betim-MG", "Diadema-SP", "Campina Grande-PB", 
    "Jundiaí-SP", "Maringá-PR", "Montes Claros-MG", "Carapicuíba-SP", "Olinda-PE", "Piracicaba-SP", 
    "Cariacica-ES", "Bauru-SP", "Rio Branco-AC", "Anápolis-GO", "São Vicente-SP", "Vitória-ES", "Caucaia-CE", 
    "Itaquaquecetuba-SP", "Caruaru-PE", "Pelotas-RS", "Vitória da Conquista-BA", "Canoas-RS", "Franca-SP", 
    "Ponta Grossa-PR", "Blumenau-SC", "Petrolina-PE", "Paulista-PE", "Ribeirão das Neves-MG", "Uberaba-MG", 
    "Boa Vista-RR", "Cascavel-PR", "Guarujá-SP", "Taubaté-SP", "Petrópolis-RJ", "Limeira-SP", "Praia Grande-SP", 
    "São José dos Pinhais-PR", "Santarém-PA", "Mossoró-RN", "Suzano-SP", "Camaçari-BA", "Governador Valadares-MG", 
    "Santa Maria-RS", "Gravataí-RS", "Taboão da Serra-SP", "Várzea Grande-MT", "Palmas-TO"
];

function push(nome, maquininha, imagem, localizacao, mudarFrase = false) {
  // Array com a quantidade de maquininhas restantes
  var faltam = [27, 15, 31, 26, 10, 9];

  // Verifica se deve mudar a frase da notificação
  if (!mudarFrase) {
    // Monta a mensagem padrão
    var mensagem = '<span class="comprou-t1">' + nome + ' <span>acabou de comprar</span></span><span class="comprou-t2">' + maquininha + '</span><span class="comprou-t3">Restam apenas ' + faltam[imagem - 1] + '!</span><div class="comprou-faixa"></div>';
  } else {
    // Se mudarFrase for true, monta uma mensagem personalizada
    var dt = new Date();
    var compraram = dt.getSeconds() * 3;
    var mensagem = '<span class="comprou-t1">' + compraram + ' pessoas <span>compraram</span></span><span class="comprou-t2">' + maquininha + ' em <span>' + localizacao + '</span></span><span class="comprou-t3">Nos últimos 15 minutos!</span>';
  }

  // Exibe a notificação
  notify({
    type: "alert",
    title: null,
    message: mensagem,
    position: {
      x: "right",
      y: "top"
    },
    icon: '<img src="image/' + imagem + '.png" />',
    size: "normal",
    overlay: false,
    closeBtn: true,
    overflowHide: false,
    spacing: 20,
    theme: "default",
    autoHide: true,
    delay: 6000,
    onShow: null,
    onClick: null,
    onHide: null,
    template: '<div class="comprou"><div class="comprou-right"></div></div>',
    _classes: {
      content: ".comprou-right"
    }
  });
}

//FUNÇÃO PARA RANDOMIZAR UM INTERVALO DE NUMEROS
function getRandom(min = 0, max = 90) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//FUNÇÃO TRAZ O NOME DA CIDADE DO USUARIO
function getCidade(){

  if (typeof localizacao !== 'undefined'){
    var cidade = localizacao;
  }else{
    var cidade = cidades[getRandom(0,99)];
  }

  return cidade;
}

// FUNÇÃO PARA RANDOMIZAR UM INTERVALO DE NÚMEROS
function getRandom(min = 0, max = 90) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// FUNÇÃO QUE RETORNA O NOME DA CIDADE DO USUÁRIO OU UMA CIDADE ALEATÓRIA
function getCidade() {
  var cidade;
  if (typeof localizacao !== 'undefined') {
    cidade = localizacao;
  } else {
    cidade = cidades[getRandom(0, cidades.length - 1)];
  }
  return cidade;
}

// FUNÇÃO PARA TIMEOUT COM PUSH
function timeOutPush(intervalo = 10000) {
  // NOME DO CLIENTE
  var nome = nomes[getRandom()];

  // NOME DA MAQUININHA E IMAGEM
  var imagem = getRandom(0, 5);
  var maquininha = maquininhas[imagem];
  var cidade = getCidade();
  var mudarFrase = false;

  // Verifica se deve mudar a frase
  if (getRandom(0, 5) > 3 && typeof localizacao !== 'undefined') {
    mudarFrase = true;
  }

  // Define o tempo aleatório para o próximo push
  var proximoIntervalo = getRandom(55000, 95000);

  // Timeout para o PUSH
  setTimeout(function () {
    push(nome, maquininha, imagem, cidade, mudarFrase);
    // Chama recursivamente a função com o novo intervalo
    timeOutPush(proximoIntervalo);
  }, intervalo);
}

// Chama a função inicialmente
timeOutPush();
