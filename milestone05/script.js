// Get form and output elements
var resumeForm = document.getElementById("resumeForm");
var resumeOutput = document.getElementById("resumeOutput");
var linkContainer = document.getElementById("link-container");
var shareableLink = document.getElementById("shareable-link");
var downloadBtn = document.getElementById("download-pdf");
if (resumeForm &&
    resumeOutput &&
    linkContainer &&
    shareableLink &&
    downloadBtn) {
    resumeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Collect form inputs
        var username = document.querySelector("#username")
            .value;
        var name = document.querySelector("#name").value;
        var email = document.querySelector("#email").value;
        var phone = document.querySelector("#phone").value;
        var education = document.querySelector("#education")
            .value;
        var experience = document.querySelector("#experience").value;
        var skill = document.querySelector("#skill").value;
        var description = document.querySelector("#description").value;
        // Generate resume HTML
        var resumeHTML = "\n            <h2>Editable Resume</h2>\n            <p><strong>Name:</strong> <span>".concat(name, "</span></p>\n            <p><strong>Email:</strong> <span>").concat(email, "</span></p>\n            <p><strong>Phone:</strong> <span>").concat(phone, "</span></p>\n            <p><strong>Education:</strong> <span>").concat(education, "</span></p>\n            <p><strong>Experience:</strong> <span>").concat(experience, "</span></p>\n            <p><strong>Skills:</strong> <span>").concat(skill, "</span></p>\n            <p><strong>Description:</strong> <span>").concat(description, "</span></p>\n        ");
        resumeOutput.innerHTML = resumeHTML;
        // Store resume data in localStorage using the username as the key
        var resumeData = {
            name: name,
            email: email,
            phone: phone,
            education: education,
            experience: experience,
            skill: skill,
            description: description,
        };
        localStorage.setItem("resume-".concat(username), JSON.stringify(resumeData));
        // Generate shareable link based on the username
        var shareURL = "".concat(window.location.href.split("?")[0], "?username=").concat(encodeURIComponent(username));
        shareableLink.href = shareURL;
        shareableLink.textContent = "Shareable Link for ".concat(username);
        linkContainer.style.display = "block"; // Show the link container
    });
    // Check if a shared resume is loaded via URL parameters
    var urlParams = new URLSearchParams(window.location.search);
    var sharedUsername = urlParams.get("username");
    if (sharedUsername) {
        var storedResume = localStorage.getItem("resume-".concat(sharedUsername));
        if (storedResume) {
            var _a = JSON.parse(storedResume), name_1 = _a.name, email = _a.email, phone = _a.phone, education = _a.education, experience = _a.experience, skill = _a.skill, description = _a.description;
            var resumeHTML = "\n                <h2>Editable Resume for ".concat(sharedUsername, "</h2>\n                <p><strong>Name:</strong> <span>").concat(name_1, "</span></p>\n                <p><strong>Email:</strong> <span>").concat(email, "</span></p>\n                <p><strong>Phone:</strong> <span>").concat(phone, "</span></p>\n                <p><strong>Education:</strong> <span>").concat(education, "</span></p>\n                <p><strong>Experience:</strong> <span>").concat(experience, "</span></p>\n                <p><strong>Skills:</strong> <span>").concat(skill, "</span></p>\n                <p><strong>Description:</strong> <span>").concat(description, "</span></p>\n            ");
            resumeOutput.innerHTML = resumeHTML;
        }
        else {
            resumeOutput.innerHTML = "<p>No resume found for username: ".concat(sharedUsername, "</p>");
        }
    }
    // Download as PDF (printing only the resume section)
    downloadBtn.addEventListener("click", function () {
        // Hide other elements before printing
        var form = document.querySelector("form");
        var linkContainer = document.getElementById("link-container");
        // Temporarily hide form and link-container
        form.style.display = "none";
        linkContainer.style.display = "none";
        // Trigger the print dialog (prints only the visible content, which is now the resume)
        window.print();
        // Restore visibility of form and link-container after printing
        form.style.display = "block";
        linkContainer.style.display = "block";
    });
}
else {
    console.error("Form or required elements not found.");
}
