let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  let campsite = { lat: 50.792990492034875, lng: -3.407124731989129 };
  map = new Map(document.getElementById("map"), { center: campsite, zoom: 10 });
  let marker = new google.maps.Marker({ position: campsite, map: map });
}

/* This creats the event objects which are used on every page, They are designed to be updated
once a year with each event for that year being it's own object.
*/
let events = [
  // Below is the details for event 1
  {
    eventName: "Lundon Has Fallen",
    eventDate: "June 18th",
    eventLocation: "Morgan Camping Site",
    eventInfo: `The ring of fortresses surrounding the fallen city of Lundon has been breached. <br> 
                The corrupted that were once contained in the old tunnels now poor out and flood the realm. 
                As chaos spills out into the land, a council convenes to deliberate the fate of their 
                embattled realm.`,
  },
  // Below is the details for event 2
  {
    eventName: "The Lost Bunker",
    eventDate: "July 31st",
    eventLocation: "Morgan Camping Site",
    eventInfo: `With a remnant of the old world scattered amidst the ruins, and the shadow of the twisted 
                spreading ever wider, the council must grapple with the urgent question of how to stem 
                the tide of darkness threatening to engulf their world.`,
  },
  // Below is the details for event 3
  {
    eventName: "Fool's Hope",
    eventDate: "September 30th",
    eventLocation: "Morgan Camping Site",
    eventInfo: `With the remnants of Lundon's defenses shattered and the world teetering on the brink, 
                courageous souls must navigate treacherous terrain, face unimaginable perils, and confront 
                the darkest depths of their own fears. For in a world where hope flickers dim, it is the Fool 
                who carries the burden of kindling its flame anew.`,
  },
];

/**
 * You can add skills by using the below template and adding it to the array
 * {
        name: "SKILLNAME",
        icon: 'FONTAWESOME ICON',
        cost: COST,
        type: ["SKILL TAGS AS ITEMS"],
        restrictions: "SKILL RESTICTIONS",
        description: "SKILL DESCRIPTION"
    }
 * 
 */
let skills = [
  {
    name: "strength",
    icon: '<i class="fa-solid fa-dumbbell"></i>',
    cost: 2,
    type: ["physical"],
    restrictions: "N/A",
    description:
      "You call double when wielding a blunt weapon and can move while carying a heavy armament alone at a walking pace.",
  },
  {
    name: "finesse",
    icon: '<i class="fa-solid fa-bolt"></i>',
    cost: 2,
    type: ["physical"],
    restrictions: "N/A",
    description:
      "You call double when wielding a sharp weapon and can move over around or over a hazard at a walking pace.",
  },
  {
    name: "willpower",
    icon: '<i class="fa-solid fa-brain"></i>',
    cost: 3,
    type: ["mental"],
    restrictions: "N/A",
    description: "detrimental mental effects you suffer are reduced",
  },
  {
    name: "feeble",
    icon: '<i class="fa-solid fa-minimize"></i>',
    cost: -3,
    type: ["mental"],
    restrictions: "N/A",
    description: "detrimental mental effects you suffer are enhanced",
  },
  {
    name: "tough",
    icon: '<i class="fa-solid fa-heart"></i>',
    cost: 1,
    type: ["physical"],
    restrictions: "N/A",
    description: "You gain an extra two hits",
  },
  {
    name: "fragile",
    icon: '<i class="fa-solid fa-heart-crack"></i>',
    cost: -1,
    type: ["physical"],
    restrictions: "N/A",
    description: "You have two less hits",
  },
  {
    name: "resiliance",
    icon: '<i class="fa-solid fa-shield"></i>',
    cost: 4,
    type: ["physical"],
    restrictions: "N/A",
    description:
      "Once per event, if your character were to become terminal, you can instead get back up at 1 hp, or return to the camp later with a tarumatic wound. Speak to the ref leading this mission when using this ability as the latter may not be possible",
  },
  {
    name: "computer-use",
    icon: '<i class="fa-solid fa-code"></i>',
    cost: 1,
    type: ["mental"],
    restrictions: "N/A",
    description:
      "You have advantage when resolving a clash that involves eletronics",
  },
  {
    name: "technical-use",
    icon: '<i class="fa-solid fa-wrench"></i>',
    cost: 1,
    type: ["physical"],
    restrictions: "N/A",
    description:
      "You have advantage when resolving a clash that involves tools",
  },
  {
    name: "medical-use",
    icon: '<i class="fa-solid fa-kit-medical"></i>',
    cost: 2,
    type: ["mental"],
    restrictions: "N/A",
    description:
      "You have advantage when resolving a clash that involves medical pratices",
  },
  {
    name: "conductive",
    icon: "NON",
    cost: -1,
    origin: "enhanced",
    type: ["physical"],
    restrictions: "Mandatory for characters with the Origin: Enhanced",
    description:
      "It is a technical check, rather than a medical check, to perform the healing action and you receive no mefit from healing plants or magic",
  },
  {
    name: "old",
    icon: "NON",
    cost: 2,
    origin: "enhanced",
    type: ["physical"],
    restrictions: "Mandatory for characters with the Origin: Enhanced",
    description:
      "You are immune to any effect that puts you to sleep or that would alter your form. You also suffer no averse effects to traverse through radioactive eviroments without protection",
  },
];

