var flights = [
    ['ASA', '1077', 'Washington Dulles Intl (KIAD)', 'San Francisco Intl (KSFO)', 'March 20, 2017 07:32:00 EST', 'March 20, 2017 22:10:00 PST', ''],
    ['ASA', '1088', 'San Francisco Intl (KSFO)', 'Washington Dulles Intl (KIAD)', 'March 20, 2017 15:58:00 PST', 'March 20, 2017 23:28:00 EST', ''],
    ['ASA', '1097', 'Washington Dulles Intl (KIAD)', 'Los Angeles Intl (KLAX)', 'March 20, 2017 17:06:00 EST', 'March 20, 2017 19:24:00 PST', ''],
    ['ASA', '11', 'Newark Liberty Intl (KEWR)', 'Seattle-Tacoma Intl (KSEA)', 'March 20, 2017 17:00:00 EST', 'March 20, 2017 19:27:00 PST', ''],
    ['ASA', '1113', 'Will Rogers World (KOKC)', 'Seattle-Tacoma Intl (KSEA)', 'March 20, 2017 17:40:00 CST', 'March 20, 2017 19:11:00 PST', '']
];

function Flight(airline, number, origin, destination, dep_time, arrival_time, arrival_gate) {
    this.airline = airline;
    this.number = number;
    this.origin = origin;
    this.destination = destination;
    this.dep_time = dep_time;
    this.arrival_time = arrival_time;
    this.arrival_gate = arrival_gate;
    this.getDuration = function () {
        var t2 = new Date(this.dep_time);
        var t3 = new Date(this.arrival_time);
        var diff = t3.getTime() - t2.getTime();
        var duration = new Date(diff);
        return duration.getUTCHours() + ':' + duration.getUTCMinutes() + ':' + duration.getUTCSeconds();
    }
}

var tableBody = document.getElementById("tableBody");

flights.forEach(function (flightData) {
    var flight = new Flight(...flightData);

    var row = document.createElement("tr");

    var flightNumber = document.createElement("td");
    flightNumber.textContent = flight.number;
    row.appendChild(flightNumber);

    var origin = document.createElement("td");
    origin.textContent = flight.origin;
    row.appendChild(origin);

    var destination = document.createElement("td");
    destination.textContent = flight.destination;
    row.appendChild(destination);

    var depTime = document.createElement("td");
    depTime.textContent = flight.dep_time;
    row.appendChild(depTime);

    var arrivalTime = document.createElement("td");
    arrivalTime.textContent = flight.arrival_time;
    row.appendChild(arrivalTime);

    var duration = document.createElement("td");
    duration.textContent = flight.getDuration();
    row.appendChild(duration);

    tableBody.appendChild(row);
});