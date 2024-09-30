<?php
    require_once('conexion.php');
    //Funcion para insertar un registro

    function InsertarRecord(){
        global $con;
        $USerName = $_POST['UNname'];
        $USerEmail = $_POST['UEmail'];

        //Inserta en la tabla usuarios, en los campos UserName, UserEmail
        $query = "insert into usuarios (UserName,UserEmail) values('$USerName','$USerEmail')";
        $result = mysqli_query($con,$query);

        if($result){
            echo 'El registro se creo exitosamente';
        }
        else{
            echo 'Por favor chequear la Query';
        }
    }

