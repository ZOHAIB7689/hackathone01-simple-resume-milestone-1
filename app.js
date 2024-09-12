var togglebutton = document.querySelector(".toggleButton");
var skill = document.querySelector("#Skills");
if (togglebutton && skill) {
    togglebutton.addEventListener("click", function () {
        if (skill.style.display === "none") {
            skill.style.display = "block";
            togglebutton.value = "Hide Skills";
        }
        else {
            skill.style.display = "none";
            togglebutton.value = "Show Skills";
        }
    });
}
