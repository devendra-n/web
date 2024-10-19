<?php
session_start();
if (isset($_SESSION['otp']) && isset($_SESSION['query']) && $_SERVER['REQUEST_METHOD']=='POST') {
    $data=file_get_contents('php://input');
    $data=json_decode($data,true);
    if(isset($data['otp']) && $data['otp']==$_SESSION['otp']){
        include_once('db.php');
        if (mysqli_query($con,$_SESSION['query'])) {
            echo(json_encode(['message'=>'Registration success','rdr'=>'login']));
            session_unset();
            session_destroy();
        }
    }
}
else{
    http_response_code(403);
    echo(json_encode(['message'=>"OTP does not match"]));
    





}

?>