let originSkills = skills.filter(function (skill) {
  let skillIncludesOrigin = Object.keys(skill).includes("origin");
  return skillIncludesOrigin;
});

let generalSkills = skills.filter(function (skill) {
  let skillIncludesOrigin = Object.keys(skill).includes("origin");
  return !skillIncludesOrigin;
});

//Code that runs on a click on the DOM

// displays event Info on every page when user clicks on the event
function displayEventInfo(event) {
  document.getElementById("event-details").innerHTML = `
    <h3>${events[event].eventName}</h3>
    ${events[event].eventInfo}`;
}

/**
 * This function opens the Nav Dropdown
 */
function openDropdown() {
  let dropdownArray = document.getElementsByClassName("dropdown-animation");
  let dropdownArrayLength = dropdownArray.length;
  for (let i = 0; i < dropdownArrayLength; i++) {
    dropdownArray[i].classList.toggle("dropdown-animation-active");
  }
}

// closes dropdown when clicking outside the menu
document.addEventListener("click", function closeDropdownOnClick(event) {
  if (!event.target.closest("nav")) {
    let dropdownArray = document.getElementsByClassName("dropdown-animation");
    let dropdownArrayLength = dropdownArray.length;
    for (let i = 0; i < dropdownArrayLength; i++) {
      dropdownArray[i].classList.remove("dropdown-animation-active");
    }
  }
});
// ****Rules Page****
/**
 * This function takes a string and returns the same string with a capitalized first letter
 */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function replaceDashesWithSpaces(string) {
  return string.replace("-", " ");
}
/**
 * Displays the condut rules and hides game rules and skill rules
 */
function displayConductRules() {
  let gameRules = document.getElementById("game-rules");
  let conductRules = document.getElementById("conduct-rules");
  let skillRules = document.getElementById("skill-rules");
  conductRules.classList.remove("hidden");
  gameRules.classList.add("hidden");
  skillRules.classList.add("hidden");
}

/**
 * Displays the game rules and hides conduct rules and skill rules
 */
function displayGameRules() {
  let gameRules = document.getElementById("game-rules");
  let conductRules = document.getElementById("conduct-rules");
  let skillRules = document.getElementById("skill-rules");
  gameRules.classList.remove("hidden");
  conductRules.classList.add("hidden");
  skillRules.classList.add("hidden");
}
/**
 * Displays the skills amd hides conduct and game rules
 */
function displaySkills() {
  let gameRules = document.getElementById("game-rules");
  let conductRules = document.getElementById("conduct-rules");
  let skillRules = document.getElementById("skill-rules");
  skillRules.classList.remove("hidden");
  conductRules.classList.add("hidden");
  gameRules.classList.add("hidden");
}

// Character Page
/**
 * This function displays a character image based off the origin, along with default origin skills and sets the available skill points
 */
function displayOrigin(origin) {
  picture = document.getElementById("reference-image");
  description = document.getElementById("origin-description");
  if (origin == "") {
    picture.innerHTML = `<img class="aside-image" src="assets/images/character-blank.png" alt="Outline of two warriors jumping">`;
    document.getElementById("skill-points-remaining").innerText = 6;
    //Need to add alt Text
  } else if (origin == "dweller") {
    picture.innerHTML = `<img class="aside-image" src="assets/images/character-dweller.jpeg" alt="Digital art of a human facing the viewer with the reminents of a tactical uniform holding a sword maqde of scrap metal">`;
    description.innerHTML =
      "A Dweller is the closest link to the old world, desendents of people who survived in bunkers. They wear uniforms with insignia that has lost all meaning alongside more recently forged weapons and armour";
    document.getElementById("skill-points-remaining").innerText = 6;
  } else if (origin == "wastelander") {
    picture.innerHTML = `<img class="aside-image" src="assets/images/character-wastelander.jpeg" alt="Digital art of a human facing the viewer dressed in rags with a gasmask in a shanty town">`;
    description.innerHTML = 
      "A Wastelander is a survivor of the wastes, they live in shanty towns. They wears leathers, cloths and aparatus needed to survive theharsh lands.";
    document.getElementById("skill-points-remaining").innerText = 6;
  } else if (origin == "twisted") {
    picture.innerHTML = `<img class="aside-image" src="assets/images/character-twisted.jpeg" alt="Digital art of a human with clown make up sitting on a curb with the ruins of sociaty behind him">`;
    description.innerHTML = 
      "A Twisted belongs to a clan that idolizes faded imagry of the old world. They adorn themselves with their icon's likeness";
    document.getElementById("skill-points-remaining").innerText = 6;
  } else if (origin == "altered") {
    picture.innerHTML = `<img class="aside-image" src="assets/images/character-altered.jpeg" alt="Digital Art of a Mutated human with elven ears wearing clothes made from leaves">`;
    description.innerHTML = 
      "A Altered has been changed by the magic caused by the calamity, their flesh has been warped to include changes such as angular features, tucks or rough hides.";
    document.getElementById("skill-points-remaining").innerText = 6;
  } else if (origin == "enhanced") {
    picture.innerHTML = `<img class="aside-image" src="assets/images/character-enhanced.jpeg" alt="Digital art of a Bipedal Robotic machine with animalist features">`;
    description.innerHTML = 
      "A Enhanced is infused with technology of the old world. Pre calamity personalities inside mecanical constructs that have no memory of where they came from.";
    document.getElementById("skill-points-remaining").innerText = 6;
  }
}

