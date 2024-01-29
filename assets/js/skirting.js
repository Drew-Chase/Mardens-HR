updateClock();
setInterval(() => updateClock(), 500);

function updateClock() {
    const clock = $("footer #clock");
    const date = new Date().toLocaleDateString("en-US",
        {
            weekday: "long",
            day: "2-digit",
            year: "numeric",
            hour12: true,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            month: "long"
        });
    clock.html(date.replace("at", "<br>"));
}