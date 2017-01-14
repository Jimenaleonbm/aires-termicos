<?php

 $nombre = $_POST["name"];
 $correo = $_POST["email"];
 $contenido = $_POST["message"];

 $para = "jimenaleonbm@gmail.com";
 $asunto = "Contacto de AiresTermicos";
 
//  $mensaje = "
//  <p>Nombre: ".$nombre."</p>
//  <p>Correo: ".correo."</p>
//  <p>Mensaje: ".mensaje."</p>
//  ";
$cabeceras = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";

$mensaje = "<p><b>Contacto de airestermicos.com.co</b></p>
    <p> <b>Nombre:</b> ".$nombre."</p>
    <p> <b>Email:</b> ".$correo. "</p>
    <p> <b>Mensaje:</b> ".$contenido. "</p>
";



 mail($para,$asunto,$mensaje,$cabeceras);
 
 echo "<script> alert('Mensaje Enviado Con Exito'); window.location = 'http://www.airestermicos.com.co/'; </script>";

?>