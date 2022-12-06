var fileira = [
  {
    poltrona: 1,
    disponivel: false,    
  },
  {
    poltrona: 2,
    disponivel: true,    
  },
  {
    poltrona: 3,
    disponivel: false,    
  },
  {
    poltrona: 4,
    disponivel: true,    
  },
  {
    poltrona: 5,
    disponivel: true,    
  },
  {
    poltrona: 6,
    disponivel: true,    
  },
  {
    poltrona: 7,
    disponivel: false,    
  },
  {
    poltrona: 8,
    disponivel: false,    
  },
  {
    poltrona: 9,
    disponivel: false,    
  },
];

function initSeats() {
    for(var poltrona of fileira) {
        var imageElement = document.createElement('img');         
        if(poltrona.disponivel){
            imageElement.src = 'images/seat_avail.png';
            imageElement.alt = 'Poltrona disponível';                     
        } else {
            imageElement.src = 'images/seat_unavail.png';
            imageElement.alt = 'Poltrona indisponível';            
        }        
        document.body.appendChild(imageElement);
    }
}

function cadeirasParaMacho() {
  for (var poltronaIndex in fileira) {    
    var poltronaIndexNext = parseInt(poltronaIndex) + 1;    
    var poltronaThird = parseInt(poltronaIndexNext) + 1;    
    if (
      fileira[poltronaIndex].disponivel &&
      fileira[poltronaIndexNext].disponivel &&
      fileira[poltronaThird].disponivel
    ) {
      alert(
        `Opa, encontramos três poltronas disponíveis: ${
          fileira[poltronaIndex].poltrona
        }, ${fileira[poltronaIndexNext].poltrona} e a ${
          fileira[poltronaThird].poltrona
        }`
      );
    }
  }
}
