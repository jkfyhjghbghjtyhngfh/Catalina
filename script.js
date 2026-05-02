const events = [
    {
        name: "Project A",
        start: 100,
        end: 300,
        color: "red",
        startDate: "2026-05-01",
        endDate: "2026-05-10"
    },
    {
        name: "Vacation",
        start: 500,
        end: 800,
        color: "blue",
        startDate: "2026-05-15",
        endDate: "2026-05-22"
    },
    {
        name: "Exam Week",
        start: 1000,
        end: 1200,
        color: "green",
        startDate: "2026-06-01",
        endDate: "2026-06-05"
    }
];

const timeline = document.getElementById("timeline");

events.forEach(event => {
    const blob = document.createElement("div");

    blob.className = "event";
    blob.style.left = event.start + "px";
    blob.style.width = (event.end - event.start) + "px";
    blob.style.top = "200px";
    blob.style.background = event.color;

    blob.innerText = event.name;

    blob.onclick = () => {
        document.getElementById("name").innerText =
            "Name: " + event.name;

        document.getElementById("start").innerText =
            "Start: " + event.startDate;

        document.getElementById("end").innerText =
            "End: " + event.endDate;
    };

    timeline.appendChild(blob);
});