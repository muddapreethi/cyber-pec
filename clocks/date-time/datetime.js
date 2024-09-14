// script.js

function updateDateTime() {
    const now = new Date();
    
    // Format date and time
    const date = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    const time = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    // Update the HTML content
    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;
}

// Update date and time immediately
updateDateTime();

// Update date and time every second
setInterval(updateDateTime, 1000);
