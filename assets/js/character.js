// Form Buttons
const refreshButton = document.getElementById("character-clear");
/**
 * This function freshes the current page
 */
function refreshPage() {
  location.reload();
}
refreshButton.addEventListener("click", refreshPage);
