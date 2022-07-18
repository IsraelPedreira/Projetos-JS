const form = document.querySelector('#formulario')
form.addEventListener('submit', function(ev){
    ev.preventDefault();
    
});



const botao = document.querySelector('.botao');
botao.addEventListener('click',function calculaIMC(){
    const peso = Number(document.querySelector('#peso').value);
    const altura = Number(document.querySelector('#altura').value);
    const resposta = document.querySelector('.resposta');
    const imc = (peso/((altura/100)*(altura/100))).toFixed(2);
    

    function adicionaCorResultado(cor){
        if (cor =='negativo'){
            resposta.classList.add('resultadoNegativo')
            resposta.classList.remove('resultadoPositivo')
        }
        if(cor =='positivo'){
            resposta.classList.add('resultadoPositivo')
            resposta.classList.remove('resultadoNegativo')
        }
    }
    if(imc<18.5){
        resposta.innerHTML=`Você está ABAIXO do peso. Seu imc é ${imc}`
        adicionaCorResultado('negativo')
    }
    if(imc >=18.5 && imc <=24.9){
        resposta.innerHTML=`Seu peso está NORMAL. Seu imc é ${imc}  `
        adicionaCorResultado('positivo')
    }
    if(imc>=25 && imc<30){
        resposta.innerHTML=`Você está com SOBREPESO. Seu imc é ${imc} `
        adicionaCorResultado('negativo')
    }
    if(imc>=30 && imc<=34.9){
        resposta.innerHTML=`Você está com OBESIDADE grau 1. Seu imc é ${imc}`
        adicionaCorResultado('negativo')
    }
    if(imc>=35 && imc<40){
        resposta.innerHTML=`Você está com OBESIDADE grau 2. Seu imc é ${imc}`
        adicionaCorResultado('negativo')
    }
    if(imc>40){
        resposta.innerHTML=`Você está com OBESIDADE grau 3. Seu imc é ${imc}`
        adicionaCorResultado('negativo')
    }if(imc<0){
        resposta.innerHTML=`IMC inválido. Preencha os campos acima corretamente`
        adicionaCorResultado('negativo')
    }

});

