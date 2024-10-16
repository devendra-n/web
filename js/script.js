

function switch_to(e,to){
   e.preventDefault()
    if (to=="login"){
        let reg=document.getElementById('rfrm').style
        reg.display="none"
        //reg.transform='rotateY(90deg)'
        document.getElementById('frm').style.display="flex"
       /* setTimeout(() => {
            reg.display="none"
            

            document.getElementById('frm').style.transform="rotateY(0deg)"
        }, 1000);*/
       
    

    }
    else{
       
        let reg=document.getElementById('frm').style
         reg.display="none"
        //reg.transform='rotateY(90deg)'
        document.getElementById('rfrm').style.display="flex"   
        /*setTimeout(() => {
           
        
            document.getElementById('rfrm').style.transform="rotateY(0deg)"
        }, 1000);*/
       
    }
}
function res(){
let fname=document.getElementById('fname')
let lname=document.getElementById('lname')

let email=document.getElementById('email')
let phone=document.getElementById('phone')
let email=document.getElementById('email')
let email=document.getElementById('email')






}




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
}, 1000);


