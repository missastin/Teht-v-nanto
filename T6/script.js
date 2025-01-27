function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    // Lisää etunolla yksinumeroisiin minuutteihin ja sekunteihin
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    
    var timeString = hours + ':' + minutes + ':' + seconds;
    
    document.getElementById('clock').textContent = timeString;
}

// Päivitä kello kerran heti ja sen jälkeen joka sekunti
setInterval(updateClock, 1000);
updateClock();