/**
 * This function looks over the skills and displays a skill assosiated with a origin
 * param origin: is the option from the select box in character.html
 * Note: This Function declares a within loop that referencing an outer scoped variable
 */
function displayOriginSkills(origin) {
  let originSkills = document.getElementsByClassName(origin);
  let skillPointsAvailable = parseInt(
    document.getElementById("skill-points-remaining").innerText
  );
  for (let i = 0; i < originSkills.length; i++) {
    let skillName = originSkills[i].id.slice(9);
    let skillObject = skills.find((i) => i.name === skillName);
    if ((originSkills[i].classList = origin)) {
      originSkills[i].classList.add("form-skill-selected");
      document.getElementById("skill-points-remaining").innerText =
        skillPointsAvailable - skillObject.cost;
    }
  }
}
/**
 * This function fetches all the skills in the object array and returns them as booleans for a HTML form
 */
function formFetchSkills() {
  let skillList = document.getElementById("form-characterskills");
  let selectedSkillList = document.getElementById("character-skilllist");
  skillList.innerHTML = "";
  for (let skill in generalSkills) {
    skillList.innerHTML += ` <label for="checkbox-${skills[skill].name}">
        <span class="form-skill-options">
        <p>${skills[skill].icon}</p>
        <h3>${replaceDashesWithSpaces(
          capitalizeFirstLetter(skills[skill].name)
        )}</h3>
        <h4>${skills[skill].cost}</h4>
        <input type="checkbox" hidden name="${
          skills[skill].name
        }" id="checkbox-${skills[skill].name}" onclick="displaySkill('${
      skills[skill].name
    }')">
        </input>
        </span></label>`;
  }
  selectedSkillList.innerHTML = "";
  // Need to add object properties to pop different classes based on positive/negative value
  for (let skill in skills) {
    selectedSkillList.innerHTML += `<span class="form-skill-unselected ${"Positive/Negative/Neutral"} ${
      skills[skill].origin
    }" id="selected-${skills[skill].name}">
        <h3>${replaceDashesWithSpaces(
          capitalizeFirstLetter(skills[skill].name)
        )}</h3>
        <p>${skills[skill].description}</p>
        </span>`;
  }
}

/**
 * This funtion is called when a skill checkbox is clicked checks the cost of the skill against the current total. it
 * adds a class containing visible styles to the div with the ID of the skill as well as subtracting the total from
 * the skill point total.
 */
function displaySkill(skillName) {
  let skillCheckbox = document.getElementById("checkbox-" + skillName);
  let selectedSkillDisplay = document.getElementById("selected-" + skillName);
  let skillLabel = skillCheckbox.closest("label");

  let skillObject = skills.find((skill) => skill.name === skillName);
  let skillCost = skillObject.cost;

  let skillPointsAvailable = parseInt(
    document.getElementById("skill-points-remaining").innerText
  );
  if (skillCheckbox.checked) {
    if (skillPointsAvailable - skillCost >= 0) {
      selectedSkillDisplay.classList.add("form-skill-selected");
      skillLabel.classList.add("skill-selected");
      document.getElementById("skill-points-remaining").innerText =
        skillPointsAvailable - skillCost;
      return;
    } else {
      skillCheckbox.checked = false;
      alert("You do not have enough Skill points to purchase this skill");
      return;
    }
  } else {
    selectedSkillDisplay.classList.remove("form-skill-selected");
    document.getElementById("skill-points-remaining").innerText =
      skillPointsAvailable + skillCost;
    skillLabel.classList.remove("skill-selected");
  }
}