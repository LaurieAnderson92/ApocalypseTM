//This code prepopulates the skills section with all of the skills when the DOM is loaded, this it to assist with screenreaders
document.addEventListener("DOMContentLoaded", function loadSkills() {
    let skillsGeneralRules = document.getElementById("skill-rules-general");
    let skillOriginRules = document.getElementById("skill-rules-origin");
    for (const skill in generalSkills) {
      skillsGeneralRules.innerHTML += `
          <div id=${generalSkills[skill].name} class="skill-box section-style">
              <span class="skill-heading section-style"><h3>${replaceDashesWithSpaces(
                capitalizeFirstLetter(generalSkills[skill].name)
              )}</h3><h3>${generalSkills[skill].cost}</h3></span>
              <p>${generalSkills[skill].description}</p>
          </div>
          `;
    }
    for (const skill in originSkills) {
      skillOriginRules.innerHTML += `
          <div id=${originSkills[skill].name} class="skill-box section-style">
              <span class="skill-heading section-style"><h3>${replaceDashesWithSpaces(
                capitalizeFirstLetter(originSkills[skill].name)
              )}</h3><h3>${originSkills[skill].cost}</h3></span>
              <h3>Origin: ${capitalizeFirstLetter(
                originSkills[skill].origin
              )}</h3> 
              <p>${originSkills[skill].description}</p>
          </div>
          `;
    }
  });