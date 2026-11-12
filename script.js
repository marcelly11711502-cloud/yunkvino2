
document.addEventListener("DOMContentLoaded", function() {

    const slides = document.querySelectorAll(".carrossel .slide");
    const areaBolinhas = document.querySelector(".bolinhas");

    if (slides.length > 0 && areaBolinhas) {

        let fotoAtual = 0;
        areaBolinhas.innerHTML = "";

        slides.forEach(function(slide, indice) {
            const bolinha = document.createElement("button");

            bolinha.type = "button";
            bolinha.className = "bolinha";
            bolinha.setAttribute("aria-label", "Foto " + (indice + 1));

            bolinha.addEventListener("click", function() {
                mostrarFoto(indice);
            });

            areaBolinhas.appendChild(bolinha);
        });

        const bolinhas = areaBolinhas.querySelectorAll(".bolinha");

        function mostrarFoto(numero) {
            slides.forEach(function(slide) {
                slide.classList.remove("ativo");
            });

            bolinhas.forEach(function(bolinha) {
                bolinha.classList.remove("ativa");
            });

            fotoAtual = numero;
            slides[fotoAtual].classList.add("ativo");
            bolinhas[fotoAtual].classList.add("ativa");
        }

        mostrarFoto(0);

        setInterval(function() {
            let proximaFoto = (fotoAtual + 1) % slides.length;
            mostrarFoto(proximaFoto);
        }, 4000);
    }
});
