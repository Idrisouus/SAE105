// Q7 et Q8
// var descriptionsMusiques =
//["Originaire de La Plaine Saint-Denis, Keeqaid est un rappeur polyvalent a suivre de très près en 2025.",
//"Originaire de Bois-Colombes, Jolagreen étoile montante du rap française est aussi a suivre de très près en 2025.",
//"Originaire du 19e arrondissement, JRK19 a un rap cru et très technique, il vient de clôturer une grosse année 2024.",
//"Rappeuse Belge, Shay fait ses premiers pas de rappeuse en 2011 avec le rappeur Booba",
//"Née a Angers, Adèle Castillon se fait connaitre grâce à sa chaîne YouTube.",
//"Née au Cap-Vert, ronisia est une chanteuse qui propose de la pop urbaine et R&B depuis 2019."]


// Musique
document.addEventListener("DOMContentLoaded", function() {
        let currentAudio = null;
        let currentPlayButton = null; 

    
data.forEach(function(item, index) {
        const playButton = document.getElementById(`playAudioButton${index}`);
        const audioPlayer = document.getElementById(`audioPlayer${index}`);

    
playButton.addEventListener('click', function() { // Ajout du click "bouton"
            
    if (currentAudio && currentAudio !== audioPlayer) { // Si une autre musique est en cours
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset la musique précédente

                
    if (currentPlayButton) {
        currentPlayButton.textContent = '▶️'; // et remettre le bouton précédent en lecture
            }}

           
    if (audioPlayer.paused) {  // Vérifier si l'audio actuel est en pause
        audioPlayer.play();// Alors jouer l'audio actuel
        playButton.textContent = '⏸️'; // Modifier le bouton en pause
        currentAudio = audioPlayer; // Mettre à jour l'audio en cours
        currentPlayButton = playButton;} // Mettre à jour le bouton en cours
            
    else {
        audioPlayer.pause();// Mettre en pause l'audio actuel
        playButton.textContent = '▶️'; // Modifier le bouton en lecture
        currentAudio = null; // Reset l'audio en cours
        currentPlayButton = null; // Reset le bouton en cours
            }
        });

        
audioPlayer.addEventListener('ended', function() {  // Quand l'audio se termine
        playButton.textContent = '▶️'; // Remettre le bouton en mode play
        currentAudio = null; // Reset l'audio en cours
        currentPlayButton = null; // Reset le bouton en cours
        });
    });
});



// Donnée Formulaire

// Q2
document.addEventListener('DOMContentLoaded', () => {
    const titreInput = document.getElementById('titre');
    console.log(titreInput); 
    console.log(titreInput.value); 
  });

  // Q4
document.addEventListener('DOMContentLoaded', () => {
    const titreInput = document.getElementById('titre');
    titreInput.addEventListener('keyup', () => {
    console.log(`Valeur actuelle : ${titreInput.value}`); 
      });
    {
    const lienInput = document.getElementById('lien');
    lienInput.addEventListener('keyup', () => {
    console.log(`Valeur actuelle : ${lienInput.value}`);
          });}
    {
    const descriptionInput = document.getElementById('description');
    descriptionInput.addEventListener('keyup', () => {
    console.log(`Valeur actuelle : ${descriptionInput.value}`);
          });}
      });

// Q9
document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submitBtn');
    const titreInput = document.getElementById('titre');
    const lienInput = document.getElementById('lien');
    const descriptionInput = document.getElementById('description');

// Q10  
submitBtn.addEventListener('click', () => {
    console.log('Titre:', titreInput.value);
    console.log('Lien:', lienInput.value);
    console.log('description:', descriptionInput.value);
  
    const url = `https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=gambette&courriel=philippe.gambette@univ-eiffel.fr&message=${encodeURIComponent(titreInput.value + " - " + lienInput.value)}`;
    console.log(`URL générée : ${url}`);
       });
       });
  
// Q11 Pas réussi a faire l'appel API.
 

// Crédits 
document.addEventListener("DOMContentLoaded", function() {
    
const creditsToggleButton = document.getElementById("crédits"); // Pour les crédits
const creditsSection = document.querySelector(".creditstext");

    
const conditionsToggleButton = document.getElementById("conditions"); // Pour les conditions
const conditionsSection = document.querySelector(".conditionstext");

creditsToggleButton.addEventListener("click", function() {
        
    // Fermer les conditions si crédits est ouvert
    if (conditionsSection.style.maxHeight !== "0px" && conditionsSection.style.maxHeight !== "") {
        conditionsSection.style.maxHeight = "0px";
        conditionsToggleButton.textContent = "Afficher les conditions";
        }

    // Afficher ou Masquer les crédits
    if (creditsSection.style.maxHeight === "0px" || creditsSection.style.maxHeight === "") {
        creditsSection.style.maxHeight = creditsSection.scrollHeight + "px";
        creditsToggleButton.textContent = "Masquer les crédits";
        } 
    else {creditsSection.style.maxHeight = "0px";
          creditsToggleButton.textContent = "Afficher les crédits";
        }
    });

conditionsToggleButton.addEventListener("click", function() {
     // Fermer les crédits si conditions est ouvert
    if (creditsSection.style.maxHeight !== "0px" && creditsSection.style.maxHeight !== "") {
        creditsSection.style.maxHeight = "0px";
        creditsToggleButton.textContent = "Afficher les crédits";
        }

    // Afficher ou Masquer les conditions
    if (conditionsSection.style.maxHeight === "0px" || conditionsSection.style.maxHeight === "") {
        conditionsSection.style.maxHeight = conditionsSection.scrollHeight + "px";
        conditionsToggleButton.textContent = "Masquer les conditions";
        } 
    else {conditionsSection.style.maxHeight = "0px";
        conditionsToggleButton.textContent = "Afficher les conditions";
        }
    });
});
  
  
  
  
  
  
