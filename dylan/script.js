
function displayDate() {
    let date = new Date();
    date = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long', timeZone: 'America/Chicago' }).format(date);
    document.getElementById("timezone1").innerText = date;

    date = new Date();
    const date2 = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long', timeZone: 'America/New_York' }).format(date);
    document.getElementById("timezone2").innerText = date2;
}

setInterval(displayDate, 1000);