/***
 * Tableau Dynamique
 */
const GeneredBtn=document.querySelector("[data-genered]"); 
// const nombreColonne=document.querySelector("#colonne"); 
const nombreLigne=document.querySelector("#ligne");

const newTab=document.querySelector("[data-new_tabs] tbody"); 
const addNewRows=document.querySelector("[data-newRows]"); 
const addNewCells=document.querySelector("[data-newCells]"); 
/**
 * Delete Rows/Cells
 */
const deleteCells=document.querySelector("[data-deleteCells]"); 
const deleteRows=document.querySelector("[data-deleteRows]"); 

let rows=newTab.rows; // rows length

/**
 * Events Cells
 */

function EventCells(e){
    /**
     * Code ici
     */
    console.log(e.target.id); 
}

function addRows(){
    
    let newRow=newTab.insertRow(-1);
    let cells=newRow.insertCell(-1);
    cells.scope="row"; 
    cells.className="bg-slate-200 dark:bg-neutral-700"
    let input=document.createElement("input");
    input.value="Nouvelle ligne"; 
    input.className="bg-inherit dark:bg-neutral-700 dark:hover:bg-neutral-800 text-left p-[0.2rem] font-semibold";
    cells.appendChild(input); 

    console.log(newTab.rows.length); 
}

function addCells(){

    for ( let i=0; i<newTab.rows.length; i++){
       
        let newCells=rows[i].insertCell(-1); 
        let input=document.createElement("input"); 
        input.value=`Cells ${i}`; 
        input.className="bg-inherit dark:bg-neutral-700 dark:hover:bg-neutral-800 text-center";
        input.id=`cellule-${i}`; 
        input.addEventListener("click",EventCells); 
        newCells.appendChild(input); 
        console.log(i); 
    }
    
}

function deleteRow(){

    newTab.deleteRow(-1); 
    console.log("Hello")
}


function deleteCell(){

    for( let i=0; i<rows.length; i++){
        
        rows[i].deleteCell(-1);
    }
}

/**
 * Get Colone and Ligne
 */
function Generedtable (){
    let ligne=nombreLigne.value; 
    // let colonne=nombreColonne.value; 
    
    if(parseInt(ligne) > 0){
       
        for (let i=0; i<ligne; i++){
            addRows();
        }
    }
   
}


addNewRows.addEventListener("click",addRows); 
addNewCells.addEventListener("click",addCells); 
deleteRows.addEventListener("click",deleteRow); 
deleteCells.addEventListener("click",deleteCell); 
GeneredBtn.addEventListener("click",Generedtable); 