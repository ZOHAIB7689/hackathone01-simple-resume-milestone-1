const togglebutton = document.querySelector(".toggleButton")as HTMLButtonElement| null
const skill = document.querySelector("#Skills") as HTMLButtonElement | null

if (togglebutton &&  skill){togglebutton.addEventListener("click", ()=>{
   if(skill.style.display === "none"){skill.style.display = "block"
    togglebutton.value = "Hide Skills"
   }else{
    skill.style.display ="none"
    togglebutton.value = "Show Skills"
  }
})}