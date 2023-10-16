let button = document.getElementById('humanas');
let height = window.innerHeight -50;
let width = window.innerWidth -50;


let uepaAudio = new Audio('somzinho/uepa_efeito_sonoro_toquesengracadosmp3.com.mp3');

button.addEventListener('mouseover', function() {
 
    if (uepaAudio.readyState >= 2) {
        uepaAudio.currentTime = 0; 
        uepaAudio.play();
    }});

button.addEventListener('mouseover', function()
    {
       
        button.style.position= "absolute";
        button.style.top = Math.random() * height + "px";
        button.style.left = Math.random() *width + "px";
     
    });




