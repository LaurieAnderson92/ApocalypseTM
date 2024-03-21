// ****Code that runs when the DOM loads****
//This function gets the event objects and displays each event as a individual div
document.addEventListener("DOMContentLoaded", function displayEvents(){
    for (const event in events) {
        document.getElementById('event-infomation').innerHTML += `<div id="event${event}" class="events div-border" onclick="displayEventInfo(${event})"> 
        ${events[event].eventDate} - ${events[event].eventName}<br>
        ${events[event].eventLocation}
         </div>`
        }
    }
)
// This code pre populates the header-event-details div with event 0
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('event-details').innerHTML = `${events[0].eventInfo}`
})

// document.addEventListener("DOMContentLoaded", function addFormStyles(){
//     let headStyles = document.getElementsByTagName("head")
//     headStyles.innerHTML ="<style>"
//     for(let skill in skills){
//         headStyles.innerHTML += `
//         #checkbox-${skills[skill].name}:checked~#selected-${skills[skill].name}{
//             display: block; 
//         }`}
//         headStyles.innerHTML += "</style>"
//     })

/* This creats the event objects which are used on every page, They are designed to be updated
once a year with each event for that year being it's own object.
*/
let events = [
    // Below is the details for event 1
    {eventName: "London Has Fallen",
    eventDate: "June 18th",
    eventLocation: "Morgan Camping Site",
    eventInfo: "Placeholder for description of Event 1"},
    // Below is the details for event 2
    {eventName: "The Lost Bunker",
    eventDate: "TBD",
    eventLocation: "TBD",
    eventInfo: "Placeholder for description of Event 2"},
    // Below is the details for event 3
    {eventName: "Siege of the Golden Arches",
    eventDate: "TBD",
    eventLocation: "TBD",
    eventInfo: "Placeholder for description of Event 3"}
    ];

let skills =[
    {
        name: "strength",
        cost: 1,
        type: ["Physical"],
        restrictions: "N/A",
        description: "Placeholder text"
    },
    {
        name: "willpower",
        cost: 1,
        type: ["Mental", "Social"],
        restrictions: "N/A",
        description: "Placeholder text"
    },
    {
        name: "endurance",
        cost: 1,
        type: ["Physical"],
        restrictions: "N/A",
        description: "Placeholder text"
    },
    {
        name: "computer",
        cost: 1,
        type: ["Mental"],
        restrictions: "N/A",
        description: "Placeholder text"
    },
    {
        name: "scavange",
        cost: 1,
        type: ["Physical"],
        restrictions: "N/A",
        description: "Placeholder text"
    },
    {
        name: "medical-use",
        cost: 1,
        type: ["Mental"],
        restrictions: "N/A",
        description: "Placeholder text"
    }
]

//Code that runs on a click on the DOM

// displays event Info on every page when user clicks on the event
function displayEventInfo(event){
    document.getElementById('event-details').innerHTML = `${events[event].eventInfo}`
}

/**
 * This function opens the Nav Dropdown
 */
function openDropdown(){
    let dropdownArray = document.getElementsByClassName("dropdown-animation")
    let dropdownArrayLength = dropdownArray.length
    for (let i = 0; i < dropdownArrayLength; i++ ) {
        dropdownArray[i].classList.toggle("dropdown-animation-active")
    }
}

// closes dropdown when clicking outside the menu
document.addEventListener("click", function closeDropdownOnClick(event){
    if (!event.target.closest("nav") 
){
        let dropdownArray = document.getElementsByClassName("dropdown-animation")
        let dropdownArrayLength = dropdownArray.length
        for (let i = 0; i < dropdownArrayLength; i++ ) {
            dropdownArray[i].classList.remove("dropdown-animation-active")
        }
        }
})
// ****Rules Page****
let rulesSection = document.getElementById("rules-display")
/**
 * This function takes a string and returns the same string with a capitalized first letter
 */
