//This function gets the event objects and displays each event as a individual div
document.addEventListener("DOMContentLoaded", function displayEvents() {
    for (const event in events) {
      document.getElementById(
        "event-infomation"
      ).innerHTML += `<div id="event${event}" class="events div-border hover-darken" onclick="displayEventInfo(${event})"><h3> 
          ${events[event].eventDate} - ${events[event].eventName}<br>
          ${events[event].eventLocation}
          </h3></div>`;
    }
  });
  // This code pre populates the header-event-details div with event 0
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("event-details").innerHTML = `
      <h3>${events[0].eventName}</h3>
      ${events[0].eventInfo}`;
  });