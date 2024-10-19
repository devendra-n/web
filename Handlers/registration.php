<?php
include_once('filter.php');

function unique($email){
    $query="SELECT * FROM `user_table` WHERE email='$email'";
    include("db.php");

    if ($res=mysqli_query($con,$query)) {
     
        if (mysqli_num_rows($res)==0) {
           return true;
        }
        else{
            
            return false;
        }
    }
}




if($_SERVER['REQUEST_METHOD']=='POST'){
    $data=file_get_contents("php://input");
    $nd=json_decode($data,true);
    if (isset($nd['cpasswd']) && $nd['passwd']==$nd['cpasswd']) {
        if (isset($nd['fname']) && isset($nd['lname']) && isset($nd['email']) && isset($nd['phone']) && isset($nd['passwd']) && isset($nd['cpasswd'])) {
            include_once("db.php");
            $dt= new filter();
            $dt->db=$con;
            $fname=$dt->filter_r($nd['fname']);
            $lname=$dt->filter_r($nd['lname']);
            $email=$dt->filter_r($nd['email']);
            $phone=$dt->filter_r($nd['phone']);
            $uid="UID".random_int(1111,99999);
            $passwd=sha1($nd['passwd']);
            $walletid=bin2hex(random_bytes(10));
            $myref=strtoupper(substr($fname,0,2)).substr($phone,4).random_int(111,999);
            $query="";
            if (isset($nd['snf'])) {
                $snf=$dt->filter_r($nd['snf']);
                $query = "INSERT INTO `user_table` (`id`, `first_name`, `last_name`, `uid`, `email`, `passwd`, `my_ref_id`, `wallet`, `tpin`, `senior_ref`, `profile`, `account_number`, `ifsc`, `bank_name`, `total_ref`, `forgen_key`, `two_fact`, `phone`, `wallet_id`, `value_point`) VALUES (NULL, '$fname', '$lname', '$uid', '$email', '$passwd', '$myref', '0', NULL, '$snf', 'default_user.png', NULL, NULL, NULL, '0', NULL, '0', '$phone', '$walletid', '0')";

            }
            else{
                $query = "INSERT INTO `user_table` (`id`, `first_name`, `last_name`, `uid`, `email`, `passwd`, `my_ref_id`, `wallet`, `tpin`, `senior_ref`, `profile`, `account_number`, `ifsc`, `bank_name`, `total_ref`, `forgen_key`, `two_fact`, `phone`, `wallet_id`, `value_point`) VALUES (NULL, '$fname', '$lname', '$uid', '$email', '$passwd', '$myref', '0', NULL, NULL, 'default_user.png', NULL, NULL, NULL, '0', NULL, '0', '$phone', '$walletid', '0')";

            }
            $un=unique($email);
            if($un){
                
                if(false){
                    print_r($e);
                }
                else{
                  session_start();
                  $_SESSION['otp']='1220';
                  $_SESSION['con']=$con;
                  $_SESSION['query']=$query;
                  echo(json_encode(["message"=>"OTP Send  to ".$email." 1220","rdr"=>"get_otp"]));
                }


        }
        else{
            echo(json_encode(["message"=>"Email already Registered","rdr"=>"login"]));

        }
    }
        else{
            echo(json_encode(["message"=>"Please fill Required fields"]));
       }
    }
    else{
         echo(json_encode(["message"=>"Password does not match"]));
    }
    
    


}
else{
    http_response_code(403);
    echo(json_encode(["message"=>"Access Denied"]));
}






?>