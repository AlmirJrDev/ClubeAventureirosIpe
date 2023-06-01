function openDialog() {
    var dialog = document.getElementById("dialog");
    dialog.style.display = "block";
  }

  function closeDialog() {
    var dialog = document.getElementById("dialog");
    dialog.style.display = "none";
  }

  function exibirImagem(opcaoSelecionada) {
    var imagemDiv = document.getElementById("imagem");
    var imagemURL = "./assets/logo.jpeg"; // URL da imagem correspondente à opção selecionada
    var botaoCopiar = document.getElementById("botao-copiar");
    var textoCopiavel = document.getElementById("texto-copiar");

    // Defina a URL da imagem com base na opção selecionada
    if (opcaoSelecionada === "opcao1") {
      imagemURL = "./assets/qrcode.jpeg";
      textoCopiavel.textContent = "00020126400014br.gov.bcb.pix0111711357589720203Pix520400005303986540530.005802BR5925ALMERINDA MARQUES DE ARAU6008Brasilia62290525Ho5tTbGw0YuqSTLJTbaVA4uMO63048BDA";
      botaoCopiar.style.display = "block";
    } else if (opcaoSelecionada === "opcao2") {
      imagemURL = "./assets/qrcode.jpeg";
      textoCopiavel.textContent = "Texto copiável para Opção 2";
      botaoCopiar.style.display = "block";
    } else if (opcaoSelecionada === "opcao3") {
      imagemURL = "./assets/qrcode.jpeg";
      textoCopiavel.textContent = "Texto copiável para Opção 3";
      botaoCopiar.style.display = "block";
    } else {
      imagemDiv.innerHTML = "./assets/logo.jpeg"; // Limpa a imagem
      botaoCopiar.style.display = "none"; // Oculta o botão Copiar
      textoCopiavel.textContent = ""; // Limpa o texto copiável
    }

    // Exibe a imagem
    imagemDiv.innerHTML = `<img src="${imagemURL}" alt="Imagem Escolhida">`;
  }

  function copiarTexto() {
    var textoCopiavel = document.getElementById("texto-copiar");
    var mensagemCopiado = document.getElementById("mensagem-copiado");

    // Cria um elemento de área de transferência temporário
    var tempInput = document.createElement("textarea");
    tempInput.value = textoCopiavel.textContent;
    document.body.appendChild(tempInput);

    // Copia o conteúdo para a área de transferência
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Exibe a mensagem de texto copiado
    mensagemCopiado.style.display = "block";

    // Oculta a mensagem após 3 segundos
    setTimeout(function () {
      mensagemCopiado.style.display = "none";
    }, 3000);
  }