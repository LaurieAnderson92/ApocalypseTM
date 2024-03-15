
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

//Code that runs on a click on the DOM

// displaus event Info when the Dic is clicked
function displayEventInfo(event){
    document.getElementById('header-event-details').innerHTML = `${events[event].eventInfo}`
}

// Code that runs when the DOM loads

//This function gets the event objects and displays each event as a individual div
document.addEventListener("DOMContentLoaded", function displayEvents(){
    console.log("function display Events started")
    for (const event in events) {
        console.log("loading:" + events[event].eventName)
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