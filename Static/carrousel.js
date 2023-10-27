const images = ["colab1.png", "colab2.png", "colab3.png", "colab4.png", "colab5.png"]

let indexImageActuelle = 0;

const flechdroite = document.getElementById("fleche-droite")
const flechegauche = document.getElementById("fleche-gauche")
const image = document.getElementById("image")
flechdroite.addEventListener("click", evenementFlecheDroite)
flechegauche.addEventListener("click", evenementFlecheGauche)
localStorage.setItem("image", 0)
evenementFlecheDroite()


function evenementFlecheDroite() {



    indexImageActuelle++

    if (indexImageActuelle > 4) {
        indexImageActuelle = 0

    }

    localStorage.setItem("image", images[indexImageActuelle])

    image.src = "Static/img/" + images[indexImageActuelle]
}

function evenementFlecheGauche() {

    indexImageActuelle--

    if (indexImageActuelle < 0) {
        indexImageActuelle = 4


    }
    image.src = "Static/img/" + images[indexImageActuelle]

    localStorage.setItem("image", images[indexImageActuelle])
} 