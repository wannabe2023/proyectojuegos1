<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
try {
    // Conexión a la base de datos
    $base = new PDO("mysql:host=localhost; dbname=prueba", "root", "");
    $base->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Consulta SQL para verificar usuario y clave
    $sql = "SELECT * FROM usuarios_pass WHERE USUARIOS= :usuario AND CLAVE= :clave";
    $resultado = $base->prepare($sql);

    // Obtención y sanitización de datos del formulario
    $usuario = htmlentities(addslashes($_POST["usuario"]));
    $clave = htmlentities(addslashes($_POST["clave"]));

    // Enlazar valores
    $resultado->bindValue(":usuario", $usuario);
    $resultado->bindValue(":clave", $clave);

    // Ejecutar la consulta
    $resultado->execute();
    $numero_registro = $resultado->rowCount();

    if ($numero_registro != 0) {
        session_start();
        $_SESSION["registro"] = $_POST["usuario"];

        // Redirección condicional basada en el nombre de usuario
        if ($usuario === 'admin') {
            header("location:index.php");
        } elseif ($usuario === 'daniel') {
            header("location:index.php");
        } else {
            header("location:registro.php");
        }
    } else {
        header("location:login.php");
    }
} catch (Exception $e) {
    die("error:" . $e->getMessage());
}
?>

</body>
</html>