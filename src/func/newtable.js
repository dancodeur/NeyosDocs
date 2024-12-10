const GeneredBtn = document.querySelector("[data-genered]"); 
const nombreLigne = document.querySelector("#ligne");
const newTab = document.querySelector("[data-new_tabs]"); 
const addNewRows = document.querySelector("[data-newRows]"); 
const addNewCells = document.querySelector("[data-newCells]"); 
const deleteCells = document.querySelector("[data-deleteCells]"); 
const deleteRows = document.querySelector("[data-deleteRows]"); 

let rows = newTab.rows; // rows length

// Fonction pour gérer les événements des cellules
function EventCells(e){
    let inputValue = e.target.value; // Récupérer la valeur de l'utilisateur pour les octets
    let numberOfOctets = parseInt(inputValue) || 1; // Si la valeur est invalide, on utilise 1 comme valeur par défaut
    let currentCell = e.target.closest("td");
    let currentCellIndex = Array.from(currentCell.parentNode.cells).indexOf(currentCell);
    
    // Ajuster le colspan en fonction de l'entrée
    currentCell.setAttribute("colspan", numberOfOctets);
    
    // Ajouter des colonnes si nécessaire
    addColumnsIfNeeded(currentCellIndex, numberOfOctets);
    updateCaractersRow(); // Met à jour la ligne "Caractères" après modification des octets
}

// Fonction pour ajouter des colonnes supplémentaires si nécessaire
function addColumnsIfNeeded(index, numberOfOctets){
    let rowsCount = newTab.rows.length;
    
    for (let i = 0; i < rowsCount; i++) {
        let currentRow = newTab.rows[i];
        let currentCell = currentRow.cells[index];
        
        // Si le colspan doit être plus grand, ajouter des colonnes supplémentaires
        if (numberOfOctets > 1) {
            let currentColspan = parseInt(currentCell.getAttribute("colspan")) || 1;
            
            // Ajout de colonnes si nécessaire
            if (currentColspan < numberOfOctets) {
                let diff = numberOfOctets - currentColspan;
                for (let j = 0; j < diff; j++) {
                    let newCell = currentRow.insertCell(index + 1); // Ajout de nouvelles cellules
                    let input = document.createElement("input");
                    input.value = 1; // Valeur initiale pour le nombre d'octets
                    input.className = "bg-inherit dark:bg-neutral-700 dark:hover:bg-neutral-800 text-center";
                    input.addEventListener("input", EventCells); // Changement en direct lorsque l'utilisateur entre des données
                    newCell.appendChild(input);
                }
            }
        }
    }
}

// Fonction pour ajouter une ligne
function addRows(){
    let newRow = newTab.insertRow(-1); // Ajout d'une nouvelle ligne
    let numberOfColumns = newTab.rows[0]?.cells.length || 0; // Nombre de colonnes dans la première ligne (si elle existe)
    for (let i = 0; i < numberOfColumns; i++) {
        let newCell = newRow.insertCell(-1); // Ajout de la cellule
        newCell.className="bg-slate-200";
        let input = document.createElement("input"); 
        input.value = 1; // Valeur initiale pour le nombre d'octets
        input.className = "bg-inherit dark:bg-neutral-700 dark:hover:bg-neutral-800 text-left font-semibold";
        input.id = `cellule-${i + 1}`;
        input.addEventListener("input", EventCells); // Changement en direct lorsque l'utilisateur entre des données
        newCell.appendChild(input);
    }
    console.log(newTab.rows.length); 
}

// Fonction pour ajouter des colonnes dans toutes les lignes existantes
function addCells(){
    let numberOfRows = newTab.rows.length; 
    for (let i = 0; i < numberOfRows; i++) {
        let newCell = newTab.rows[i].insertCell(-1); // Ajout de la cellule à chaque ligne
        let input = document.createElement("input"); 
        input.value = 1; // Valeur initiale pour le nombre d'octets
        input.className = "bg-inherit dark:bg-neutral-700 dark:hover:bg-neutral-800 text-center";
        input.addEventListener("input", EventCells); // Changement en direct lorsque l'utilisateur entre des données
        newCell.appendChild(input); 
    }
}

// Fonction pour ajouter des colonnes dynamiquement avec gestion des colspan
function addDynamicCellsWithColspan(){
    let numberOfRows = newTab.rows.length;
    
    // Mise à jour des colonnes dynamiques en fonction des octets
    for (let i = 0; i < numberOfRows; i++) {
        let newCell = newTab.rows[i].insertCell(-1);
        let input = document.createElement("input");
        input.value = 1; // Valeur initiale pour le nombre d'octets
        newCell.appendChild(input);

        // Ajouter un événement pour recalculer le colspan lorsque l'utilisateur modifie l'entrée
        input.addEventListener("input", EventCells);
    }
}

// Fonction pour supprimer la dernière ligne
function deleteRow(){
    if (newTab.rows.length > 0) {
        newTab.deleteRow(-1); 
        console.log("Dernière ligne supprimée.");
    } else {
        console.log("Aucune ligne à supprimer.");
    }
}

// Fonction pour supprimer la dernière cellule de chaque ligne
function deleteCell(){
    let numberOfRows = newTab.rows.length;
    for (let i = 0; i < numberOfRows; i++) {
        if (newTab.rows[i].cells.length > 0) {
            newTab.rows[i].deleteCell(-1); // Suppression de la cellule
        }
    }
}

// Fonction pour générer le tableau en fonction du nombre de lignes
function Generedtable(){
    let ligne = nombreLigne.value; 
    
    if (parseInt(ligne) > 0) {
        for (let i = 0; i < ligne; i++) {
            addRows(); // Ajout de lignes
        }
        addDynamicCellsWithColspan(); // Ajout des cellules avec gestion de colspan
    } else {
        console.log("Veuillez entrer un nombre de lignes valide.");
    }
}

// Fonction pour mettre à jour la ligne "Caractères" avec les `colspan` calculés
function updateCaractersRow(){
    let octetRow = newTab.rows[1]; // Supposons que la ligne 1 est la ligne "Octets"
    let caractRow = newTab.rows[0]; // Supposons que la ligne 0 est la ligne "Caractères"
    
    // Calcul dynamique des colspan pour la ligne "Caractères"
    for (let i = 0; i < octetRow.cells.length; i++) {
        let octetValue = parseInt(octetRow.cells[i].querySelector("input").value) || 1;
        caractRow.cells[i].setAttribute("colspan", octetValue);
    }
}

// Gestion des événements
addNewRows.addEventListener("click", addRows); 
addNewCells.addEventListener("click", addCells); 
deleteRows.addEventListener("click", deleteRow); 
deleteCells.addEventListener("click", deleteCell); 
GeneredBtn.addEventListener("click", Generedtable);  
