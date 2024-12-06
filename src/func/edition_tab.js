const table_header=document.querySelector("[data-headerTable] tbody"); 
const table_payload=document.querySelector("[data-payloadTable]"); 

/**
 *Get All dblick cell...on octet... 
 */

/**
 * Btn
 */

let i=0;
const rowBtn=document.querySelector("[data-rowBtn]");
const cellBtn=document.querySelector("[data-cellBtn]"); 

let rows=table_header.rows; // Toutes les rows dans une colonne
let cells_length=rows[1].cells.length;
// console.log(rows[1].cells.length)
// console.log(rows); 

rowBtn.addEventListener("click", () => {
   
   /**
    * Ajout des colonnes...
    */

   if(cells_length>=1){

    for(let i=0; i<cells_length; i++){
        let newRows=table_header.insertRow(-1);
        let newCell=newRows.insertCell(0);
        let input=document.createElement("input"); 
        input.value="nouvelle valeur";
        input.className="text-left text-xs bg-inherit"
        newCell.appendChild(input);

        console.log("Nouvelle ligne créer...")
    }

   }else{
     console.log("Le nombre de colonne doit etre supérieure ou égal a 1"); 
   }
   
});

cellBtn.addEventListener("click",()=>{
    
    for (let i=0; i<rows.length; i++){
        
        let newCell=rows[i].insertCell(-1);
        let input=document.createElement("input");
        input.className="text-center text-xs bg-inherit"
        newCell.appendChild(input); 

    }
    
    console.log("Nouvelle colonne créer"); 
     
}); 

/**
 * Dbclick action with cell
 */


const cells_dblClick=document.querySelectorAll("[data-cells]");

cells_dblClick.forEach((element) => {
    element.addEventListener("dblclick",(i)=>{
        console.log(i.target.dataset.cells)

        for (let y=0; y<rows.length; y++){
            
            let newCell=rows[y].insertCell(i.target.dataset.cells); 
            let input=document.createElement("input"); 
            input.value="New Cells"; 
            input.className="text-center text-xs";
            newCell.appendChild(input);
        }         
    }); 
})
