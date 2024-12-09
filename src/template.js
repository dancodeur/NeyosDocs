import './index.css';

/**
 * Section Page Docs and NewDocs....
 */
const DocsSection=document.querySelector("[data-SectionDocs]");  //Section Docs
const NewDocsSection=document.querySelector("[data-SectionNewDocs]"); // Section NEwDocs
DocsSection.style.display="block";
NewDocsSection.style.display="none";
const addNewDocs=document.querySelector("[data-newDocsBtn]"); // Bouton nouvelle Docs
let newDocs=false; // toogle action newdocs false/true
addNewDocs.textContent="Nouvelle version"; // Contenu du texte

addNewDocs.addEventListener("click",()=>{

    newDocs= !newDocs;
    console.log(newDocs); 

    if(newDocs){
        DocsSection.style.display="none";
        NewDocsSection.style.display="block";
        addNewDocs.innerHTML=`
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
             <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
           </svg>
           <span>Retour</span>
        `;
    }else{
        NewDocsSection.style.display="none";
        DocsSection.style.display="block";
        addNewDocs.textContent="Nouvelle version";
    }
 }); 
 

/**
 * Variable Mode Edition
 */

let editMode=false; // le mode édition est désactivé
const Input_Header=document.querySelectorAll("[data-input]"); // tout les inputs permettant la modification du tableau header
const Btn_MAJ_ANNUL=document.querySelector("[data-header-editMode]"); 
const Edit_TableHeader=document.querySelector("[data-edit-header-table]"); //Crayon sur le tableau en mode édition 
Btn_MAJ_ANNUL.style.display="none";
Edit_TableHeader.style.display="none";

/**
 * DarkMode
 */
const darkMode=document.querySelector("[data-darkMode]"); 

/**
 * SideBar
 */
const select_version=document.querySelector("[data-docs-version]");
const version=document.querySelector("#version"); // La version de la documentation selectionner...
version.innerHTML="v1"
/**
 * Evenement javascript pour la selection de la version du docs 
 * */ 
select_version.addEventListener("change",()=>{
    console.log(select_version.options[select_version.selectedIndex].text); 
    version.innerHTML=select_version.options[select_version.selectedIndex].text; 
}); 

/**
 * Header
 */
const moon=document.querySelector("[data-moon]");
const light=document.querySelector("[data-light]");
const setting=document.querySelector("[data-setting]");
const reload_page=document.querySelector("[data-reload]");
const edition_mode=document.querySelector("[data-editionMode]");
const msgHeader=document.querySelector("[data-headerMsg]");
msgHeader.style.display="none"; // Le mode édition est désactiver par défaut

light.style.display="none"; // Par défaut l'icone de la lune est désactivez
moon.addEventListener("click",()=>{
    
    light.style.display="block";
    moon.style.display="none";
    darkMode.classList.replace('light', "dark");

}); 

light.addEventListener("click",()=>{
    moon.style.display="block";
    light.style.display="none";
    darkMode.classList.replace("dark", "light");
}); 


/**
 * Fonction du mode édition
 */
edition_mode.addEventListener("click",()=>{
    editMode =!editMode; 
    editMode ? msgHeader.style.display="block":msgHeader.style.display="none"; 
    editMode ? Btn_MAJ_ANNUL.style.display="block" : Btn_MAJ_ANNUL.style.display="none"; 
    editMode ? Edit_TableHeader.style.display="block" : Edit_TableHeader.style.display="none"; 
    
    /**
     * parcours tout les inputs et désactive ou active l'input cliquer
     */
    Input_Header.forEach((input)=>{
        editMode ? input.disabled=false :input.disabled=true;
    }); 
    
}); 

/**
 * Header Methode
 */






/**
 * Mode edition bouton
 */



/**
 * Payload Methode
 */