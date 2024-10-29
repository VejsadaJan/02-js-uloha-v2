
// Funkcia na vytvorenie novej karty
function createNewCard(title, content){
    let newCard = document.createElement('li');

    newCard.innerHTML = `
                <h3>${title}</h3>
                <p>${content}</h3>
    `;

    cardsContainer.appendChild(newCard);
};

function zpracujDataZFormularu() {
    // Najdeme formulář podle jeho ID
    const formular = document.getElementById('myForm');
  
    // Najdeme vstupní pole podle jejich názvu
    const prvniHodnota = document.getElementById('title');
    const druhaHodnota = document.getElementById('content');
  
    // Přiřadíme posluchače události "submit" k formuláři
    formular.addEventListener('submit', (event) => {
      event.preventDefault(); // Zabráníme standardnímu odeslání formuláře
  
      // Získáme hodnoty z polí
      const hodnota1 = prvniHodnota.value;
      const hodnota2 = druhaHodnota.value;
  
      // Předáme hodnoty do hlavního kódu (např. voláním jiné funkce)
        vykonajOperaciSDaty(hodnota1, hodnota2);
        createNewCard(hodnota1, hodnota2);
    });
  }
  
  // Příklad funkce pro další zpracování dat
  function vykonajOperaciSDaty(hodnota1, hodnota2) {
    console.log('Title: '+ hodnota1);
    console.log('Content: '+ hodnota2);
    
    return hodnota1
    // Zde můžete provést libovolné operace s hodnotami,
    // například odeslat data na server pomocí AJAX,
    // zobrazit výsledek výpočtu, atd.


  }
  




// ------------------
// ----HLAVNY KOD----
// ------------------

let cardsContainer = document.querySelector('.cards ul');



// Zavoláme funkci pro inicializaci
zpracujDataZFormularu();


/* 
document.getElementById('createButton').addEventListener('click', 
        
        function(event) {
                event.preventDefault(); // Aby sa stránka po kliknutí neresetovala
        
                let heading = document.getElementById('title').value;
                let message = document.getElementById('content').value;
        
                createNewCard(heading,message);
        
                document.getElementById('title').value = '';
                document.getElementById('content').value = '';
        }



 );
 */


//Prechádzame polom objektov v JS
/* arrayOfObject.forEach(object => {
    createNewCard(object.title, object.content);
}) */



//Prechádzame polom objektov v JSON
/* fetch('../data/data.json')
    .then(response => 
        response.json())
        .then(data => {
            data.forEach(object => {
                createNewCard(object.title, object.content);
            })
            
        }); */

