// console.log("connecté !");
// Je sélectionne et je stocke 
// La valeur du localStorage
let valeurCle = localStorage.getItem('banniere');
console.log(valeurCle, "valeur de la clé");
// bouton .btn-success
const btnSuccess = document.querySelector('.btn-success');
// console.log('btnSuccess');

const cookies = document.querySelector('.cookies');
// console.log('cookies');

btnSuccess.addEventListener('click', function(){
    // console.log("bouton cliqué !");
    cookies.style.opacity = "0";
});

// Je mets en place le stockage local
btnSuccess.addEventListener('click', function(){
    // Je crée le localStorage avec la valeur "oui";
    localStorage.setItem('banniere', 'oui');
});

// Je crée une condition
function check(){
    // Ici bloc à exécuter
    if(valeurCle){
        console.log("stockage existe");
        cookies.remove();
    }else{
        console.log("stockage n'existe pas");
    };
};