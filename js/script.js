// Função para verificar o signo
function verificarSigno() {
    const nome = document.getElementById('nome').value;
    const dataNascimento = new Date(document.getElementById('dataNascimento').value);

    // Obtém o mês da data de nascimento (vale lembrar que os meses em JavaScript começam de 0)
    const mesNascimento = dataNascimento.getMonth() + 1;

    let signo = '';

    switch (mesNascimento) {
        case 1:
            signo = (dataNascimento.getDate() >= 20) ? 'Aquario' : 'Capricornio';
            break;
        case 2:
            signo = (dataNascimento.getDate() >= 19) ? 'Peixes' : 'Aquario';
            break;
        case 3:
            signo = (dataNascimento.getDate() >= 21) ? 'Aries' : 'Peixes';
            break;
        case 4:
            signo = (dataNascimento.getDate() >= 20) ? 'Touro' : 'Aries';
            break;
        case 5:
            signo = (dataNascimento.getDate() >= 21) ? 'Gemeos' : 'Touro';
            break;
        case 6:
            signo = (dataNascimento.getDate() >= 21) ? 'Cancer' : 'Gemeos';
            break;
        case 7:
            signo = (dataNascimento.getDate() >= 23) ? 'Leao' : 'Cancer';
            break;
        case 8:
            signo = (dataNascimento.getDate() >= 23) ? 'Virgem' : 'Leao';
            break;
        case 9:
            signo = (dataNascimento.getDate() >= 23) ? 'Libra' : 'Virgem';
            break;
        case 10:
            signo = (dataNascimento.getDate() >= 23) ? 'Escorpiao' : 'Libra';
            break;
        case 11:
            signo = (dataNascimento.getDate() >= 22) ? 'Sagitario' : 'Escorpiao';
            break;
        case 12:
            signo = (dataNascimento.getDate() >= 22) ? 'Capricornio' : 'Sagitario';
            break;
        default:
            signo = 'Indefinido';
            break;
    }

    const elemento = obterElementoSigno(signo);

    // Atualiza as informações na página
    document.getElementById('nomePessoa').textContent = `Nome: ${nome}`;
    document.getElementById('infoSigno').textContent = `Signo: ${signo} - Elemento: ${elemento}`;
    document.getElementById('imagemSigno').src = `imagens/${signo.toLowerCase()}.png`;
    document.getElementById('textoSigno').textContent = obterTextoSigno(signo);

    // Torna a info-container visível
    document.querySelector('.info-container').classList.add('ativo');
}

// Função para obter o elemento do signo
function obterElementoSigno(signo) {
    switch (signo) {
        case 'Aries':
        case 'Leao':
        case 'Sagitario':
            return 'Fogo';
        case 'Touro':
        case 'Virgem':
        case 'Capricornio':
            return 'Terra';
        case 'Gemeos':
        case 'Libra':
        case 'Aquario':
            return 'Ar';
        case 'Cancer':
        case 'Escorpiao':
        case 'Peixes':
            return 'Água';
        default:
            return 'Indefinido';
    }
}

// Função para obter o texto do signo
function obterTextoSigno(signo) {
    switch (signo) {
        case 'Aries':
            return 'Pessoas de Áries são conhecidas por sua energia, coragem e iniciativa. São líderes naturais e gostam de desafios.';
        case 'Touro':
            return 'Taurinos são conhecidos por sua estabilidade, persistência e senso prático. Valorizam a segurança e o conforto.';
        case 'Gemeos':
            return 'Geminianos são comunicativos, curiosos e versáteis. Têm uma mente ágil e gostam de experimentar coisas novas.';
        case 'Cancer':
            return 'Cancerianos são sensíveis, protetores e ligados à família. Valorizam a intimidade e têm grande intuição.';
        case 'Leao':
            return 'Leoninos são carismáticos, generosos e têm uma forte presença. Gostam de brilhar e serem reconhecidos.';
        case 'Virgem':
            return 'Virginianos são organizados, práticos e observadores. Têm um olhar crítico e se dedicam ao trabalho.';
        case 'Libra':
            return 'Librianos são sociáveis, equilibrados e buscam a harmonia. Valorizam relacionamentos e a justiça.';
        case 'Escorpiao':
            return 'Escorpianos são intensos, determinados e têm grande poder de transformação. São leais e misteriosos.';
        case 'Sagitario':
            return 'Sagitarianos são otimistas, aventureiros e buscam novos horizontes. Gostam de liberdade e aprendizado.';
        case 'Capricornio':
            return 'Capricornianos são disciplinados, ambiciosos e valorizam a estabilidade. Têm um forte senso de responsabilidade.';
        case 'Aquario':
            return 'Aquarianos são originais, inovadores e gostam de liberdade. Têm uma mente aberta e são voltados para o coletivo.';
        case 'Peixes':
            return 'Piscianos são intuitivos, sensíveis e têm empatia. Têm uma natureza artística e espiritual.';
        default:
            return 'Informações sobre o signo não disponíveis.';
    }
}

// Adiciona o event listener para chamar a função verificarSigno quando o botão for clicado
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('verificarSigno').addEventListener('click', verificarSigno);
});
