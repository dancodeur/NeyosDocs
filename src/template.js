import './index.css';

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
const addNewDocs=document.querySelector("[data-newDocsBtn]"); 
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

addNewDocs.addEventListener("click",()=>{
    alert("this feature is not available yet ! "); 
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
 * Add Page
 */
const HomePage=document.querySelector("[data-HomePage]"); 
HomePage.style.display="block";



/**
 * Mode edition bouton
 */



/**
 * Payload Methode
 */