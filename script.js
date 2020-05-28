

let liste = []

fetch('http://graven.yt/citations.json')
.then(response => response.json())
.then(data => {
  for (const citations of data) {
      let donnée = {nom:citations.nom,citation:citations.citation,image:citations.image}
   liste.push(donnée)
  }
});

function generate(){
    let X = Math.floor(Math.random() * Math.floor(liste.length));

    document.getElementById("titre").innerHTML = liste[X].nom;
    document.getElementById("citation").innerHTML = liste[X].citation
    document.getElementById("image").src = liste[X].image
}