function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function replaceDashesWithSpaces(string){
    return string.replace('-', ' ')
}
function displayConductRules(){
    rulesSection.innerHTML =`<h2>Game Rules</h2>
                            <br>`
    rulesSection.innerHTML += `<h3>Be nice</h3>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <h3>Don't be a Dick</h3>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <h3>Refs are gods</h3>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <h3>Don't ever ask about Ref's Gunpowder</h3>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <h3>Children at the event</h3>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <h3>Bees?</h3>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <h3>Leveling Up</h3>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `
}
function displayGameRules(){
    console.log("click")
    rulesSection.innerHTML =`<h2>Game Rules</h2>
                            <br>`
    rulesSection.innerHTML += `<h3>Combat</h3>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <h3>Monstering</h3>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <h3>Resolving A Clash</h3>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <h3>Skill Challange</h3>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <h3>Luck Points</h3>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <h3>Downtime</h3>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <h3>Leveling Up</h3>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `
}
// Displays the Rules when click
function displaySkills(){
    rulesSection.innerHTML =`<h2>Skills</h3>
                            <br>`
    for (const skill in skills){
        rulesSection.innerHTML += `
        <div id=${skills[skill].name} class="skill-box">
            <span class="skill-heading"><h3>${replaceDashesWithSpaces(capitalizeFirstLetter(skills[skill].name))}</h3><h3>${skills[skill].cost}</h3></span>
            <p><b>Restrictions:</b> ${skills[skill].restrictions}</p>
            <p>${skills[skill].description}</p>
        </div>
        <br>
        `
    }
}
// Character Page
/**
 * This function displays a character image based off the origin
 */
function displayRefImage(origin){
    picture = document.getElementById("reference-image")
    if (origin == "Blank"){
        picture.innerHTML = ``
    }else if (origin == "dweller"){
        picture.innerHTML = `<img class="drop-animation" src="assets/images/character-dweller.jpeg" width="300px">`
    }else if (origin == "wastelander"){
        picture.innerHTML = `<img class="drop-animation" src="assets/images/character-wastelander.jpeg" width="300px">`
    }else if (origin == "twisted"){
        picture.innerHTML = `<img class="drop-animation" src="assets/images/character-twisted.jpeg" width="300px">`
    }else if (origin == "altered"){
        picture.innerHTML = `<img class="drop-animation" src="assets/images/character-altered.jpeg" width="300px">`
    }else if (origin == "enhanced"){
        picture.innerHTML = `<img class="drop-animation" src="assets/images/character-enhanced.jpeg" width="300px">`
    }
}
/**
 * This function fetches all the skills in the object array and returns them as booleans for a HTML form
 */
function formFetchSkills(){
    let skillList = document.getElementById("form-characterskills")
    let selectedSkillList = document.getElementById("character-skilllist")
    skillList.innerHTML = ""
    for (let skill in skills){ 
        skillList.innerHTML += `<span class="form-skill-options">
        <label for="checkbox-${skills[skill].name}">
        IconPlaceholder
        <h3>${replaceDashesWithSpaces(capitalizeFirstLetter(skills[skill].name))}</h3>
        <h4>${skills[skill].cost}</h4></label>
        <input type="checkbox" name="${skills[skill].name}" id="checkbox-${skills[skill].name}" onclick="displaySkill('${skills[skill].name}')">
        </input>
        </span>`
    }
    selectedSkillList.innerHTML = ""
    // Need to add object properties to pop different classes based on positive/negative value
    for (let skill in skills){
        selectedSkillList.innerHTML += `<span class="form-skill-unselected ${"Positive/Negative/Neutral"}" id="selected-${skills[skill].name}">
        <h3>${replaceDashesWithSpaces(capitalizeFirstLetter(skills[skill].name))}</h3>
        <p>${skills[skill].description}</p>
        </span>`
    }

}

function displaySkill(skill){
    let skillCheckbox = document.getElementById("checkbox-"+skill)
    let selectedSkillDisplay = document.getElementById("selected-"+skill)
    console.log(skillCheckbox)
    if(skillCheckbox.checked){
        selectedSkillDisplay.classList.add("form-skill-selected")
    }else{
        selectedSkillDisplay.classList.remove("form-skill-selected")
    }
}
