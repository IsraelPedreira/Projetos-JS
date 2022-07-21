const relogio = document.querySelector('.relogio')

let segundos = 0
let timer;


function getTimeSeconds(segundos){
    const data = new Date(segundos*1000)
    return data.toLocaleTimeString('pt-BR', {hour12:false, timeZone:'GMT'})
}


function iniciaContagem(){
    timer = setInterval(function(){
        segundos++
        relogio.innerHTML = `${getTimeSeconds(segundos)}`
    },1000)
    relogio.style.color = 'black'
}


function pausaContagem (){
    clearInterval(timer)
    relogio.style.color = 'red'
}


function zerarContagem (){
    pausaContagem()
    segundos = 0
    relogio.innerHTML =`${getTimeSeconds(segundos)}`
    relogio.style.color = 'black'
}
