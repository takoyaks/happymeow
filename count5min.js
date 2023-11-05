         // Set the countdown duration in seconds
         const countdownDuration = 60;

         const countdownElement = document.getElementById("countdown");
 
         function startCountdown() {
             let seconds = countdownDuration;
             const countdownInterval = setInterval(function() {
                 countdownElement.innerHTML = `Countdown: ${seconds} seconds`;
                 seconds--;
 
                 if (seconds < 0) {
                     clearInterval(countdownInterval);
                     countdownElement.innerHTML = "Countdown: 0 seconds";
                     // Open the link when the countdown reaches zero
                    //  window.location.href = "https://www.example.com";
                 }
             }, 1000); // Update the countdown every 1 second (1000 milliseconds)
         }
 
         // Start the countdown when the page loads
         window.onload = startCountdown;