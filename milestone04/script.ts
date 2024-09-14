const resumeForm = document.getElementById("resumeForm") as HTMLInputElement| null
const resumeOutput = document.getElementById("resumeOutput") as HTMLInputElement | null;



// function to generate resume 
if(resumeForm && resumeOutput){
    resumeForm.addEventListener("submit", (event)=>{
        event.preventDefault();

        const name  = (document.querySelector("#name")as HTMLInputElement)
        const email = (document.querySelector("#email") as HTMLInputElement )
        const phone = (document.querySelector("#phone") as HTMLInputElement )
        const education = (document.querySelector("#education") as HTMLInputElement )
        const experience = (document.querySelector("#experience") as HTMLInputElement )
        const skill = (document.querySelector("#skill") as HTMLInputElement )
        const description = (document.querySelector("#description") as HTMLInputElement )
        //geenerate HTML for the resume 
        const resumeHTML = `
        <h2>Editable Resume</h2>
        <p><strong>Name:</strong><span contenteditable="true">${name.value}</span></p>
        <p><strong>Email:</strong><span contenteditable="true">${email.value}</span></p>
        <p><strong>phone:</strong><span contenteditable="true">${phone.value}</span></p>
        <p><strong>Education:</strong><span contenteditable="true">${education.value}</span></p>
        <p><strong>Expereience:</strong contenteditable="true"><span>${experience.value}</span></p>
        <p><strong>Skills :</strong><span contenteditable="true">${skill.value}</span></p>
        <p><strong>Description:</strong><span contenteditable="true">${description.value}</span></p>
        `;

        resumeOutput.innerHTML = resumeHTML
    });


}else{
    console.error("Form or output not found in the")
}