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
        <h2>Generated Resume</h2>
        <p><strong>Name:</strong>${name}</p>
        <p><strong>Email:</strong>${email}</p>
        <p><strong>phone:</strong>${phone}</p>
        <p><strong>Education:</strong>${education}</p>
        <p><strong>Expereience:</strong>${experience}</p>
        <p><strong>Skills :</strong>${skill}</p>
        <p><strong>Description::</strong>${description}</p>
        `;

        resumeOutput.innerHTML = resumeHTML
    });


}else{
    console.error("Form or output not found in the")
}