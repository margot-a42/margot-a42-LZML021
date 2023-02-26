// exercice 1
function prenom() {
    var prenom = document.getElementById("prenom").value;
    document.getElementById("holder1").innerHTML = prenom;
}

function nomdefamille() {
    var nom = document.getElementById("nomdefamille").value;
    document.getElementById("holder1").innerHTML = nom;
}

function nomcomplet() {
    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nomdefamille").value;
    var nomcomplet = prenom + " " + nom;
    document.getElementById("holder1").innerHTML = nomcomplet;
}

// exercice 2
function segmentText() {
    var texte = document.getElementById("texte").value;
    var mots = texte.split(" ");
    var motsString = mots.join(", ");
    document.getElementById("holder2").innerHTML = motsString;
}
