


function pl(e){
    let uttr=new SpeechSynthesisUtterance("bcznmcvcxnbv")
    console.log(speechSynthesis.getVoices()[0])
}
pl("Hello")



setTimeout(() => {
    document.getElementById('toggle').addEventListener('click',e=>{
        
        document.getElementById('side').classList.toggle('hide')
    })


    document.getElementById("fl").addEventListener("click",e=>{
        document.getElementById("logo_wrapper").style.width="50%"
       let audio="/project/audio/opener.mp3"
       let aud=new Audio(audio)
       aud.play()
        document.getElementById("sign_wrapper").style.width="50%"
        e.target.style.display="none"
        
    })
  

window.addEventListener('click',e=>{
    if(e.target.id!='side' && e.target.id!='toggle' && e.target.id!='tgl'){
        
        document.getElementById('side').classList.remove('hide')
    }
    
})
}, 300);




