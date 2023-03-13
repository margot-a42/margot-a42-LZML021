function exercice1() {
    var food = ["chien","chat","lapin","hamster","cochon","poulet"]
    var dernierElement = food.pop('poulet')
    food.unshift(dernierElement)
    document.getElementById("exercice1Resultat").innerHTML = food.join(", ")
}


function exercice2() {
    var texte = document.getElementById("texteExercice2").value
    var mots = texte.split(" ")
    var motsEnMajuscules = mots.map(function(mot) {
        return mot.toUpperCase()
      })
    document.getElementById("exercice2Resultat").innerText = motsEnMajuscules.join(" ")

}


function exercice3() {
    var texte = document.getElementById("texteExercice3").value
    var mots = texte.split(" ")
    var motsFiltres = mots.filter(function(mot) {
        return mot.length > 3
      })
    document.getElementById("exercice3Resultat").innerText = motsFiltres.join(" ")
}


function exercice4() {
    var texte = document.getElementById("texteExercice4").value
    var mots = texte.split(" ")
    var tableau = []
    mots.forEach(function(mot) { 
    tableau.push(mot)
      })
    document.getElementById("exercice4Resultat").innerHTML = tableau.join(", ")
}
