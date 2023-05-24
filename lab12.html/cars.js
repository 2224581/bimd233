var carData = [
    ["Nissan", "Ariya", "Black Diamond Pearl", "2023", "$44,485"],
    ["Jeep", "Grand Cherokee", "White", "2023", "$51,935"],
    ["Ford", "F-350 XLT", "Race Red", "2022", "$63,113"],
    ["Chevrolet", "Volt LT", "Kinetic Blue", "2018", "$15,699"],
    ["Volkswagen", "Beetle 2.0 TSi", "Reef Blue", "2013", "$15,499"]
];

var tableBody = document.querySelector("#carTable tbody");

carData.forEach(function (car) {
    var row = document.createElement("tr");

    car.forEach(function (value) {
        var cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });

    tableBody.appendChild(row);
});