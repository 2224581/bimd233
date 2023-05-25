var flights = [
    ['ASA', '1077', 'Washington Dulles Intl (KIAD)', 'San Francisco Intl (KSFO)', 'March 20, 2017 07:32:00 EST', 'March 20, 2017 22:10:00 PST', ''],
    ['ASA', '1088', 'San Francisco Intl (KSFO)', 'Washington Dulles Intl (KIAD)', 'March 20, 2017 15:58:00 PST', 'March 20, 2017 23:28:00 EST', ''],
    ['ASA', '1097', 'Washington Dulles Intl (KIAD)', 'Los Angeles Intl (KLAX)', 'March 20, 2017 17:06:00 EST', 'March 20, 2017 19:24:00 PST', ''],
    ['ASA', '11', 'Newark Liberty Intl (KEWR)', 'Seattle-Tacoma Intl (KSEA)', 'March 20, 2017 17:00:00 EST', 'March 20, 2017 19:27:00 PST', ''],
    ['ASA', '1113', 'Will Rogers World (KOKC)', 'Seattle-Tacoma Intl (KSEA)', 'March 20, 2017 17:40:00 CST', 'March 20, 2017 19:11:00 PST', '']
];

var tableBody = document.getElementById("tableBody");

flights.forEach(function (flightData) {
    var row = document.createElement("tr");

    var flightNumber = document.createElement("td");
    flightNumber.textContent = flightData[1];
    row.appendChild(flightNumber);

    var origin = document.createElement("td");
    origin.textContent = flightData[2];
    row.appendChild(origin);

    var destination = document.createElement("td");
    destination.textContent = flightData[3];
    row.appendChild(destination);

    var depTime = document.createElement("td");
    depTime.textContent = flightData[4];
    row.appendChild(depTime);

    var arrivalTime = document.createElement("td");
    arrivalTime.textContent = flightData[5];
    row.appendChild(arrivalTime);

    var t2 = new Date(flightData[4]);
    var t3 = new Date(flightData[5]);
    var diff = t3.getTime() - t2.getTime();
    var duration = new Date(diff);

    var durationCell = document.createElement("td");
    durationCell.textContent = duration.getUTCHours() + ':' + duration.getUTCMinutes() + ':' + duration.getUTCSeconds();
    row.appendChild(durationCell);

    tableBody.appendChild(row);
});