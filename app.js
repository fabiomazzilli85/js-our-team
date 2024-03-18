// Questo è l'Array contente la lista delle persone che compongono il nostro team.
const personale = [
    {
      nome: "Wayne Barnett",
      ruolo: "Founder & CEO",
      foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
      nome: "Angela Caroll",
      ruolo: "Chief Editor",
      foto: "angela-caroll-chief-editor.jpg"
    },
    {
      nome: "Walter Gordon",
      ruolo: "Office Manager",
      foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
      },
      {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
      }, 
      {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
      }
  ];
  

// Mi accerto che la console del browser restituisca i valori che presumo di visualizzare.
  console.log(personale[0].nome); // Ok
  console.log(personale[2].ruolo);  // Ok
  console.log(personale[1].foto); // Ok


// Visualizzo le stesse informazioni riportate nella console del browser nella pagina HTML.
// 1. Collego l'esecuzione di questo script al div con id '''team'' nella pagina HTML.
// 2. Creo una funzione ''visualizzaTeam''.
// 3. Uso il metodo forEach (fonte Chat GPT)
// 4. Creo l'elemento ''p''  che contiene il Nome della persona (${persona.nome}).
// 5. Esattamente come il punto 4, creo un ''p'' in cui è specificato il ruolo all'interno del team.
// 6. Faccio la stessa cosa con le foto delle quali ho solo il collegamento.
// 7. Eseguo ilo return della funzione, ovvero ''visualizzaTeam()''.
const container = document.getElementById('team');
function visualizzaTeam() {
    
    personale.forEach(persona => {
          const personaDiv = document.createElement('div');
      
    
      const nomeElement = document.createElement('p');
      nomeElement.textContent = `Nome: ${persona.nome}`;
      personaDiv.appendChild(nomeElement);
  
    
      const ruoloElement = document.createElement('p');
      ruoloElement.textContent = `Ruolo: ${persona.ruolo}`;
      personaDiv.appendChild(ruoloElement);
  
    
      const fotoElement = document.createElement('img');
      fotoElement.src = persona.foto;
      fotoElement.alt = persona.nome;
    
      personaDiv.appendChild(fotoElement);
  

      container.appendChild(personaDiv);
    });
  }
  
  visualizzaTeam();