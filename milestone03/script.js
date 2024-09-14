var resumeForm = document.getElementById("resumeForm");
var resumeOutput = document.getElementById("resumeOutput");
// function to generate resume 
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener("submit", function (event) {
        var _a, _b, _c, _d, _e, _f, _g;
        event.preventDefault();
        var name = ((_a = document.querySelector("#name")) === null || _a === void 0 ? void 0 : _a.value) || '';
        var email = ((_b = document.querySelector("#email")) === null || _b === void 0 ? void 0 : _b.value) || '';
        var phone = ((_c = document.querySelector("#phone")) === null || _c === void 0 ? void 0 : _c.value) || '';
        var education = ((_d = document.querySelector("#education")) === null || _d === void 0 ? void 0 : _d.value) || '';
        var experience = ((_e = document.querySelector("#experience")) === null || _e === void 0 ? void 0 : _e.value) || '';
        var skill = ((_f = document.querySelector("#skill")) === null || _f === void 0 ? void 0 : _f.value) || '';
        var description = ((_g = document.querySelector("#description")) === null || _g === void 0 ? void 0 : _g.value) || '';
        //geenerate HTML for the resume 
        var resumeHTML = "\n        <h2>Generated Resume</h2>\n        <p><strong>Name:</strong>".concat(name, "</p>\n        <p><strong>Email:</strong>").concat(email, "</p>\n        <p><strong>phone:</strong>").concat(phone, "</p>\n        <p><strong>Education:</strong>").concat(education, "</p>\n        <p><strong>Expereience:</strong>").concat(experience, "</p>\n        <p><strong>Skills :</strong>").concat(skill, "</p>\n        <p><strong>Description::</strong>").concat(description, "</p>\n        ");
        resumeOutput.innerHTML = resumeHTML;
    });
}
else {
    console.error("Form or output not found in the");
}
