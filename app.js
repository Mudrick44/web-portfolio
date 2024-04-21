// 

document.addEventListener("DOMContentLoaded", function () {
  updateClock(); // Call updateClock function to display the time
  function getBayernTime() {
    // Get current date and time
    var now = new Date();
    // Set the time zone offset for CET (Central European Time)
    now.setHours(now.getHours() ); // Bayern Munich is in the Central European Time zone (UTC+1)
    
    // Format the time as desired (e.g., HH:MM AM/PM)
    var hours = now.getHours() % 12 || 12; // Convert 24-hour time to 12-hour format
    var minutes = ('0' + now.getMinutes()).slice(-2);
    var ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    
    // Display the time on the webpage
    document.getElementById('bayern-time').innerText = hours + ':' + minutes + ' ' + ampm;
    
  }
  
  // Call the function to initially display the time when the page loads
  getBayernTime();
  
  // Update the time every minute
  setInterval(getBayernTime, 60000);


  document.getElementById('downloadLink').addEventListener('click', function(event) {
    // Prevent the default action (i.e., following the link)
    event.preventDefault();
    
    // Replace 'path/to/your_resume.pdf' with the actual URL of your resume file
    var resumeUrl = 'resume/mudrick khamis_lali_CV-1.pdf';
    
    // Create an anchor element
    var anchorElement = document.createElement('a');
    
    // Set the href attribute to your resume URL
    anchorElement.href = resumeUrl;
    
    // Set the download attribute to specify the default filename for the downloaded file
    anchorElement.download = 'mudrickResume.pdf';
    
    // Append the anchor element to the document body
    document.body.appendChild(anchorElement);
    
    // Trigger a click event on the anchor element
    anchorElement.click();
    
    // Clean up: remove the anchor element from the document body
    document.body.removeChild(anchorElement);
  });
});

function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Determine whether it's AM or PM
  var meridiem = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // If hours is 0, make it 12

  // Add leading zero if needed
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  // Display the time in the "clock" div
  document.getElementById("clock").innerHTML =
    hours + ":" + minutes + ":" + seconds + " " + meridiem;

  // Update every second
  setTimeout(updateClock, 1000);
}





function redirectToLinkedIn() {
  window.location.href = 'https://www.linkedin.com/in/mudrick-khamis-lali-a5009a263/';
}