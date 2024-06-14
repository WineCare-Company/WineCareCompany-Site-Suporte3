var num = 1;

    async function gerarResposta() {
        const pergunta = document.getElementById('pergunta').value;

        const response = await fetch('/perguntar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ pergunta })
        });

        const data = await response.json();

        resposta.style.display = 'block';
        document.getElementById('resposta').innerHTML += num + ' - ' + data.resultado + '<br><br>';

        num++;
    }



    document.addEventListener("DOMContentLoaded", function () {
        const text = `Olá e bem-vindo ao nosso time de suporte! \n\n Sou a Wix, a inteligência artificial de nível 3 pronta para ajudar você a resolver problemas complexos e oferecer suporte avançado. \n\n\n Ao Lado você pode me perguntar sobre... \n\n * Diagnóstico Avançado \n\n * Soluções Técnicas Detalhadas \n\n * Consultoria e Melhorias \n\n * Informações e Atualizações`;


        let index = 0;
        let isTag = false;

        function typeWriter() {
            const display = document.getElementById("mensagem");

            if (index < text.length) {
                if (text[index] === '<') {
                    isTag = true;
                }

                if (isTag) {
                    display.innerHTML += text[index];
                } else if (text[index] === '\n') {
                    display.innerHTML += '<br>';
                } else {
                    display.innerHTML += text.charAt(index);
                }

                if (text[index] === '>') {
                    isTag = false;
                }

                index++;
                setTimeout(typeWriter, 20);
            }
        }

        typeWriter();
    });