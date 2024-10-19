

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

document.getElementById('rfrm').addEventListener('submit',(e)=>{
    e.preventDefault();
    let fname=document.getElementById('fname').value
    let lname=document.getElementById('lname').value
    
    let email=document.getElementById('email').value
    let phone=document.getElementById('tel').value
    let ref=document.getElementById('ref').value
    let passwd=document.getElementById('passwd').value
    let cpasswd=document.getElementById('cpasswd').value
    let data={
        "fname":fname,
        "lname":lname,
        "email":email,
        "ref":ref,
        "phone":phone,
        "passwd":passwd,
        "cpasswd":cpasswd
    }
    fetch("/web/Handlers/registration.php",
        {
            method:"post",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(data)
        }
    ).then(e=>{
        return e.json()
    }).then(e=>{
        if(e.rdr=="get_otp"){
            document.getElementById('rfrm').style.display='none'
            document.getElementById('otp').style.display='flex'
            alert(e.message);
            document.getElementById('otp').addEventListener('submit',(e)=>{
                e.preventDefault();
                let otp=document.getElementById('otp_field').value
                let data={
                    'otp':otp
                }
                fetch('/web/Handlers/otp.php',{
                    method:'post',
                    headers:{'Content-type':'application/json'},
                    body:JSON.stringify(data)
                }).then(e=>{
                    return e.json()
                }
                ).then(
                  e=>{
                    if(e.rdr=='login'){
                        document.getElementById('otp').style.display='none'
                        document.getElementById('frm').style.display='flex'
                        alert('Registration Success')
                    }
                    else{
                        alert(e.message)
                    }
                  }
                )


            })
        }
        else{
            alert(e.message)

        }
    })


    })
    

}, 1000);


