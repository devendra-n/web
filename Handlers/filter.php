<?php
class filter{
    public $db;

    function filter_r($data){
        return mysqli_real_escape_string($this->db,$data);
    }
}



?>