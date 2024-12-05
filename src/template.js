import './index.css';

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
 * Evenement javascript pour la selction de la version du docs 
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
