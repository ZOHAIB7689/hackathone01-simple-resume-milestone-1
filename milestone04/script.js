var resumeForm = document.getElementById("resumeForm");
var resumeOutput = document.getElementById("resumeOutput");
// function to generate resume 
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.querySelector("#name");
        var email = document.querySelector("#email");
        var phone = document.querySelector("#phone");
        var education = document.querySelector("#education");
        var experience = document.querySelector("#experience");
        var skill = document.querySelector("#skill");
        var description = document.querySelector("#description");
        //geenerate HTML for the resume 
        var resumeHTML = "\n        <h2>Editable Resume</h2>\n        <p><strong>Name:</strong><span contenteditable=\"true\">".concat(name.value, "</span></p>\n        <p><strong>Email:</strong><span contenteditable=\"true\">").concat(email.value, "</span></p>\n        <p><strong>phone:</strong><span contenteditable=\"true\">").concat(phone.value, "</span></p>\n        <p><strong>Education:</strong><span contenteditable=\"true\">").concat(education.value, "</span></p>\n        <p><strong>Expereience:</strong contenteditable=\"true\"><span>").concat(experience.value, "</span></p>\n        <p><strong>Skills :</strong><span contenteditable=\"true\">").concat(skill.value, "</span></p>\n        <p><strong>Description::</strong><span contenteditable=\"true\">").concat(description.value, "</span></p>\n        ");
        resumeOutput.innerHTML = resumeHTML;
    });
}
else {
    console.error("Form or output not found in the");
}
