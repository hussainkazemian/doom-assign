'use strict';
function updateInfo() {
  const target = document.getElementById('target');

  // Get browser information
  const userAgent = navigator.userAgent;
  let browserName = 'Unknown Browser';
  let browserVersion = 'Unknown Version';

  if (userAgent.indexOf('Chrome') > -1) {
    browserName = 'Google Chrome';
    browserVersion = userAgent.match(/Chrome\/(\d+)/)[1];
  } else if (userAgent.indexOf('Firefox') > -1) {
    browserName = 'Mozilla Firefox';
    browserVersion = userAgent.match(/Firefox\/(\d+)/)[1];
  } else if (
    userAgent.indexOf('Safari') > -1 &&
    userAgent.indexOf('Chrome') === -1
  ) {
    browserName = 'Apple Safari';
    browserVersion = userAgent.match(/Version\/(\d+)/)[1];
  } else if (
    userAgent.indexOf('MSIE') > -1 ||
    userAgent.indexOf('Trident/') > -1
  ) {
    browserName = 'Internet Explorer';
    browserVersion = userAgent.match(/(?:MSIE |rv:)(\d+)/)[1];
  } else if (userAgent.indexOf('Edge') > -1) {
    browserName = 'Microsoft Edge';
    browserVersion = userAgent.match(/Edge\/(\d+)/)[1];
  }

  // Get OS information
  let osName = 'Unknown OS';
  if (userAgent.indexOf('Win') > -1) osName = 'Windows';
  else if (userAgent.indexOf('Mac') > -1) osName = 'macOS';
  else if (userAgent.indexOf('Linux') > -1) osName = 'Linux';
  else if (userAgent.indexOf('Android') > -1) osName = 'Android';
  else if (userAgent.indexOf('like Mac') > -1) osName = 'iOS';

  // Get screen information
  const screenWidth = screen.width;
  const screenHeight = screen.height;
  const availableWidth = screen.availWidth;
  const availableHeight = screen.availHeight;

  // Get current date and time in Finnish localization
  const now = new Date();
  const finnishLocale = 'fi-FI';
  const dateOptions = {year: 'numeric', month: 'long', day: 'numeric'};
  const timeOptions = {hour: '2-digit', minute: '2-digit'};

  const formattedDate = now.toLocaleDateString(finnishLocale, dateOptions);
  const formattedTime = now.toLocaleTimeString(finnishLocale, timeOptions);

  // Add the information to the page
  target.innerHTML = `
    <p><strong>Browser:</strong> ${browserName} ${browserVersion}</p>
    <p><strong>Operating System:</strong> ${osName}</p>
    <p><strong>Screen Width:</strong> ${screenWidth}px</p>
    <p><strong>Screen Height:</strong> ${screenHeight}px</p>
    <p><strong>Available Screen Width:</strong> ${availableWidth}px</p>
    <p><strong>Available Screen Height:</strong> ${availableHeight}px</p>
    <p><strong>Current Date:</strong> ${formattedDate}</p>
    <p><strong>Current Time:</strong> ${formattedTime}</p>
  `;
}

// Event listener for button click
document.getElementById('updateButton').addEventListener('click', updateInfo);

// Event listener for window resize
window.addEventListener('resize', updateInfo);

// Initial call to populate information
updateInfo();
