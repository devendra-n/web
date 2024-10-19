let stable_count=0;
let int_id=0;
const checkConnectivity=()=>{
    const url="/project/Handlers/connectvity.php"
    fetch(url).then(e=>{
        return e.json()
    }).then(e=>{
       
        stable_count=0;
    }).catch(e=>{
        console.log(e)
        stable_count++
    })
    if(stable_count>5){
        alert("Access Prohibited")
        document.write("<h1>Threat Detected</h1>")
        clearInterval(int_id)
    }





}
/*int_id=setInterval(checkConnectivity,1000);
console.log(int_id)
window.addEventListener("contextmenu",e=>{
    
    

})
*/