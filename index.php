<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Principal</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: antiquewhite;
        }
        h1 {
            text-align: center;
        }
        .juegos-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px; /* Espacio entre las cajas */
            width: 80%;
            max-width: 800px; /* Ancho máximo del contenedor */
            margin-top: 20px; /* Margen superior */
        }
        .juego {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 200px; /* Ancho de cada caja de juego */
        }
        .juego img {
            max-width: 100px;
            margin-bottom: 10px; /* Espacio entre la imagen y el título */
        }
        .juego h2 {
            margin: 0;
            text-align: center;
        }
        .juego a {
            text-decoration: none;
            color: black;
        }
    </style>
</head>
<body>
    <!-- Reproductor de audio -->
    <audio id="audio" src="bendicion.mp3" autoplay loop hidden></audio>

    <h1>😎🕹️QUE JUEGO DESEAS JUGAR🎮🎲</h1>
    <p><a href="cerrar.php">Cerrar Sesión</a></p>
    
    <div class="juegos-container">
        <div class="juego">
            <a href="memoria/juego.html">
                <img src="memoria.jpg" alt="">
                <h2>JUEGO DE MEMORIA</h2>
            </a>
        </div>
        
        <div class="juego">
            <a href="tres_en_raya/index.html">
                <img src="tres.jpg" alt="">
                <h2>JUEGO DE TRES EN RAYA</h2>
            </a>
        </div>

        <div class="juego">
            <a href="buscaminas/index.html">
                <img src="busca.jpg" alt="">
                <h2>JUEGO DE BUSCAMINAS</h2>
            </a>
        </div>

        <div class="juego">
            <a href="AHORCADO/index.html">
                <img src="6168680.png">
                <h2>JUEGO DEL AHORCADO</h2>
            </a>
        </div>
    </div>
</body>
</html>
