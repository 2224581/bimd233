var stocks = [
    {
        companyName: "Microsoft",
        marketCap: "$381.7 B",
        sales: "$86.8 B",
        profit: "$22.1 B",
        numEmployees: 128000
    },
    {
        companyName: "Symetra Financial",
        marketCap: "$2.7 B",
        sales: "$2.2 B",
        profit: "$254.4 M",
        numEmployees: 1400
    },
    {
        companyName: "Micron Technology",
        marketCap: "$37.6 B",
        sales: "$16.4 B",
        profit: "$3.0 B",
        numEmployees: 30400
    },
    {
        companyName: "F5 Networks",
        marketCap: "$9.5 B",
        sales: "$1.7 B",
        profit: "$311.2 M",
        numEmployees: 3834
    },
    {
        companyName: "Expedia",
        marketCap: "$10.8 B",
        sales: "$5.8 B",
        profit: "$398.1 M",
        numEmployees: 18210
    },
    {
        companyName: "Nautilus",
        marketCap: "$476 M",
        sales: "$274.4 M",
        profit: "$18.8 M",
        numEmployees: 340
    },
    {
        companyName: "Heritage Financial",
        marketCap: "$531 M",
        sales: "$137.6 M",
        profit: "$21 M",
        numEmployees: 748
    },
    {
        companyName: "Cascade Microtech",
        marketCap: "$239 M",
        sales: "$136 M",
        profit: "$9.9 M",
        numEmployees: 449
    },
    {
        companyName: "Nike",
        marketCap: "$83.1 B",
        sales: "$2.7 B",
        profit: "$2.7 B",
        numEmployees: 56500
    },
    {
        companyName: "Alaska Air Group",
        marketCap: "$7.9 B",
        sales: "$5.4 B",
        profit: "$605 M",
        numEmployees: 13952
    },
];


function generateTableRows() {
    var tableBody = document.getElementById("stock-data");
    stocks.forEach(function (stock) {
        var row = document.createElement("tr");
        row.innerHTML = `<td>${stock.companyName}</td>
                        <td>${stock.marketCap}</td>
                        <td>${stock.sales}</td>
                        <td>${stock.profit}</td>
                        <td>${stock.numEmployees}</td>`;
        tableBody.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    generateTableRows();
});