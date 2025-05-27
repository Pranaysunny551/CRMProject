function loadCalendar(){
    document.getElementById("main-content").innerHTML = `
        <div class="container-fluid calendar mt-2">
            <h2 class="mb-2 text-center">Calendar</h2>
            <div class="card shadow p-3">
                <div id="calendar"></div>
            </div>
        </div>
    `;

    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            editable: true,
            selectable: true,
            events: [
                { title: 'Meeting', start: '2025-02-15' },
                { title: 'Project Deadline', start: '2025-02-20' }
            ],
            dateClick: function(info) {
                let eventTitle = prompt('Enter event title:');
                if (eventTitle) {
                    calendar.addEvent({ title: eventTitle, start: info.dateStr });
                }
            }
        });
        calendar.render();
    });
}