
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
        name: "computer-use",
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

// Displays the Rules when click
function displaySkills(){
    for (const skill in skills){
        rulesSection.innerHTML += `
        <div id=${skills[skill].name} class="skill-box">
            <h3>${replaceDashesWithSpaces(capitalizeFirstLetter(skills[skill].name))}</h3><h3>${skills[skill].cost}</h3>
            <p><b>Restrictions:</b> ${skills[skill].restrictions}</p>
            <p>${skills[skill].description}</p>
        </div>
        <br>
        `
    }
}

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