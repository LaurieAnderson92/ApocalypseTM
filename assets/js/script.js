
document.addEventListener("DOMContentLoaded", function(){
let eventInfo = [
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
let buttons = document.getElementsByClassName("header-btn");
    for (let button of buttons){
        button.addEventListener("click", function(eventInfo){
            if (this.value == "Event"+(button+1)){
                document.getElementById("header-event-infomation").innerHTML = 
                `<h3>${eventName}</h3> <br>
                Date: ${eventDate} Location: ${eventLocation} <br>
                <p>${eventInfo}</p>
                `
            }
        })
    }
    console.log("Completed the function")
})