var maquininhas = ['Minizinha NFC', 'Minizinha Chip 3', 'Moderninha Plus', 'Moderninha Pro 2', 'Moderninha Smart'];

var nomes = ["Edpo","Isabella","Camila","Valentina","Valeria","Mariana","Luciana","Daniela","Gabriela","Victoria","Martina","Lucia","Fatima","Leticia","Sara","Wilian","Maria José","Emiliana","Marta","Julieta","Antonella","Renata","Emilia","Natalia","Zoe","Nicole","Paula","Amanda","Maria Fernanda","Emily","Antonia","Alejandra","Juliana","Andrea","Manuela","Ana Sofia","Agustina","Elena","Mara","Bianca","Ariana","Ivanna","Carolina","Maite","Rafaela","Regina","Adriana","Michelle","Alana","Salomão","Juliana","Isabel","Allison","Julia","Lola","Luna","Ana","Alessandra","Olivia","Paulina","Rebeca","Carla","Mari­a Paula","Micaela","Fabiana","Miranda","Josefina","Laura","Alexa","Alexandra","Luana","Fátima","Sara Sofia","Isidora","Malena","Ana Paula","Amelia","Elizabeth","Ariadna","Mari­a Camila","Irene","Silvana","Clara"];

var cidades = ["São Paulo","Rio de Janeiro","Salvador","Brasília","Fortaleza","Belo Horizonte","Manaus","Curitiba","Recife","Porto Alegre","Belém","Goiânia","Guarulhos","Campinas","São Luís","São Gonçalo","Maceió","Duque de Caxias","Natal","Campo Grande","Teresina","São Bernardo do Campo","Nova Iguaçu","João Pessoa","Santo André","Osasco","São José dos Campos","Jaboatão dos Guararapes","Ribeirão Preto","Uberlândia","Contagem","Sorocaba","Aracaju","Feira de Santana","Cuiabá","Joinville","Juiz de Fora","Londrina","Aparecida de Goiânia","Ananindeua","Niterói","Porto Velho","Campos dos Goytacazes","Belford Roxo","Serra","Caxias do Sul","Vila Velha","Florianópolis","São João de Meriti","Mauá","Macapá","São José do Rio Preto","Santos","Mogi das Cruzes","Betim","Diadema","Campina Grande","Jundiaí","Maringá","Montes Claros","Carapicuíba","Olinda","Piracicaba","Cariacica","Bauru","Rio Branco","Anápolis","São Vicente","Vitória","Caucaia","Itaquaquecetuba","Caruaru","Pelotas","Vitória da Conquista","Canoas","Franca","Ponta Grossa","Blumenau","Petrolina","Paulista","Ribeirão das Neves","Uberaba","Boa Vista","Cascavel","Guarujá","Taubaté","Petrópolis","Limeira","Praia Grande","São José dos Pinhais","Santarém","Mossoró","Suzano","Camaçari","Governador Valadares","Santa Maria","Gravataí","Taboão da Serra","Várzea Grande","Palmas"];

var imagePath = "./notificar/"; // Caminho da pasta "notificar" - Certifique-se de criar essa pasta no mesmo diretório onde este script está localizado

function push(nome, maquininha, imagem, localizacao, mudarFrase = false) {
  var faltam = [27, 15, 31, 26, 10, 9];
  var mensagem = '';

  if (!mudarFrase) {
    mensagem = '<span class="comprou-t1">' + nome + ' <span>acabou de comprar</span></span><span class="comprou-t2">' + maquininha + '</span><span class="comprou-t3">Restam apenas ' + faltam[imagem] + '!</span><div class="comprou-faixa"></div>';
  } else {
    var dt = new Date();
    var compraram = (dt.getSeconds() * 3);

    mensagem = '<span class="comprou-t1">' + compraram + ' pessoas <span>compraram</span></span><span class="comprou-t2">' + maquininha + ' em <span>' + localizacao + '</span></span><span class="comprou-t3">Nos últimos 15 minutos!</span>';
  }

  notify({
    type: "alert",
    title: null,
    message: mensagem,
    position: { x: "right", y: "top" },
    icon: '<img src="' + imagePath + 'images/' + imagem + '.png" />',
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
    _classes: { content: ".comprou-right" }
  });
}

function getRandom(min = 0, max = 90) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCidade() {
  return cidades[getRandom(0, cidades.length - 1)];
}

timeOutPush();

function timeOutPush(intervalo = 10000) {
  var nome = nomes[getRandom()];
  var imagem = getRandom(0, 5);
  var maquininha = maquininhas[imagem];
  var cidade = getCidade();
  var mudarFrase = false;

  if (getRandom(0, 5) > 3) {
    if (typeof localizacao !== 'undefined') {
      mudarFrase = true;
    }
  }

  setTimeout(function () {
    push(nome, maquininha, imagem, cidade, mudarFrase);
    intervalo = getRandom(55000, 95000);
    timeOutPush(intervalo);
  }, intervalo);
}