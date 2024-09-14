// Get form and output elements
const resumeForm = document.getElementById(
  "resumeForm"
) as HTMLFormElement | null;
const resumeOutput = document.getElementById(
  "resumeOutput"
) as HTMLDivElement | null;
const linkContainer = document.getElementById(
  "link-container"
) as HTMLDivElement | null;
const shareableLink = document.getElementById(
  "shareable-link"
) as HTMLAnchorElement | null;
const downloadBtn = document.getElementById(
  "download-pdf"
) as HTMLButtonElement | null;

if (
  resumeForm &&
  resumeOutput &&
  linkContainer &&
  shareableLink &&
  downloadBtn
) {
  resumeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Collect form inputs
    const username = (document.querySelector("#username") as HTMLInputElement)
      .value;
    const name = (document.querySelector("#name") as HTMLInputElement).value;
    const email = (document.querySelector("#email") as HTMLInputElement).value;
    const phone = (document.querySelector("#phone") as HTMLInputElement).value;
    const education = (document.querySelector("#education") as HTMLInputElement)
      .value;
    const experience = (
      document.querySelector("#experience") as HTMLInputElement
    ).value;
    const skill = (document.querySelector("#skill") as HTMLInputElement).value;
    const description = (
      document.querySelector("#description") as HTMLInputElement
    ).value;

    // Generate resume HTML
    const resumeHTML = `
            <h2>Editable Resume</h2>
            <p><strong>Name:</strong> <span>${name}</span></p>
            <p><strong>Email:</strong> <span>${email}</span></p>
            <p><strong>Phone:</strong> <span>${phone}</span></p>
            <p><strong>Education:</strong> <span>${education}</span></p>
            <p><strong>Experience:</strong> <span>${experience}</span></p>
            <p><strong>Skills:</strong> <span>${skill}</span></p>
            <p><strong>Description:</strong> <span>${description}</span></p>
        `;
    resumeOutput.innerHTML = resumeHTML;

    // Store resume data in localStorage using the username as the key
    const resumeData = {
      name,
      email,
      phone,
      education,
      experience,
      skill,
      description,
    };
    localStorage.setItem(`resume-${username}`, JSON.stringify(resumeData));

    // Generate shareable link based on the username
    const shareURL = `${
      window.location.href.split("?")[0]
    }?username=${encodeURIComponent(username)}`;
    shareableLink.href = shareURL;
    shareableLink.textContent = `Shareable Link for ${username}`;
    linkContainer.style.display = "block"; // Show the link container
  });

  // Check if a shared resume is loaded via URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const sharedUsername = urlParams.get("username");

  if (sharedUsername) {
    const storedResume = localStorage.getItem(`resume-${sharedUsername}`);
    if (storedResume) {
      const { name, email, phone, education, experience, skill, description } =
        JSON.parse(storedResume);
      const resumeHTML = `
                <h2>Editable Resume for ${sharedUsername}</h2>
                <p><strong>Name:</strong> <span>${name}</span></p>
                <p><strong>Email:</strong> <span>${email}</span></p>
                <p><strong>Phone:</strong> <span>${phone}</span></p>
                <p><strong>Education:</strong> <span>${education}</span></p>
                <p><strong>Experience:</strong> <span>${experience}</span></p>
                <p><strong>Skills:</strong> <span>${skill}</span></p>
                <p><strong>Description:</strong> <span>${description}</span></p>
            `;
      resumeOutput.innerHTML = resumeHTML;
    } else {
      resumeOutput.innerHTML = `<p>No resume found for username: ${sharedUsername}</p>`;
    }
  }

  // Download as PDF (printing only the resume section)
  downloadBtn.addEventListener("click", () => {
    // Hide other elements before printing
    const form = document.querySelector("form") as HTMLFormElement;
    const linkContainer = document.getElementById(
      "link-container"
    ) as HTMLDivElement;

    // Temporarily hide form and link-container
    form.style.display = "none";
    linkContainer.style.display = "none";

    // Trigger the print dialog (prints only the visible content, which is now the resume)
    window.print();

    // Restore visibility of form and link-container after printing
    form.style.display = "block";
    linkContainer.style.display = "block";
  });
} else {
  console.error("Form or required elements not found.");
}