let play = document.querySelector('.play')
let pause = document.querySelector('.stop')
let volumemais = document.querySelector(".volumemais")
let volumemenos = document.querySelector('.volumemenos')
let minutes 
let timeoute

let sol = document.querySelector("#manha")
let lua = document.querySelector("#noite")

let playfloresta = document.querySelector('.Floresta')
let playchuva = document.querySelector(".Chuva")
let playcafe = document.querySelector(".Cafe")
let playlareira = document.querySelector(".Lareira")


const minutos = document.querySelector('.minutos')
const segundos = document.querySelector('.segundos')

const floresta = new Audio("Audio/Floresta.wav")
const chuva = new Audio("Audio/Chuva.wav")
const cafe = new Audio("Audio/Cafeteria.wav")
const lareira = new Audio("Audio/Lareira.wav")

const volumeForest = document.querySelector('#volForest')
const volumechuva = document.querySelector('#volchuva')
const volumecafe = document.querySelector('#volcafe')
const volumelareira = document.querySelector('#vollareira')

volumeForest.addEventListener('input', function () {
  let volForest = volumeForest.value / 100;
    
  floresta.volume = volForest;
 
})
volumechuva.addEventListener('input', function () {
  let volForest = volumechuva.value / 100;
    
  chuva.volume = volForest;
})
volumecafe.addEventListener('input', function () {
  let volForest = volumecafe.value / 100;
    
  cafe.volume = volForest;
})
volumelareira.addEventListener('input', function () {
  let volForest = volumelareira.value / 100;
    
  lareira.volume = volForest;
})
sol.addEventListener('click', function(){
    document.body.classList.add('bgpreto')
    sol.classList.add('sol')
    minutos.classList.add('bgcolor')
    segundos.classList.add('bgcolor')
    play.classList.add('svgcolo')
    pause.classList.add('svgcolo')
    volumemais.classList.add('svgcolo')
    volumemenos.classList.add('svgcolo')
    
    playfloresta.classList.add('svgcolo', 'bgcolo')
    playchuva.classList.add('svgcolo', 'bgcolo')
    playcafe.classList.add('svgcolo', 'bgcolo')
    playlareira.classList.add('svgcolo', 'bgcolo')
})
lua.addEventListener('click', function(){
   document.body.classList.remove('bgpreto')
   sol.classList.remove('sol')
   minutos.classList.remove('bgcolor')
   segundos.classList.remove('bgcolor')
   play.classList.remove('svgcolo')
   pause.classList.remove('svgcolo')
   volumemais.classList.remove('svgcolo')
   volumemenos.classList.remove('svgcolo')
   playfloresta.classList.remove('svgcolo', 'bgcolo')
   playchuva.classList.remove('svgcolo', 'bgcolo')
   playcafe.classList.remove('svgcolo', 'bgcolo')
   playlareira.classList.remove('svgcolo', 'bgcolo')
   
   
})

playfloresta.addEventListener('click', function(){
     florestasplay()
     chuva.pause()
     cafe.pause()
     lareira.pause()
})
playchuva.addEventListener('click', function(){
      chuvaplay()
      floresta.pause()
      cafe.pause()
      lareira.pause()
})
playcafe.addEventListener('click', function(){
     cafeplay()
     floresta.pause()
     chuva.pause()
     lareira.pause()
})
playlareira.addEventListener('click', function(){
  lareiraplay()
  floresta.pause()
  chuva.pause()
  cafe.pause()

})
function florestasplay(){
  
  floresta.play()
}
function chuvaplay(){
  chuva.play()
}
function cafeplay(){
   cafe.play()
}
function lareiraplay(){
  lareira.play()
}




function TimerDisplay(minutes, seconds) {
    minutos.textContent = String(minutes).padStart(2, "0")
    segundos.textContent = String(seconds).padStart(2, "0")
  }
  function resetTimer() {
   
    clearTimeout(timerTimeOut)
  }

 
function playtime(){
    timerTimeOut = setTimeout( function(){
    let seconds = Number(segundos.textContent)
    let minutes = Number(minutos.textContent)
    
  
  if(minutes <= 0 && seconds == 0){
        
        return false
     }
    
     if( seconds <= 0){
        seconds = 60
 
        --minutes
    }
   

  TimerDisplay(minutes, String(seconds - 1))
     
  
   playtime()
 }, 1000)  
}


play.addEventListener('click', function () {
    
     playtime()   


})

pause.addEventListener("click", function(){
    resetTimer()
})

volumemais.addEventListener("click", function () {
  
minutes = Number(minutos.textContent) + 5

if(minutes > 60){
  minutes = 59
}
minutos.textContent = String(minutes).padStart(2, "0")
  
}) 
volumemenos.addEventListener("click", function(){

  minutes = Number(minutos.textContent) -5

  if (minutes < 0) {
    minutes = 0;
  }
  
  minutos.textContent = String(minutes).padStart(2, "0")


})

