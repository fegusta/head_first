var curScene = 0;

function changeScene(decision) {
  cadeirasParaMacho();
  var message = "";

  switch (curScene) {
    case 0:
      curScene = 1;
      message = "Sua jornada começa em uma bifurcação na estrada.";
      break;
    case 1:
      if (decision == 1) {
        curScene = 2;
        message = "Você chegou a uma linda casinha na floresta";
      } else {
        curScene = 3;
        message =
          "Você está posicionado em uma ponte com vista para oum rio tranquilo.";
      }
      break;
    case 2:
      if (decision == 1) {
        curScene = 4;
        message =
          "Peeking through the window, you see a witch inside the house.";
      } else {
        curScene = 5;
        message = "Desculpe, você agora faz parte do ensopado da bruxa.";
      }
      break;
    case 3:
      if (decision == 1) {
        curScene = 6;
        message =
          "Desculpe, tem um ogro que mora do outro lado da ponte e você agora é o almoço dele.";
      } else {
        curScene = 7;
        message =
          "Seu contemplamento é interrompido pela chegada de um ogro enorme.";
      }
      break;
    case 4:
      if (decision == 1) {
        curScene = 8;
      } else {
        curScene = 5;
        message = "Desculpe, você agora faz parte do ensopado da bruxa.";
      }
      break;
    case 5:
      curScene = 0;
      break;
    case 6:
      curScene = 0;
      break;
    case 7:
      if (decision == 1) {
        curScene = 6;
        message = "Sorry, you became the troll's tasty lunch.";
      } else {
        curScene = 9;
      }
      break;
    case 8:
      break;
    case 9:
      break;
  }

  document.getElementById("sceneimg").src = "images/scene" + curScene + ".png";
  if (message != "") {
    alert(message);
  }
}

function cadeirasParaMacho() {
  fileira = [
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

  for (var poltronaIndex in fileira) {
    var poltronaIndexNext = poltronaIndex++;
    var poltronaThird = poltronaIndexNext++;
    if (
      fileira[poltronaIndex].disponivel == true &&
      fileira[poltronaIndexNext].disponivel == true &&
      fileira[poltronaThird].disponivel == true
    ) {
      alert(`Opa, encontramos três poltronas disponíveis: ${fileira[poltronaIndex].poltrona}, ${fileira[poltronaIndex + 1].poltrona} e a ${fileira[poltronaIndex + 2].poltrona}`);
    }
  }
}
