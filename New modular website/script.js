function toggleDropdown(event, element) {
  // Prevent the link from navigating when clicked to toggle dropdown
  event.preventDefault();

  // Toggle the visibility of the next element (dropdown container)
  const dropdownContainer = element.nextElementSibling;
  dropdownContainer.style.display =
    dropdownContainer.style.display === 'block' ? 'none' : 'block';

  // Toggle arrow direction
  element.classList.toggle('active');
}

//zoom in out//

function showTooltip(button) {
const tooltip = button.querySelector(".tooltip");
tooltip.style.visibility = "visible";
tooltip.style.opacity = "1";
}

function hideTooltip(button) {
const tooltip = button.querySelector(".tooltip");
tooltip.style.visibility = "hidden";
tooltip.style.opacity = "0";
}

let zoomLevel = 1;

// Set the zoom point based on click position
function setZoomPoint(event, imgElement) {
const rect = imgElement.getBoundingClientRect();
const offsetX = event.clientX - rect.left;  
const offsetY = event.clientY - rect.top;  
const percentX = (offsetX / imgElement.width) * 100;
const percentY = (offsetY / imgElement.height) * 100;

// Set the transform-origin based on click position
imgElement.style.transformOrigin = `${percentX}% ${percentY}%`;
}

// Zoom in the image by increasing scale
function zoomIn(button) {
const image = button.closest('.image-container').querySelector('.scribe-screenshot');
zoomLevel += 0.1;
image.style.transform = `scale(${zoomLevel})`;
}

// Zoom out the image by decreasing scale
function zoomOut(button) {
const image = button.closest('.image-container').querySelector('.scribe-screenshot');
if (zoomLevel > 1) {
    zoomLevel -= 0.1;
    image.style.transform = `scale(${zoomLevel})`;
}
}
