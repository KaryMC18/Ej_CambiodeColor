 function generarColorAleatorio() {
            var letras = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letras[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function cambiarColor() {
            var colorAleatorio = generarColorAleatorio();
            document.body.style.backgroundColor = colorAleatorio;
        }