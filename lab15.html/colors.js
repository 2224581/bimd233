/* 
Use these pages to help you out with Lab 14:
https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/

https://www.w3schools.com/jsref/met_node_appendchild.asp

https://stackoverflow.com/questions/9422974/createelement-with-id 

https://www.tutorialspoint.com/How-to-add-rows-to-a-table-using-JavaScript-DOM
*/

function TeamObject(name, conference, overall, lastGame, lastOpponent, logoID, logoURL) {
    // Complete this teamObject constructor function using the object model 
    // you developed in step 1; be sure to replace "...parameter list..." with 
    // your parameter list
    let team = {
        // Put your list of valueName: parameterName pairs here
        name: name,
        conference: conference,
        overall: overall,
        lastGame: lastGame,
        lastOpponent: lastOpponent,
        logoID: logoID,
        logoURL: logoURL
    };
    return team;
}

function fillArray() {
    // Create *each* team's 
    // object and push it into the pac12_data array
    // (you're using the constructor function as a parameter to the array.push
    // function); be sure to replace "...parameter list..." with the data 
    // parameter-list order
    pac12_data.push(
        TeamObject("OREGON", "7-2", "10-4", "L 32-47", "OKLA", "UO", "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-oregon-color-2019.png"),
        TeamObject("WASHINGTON STATE", "6-3", "7-6", "L 21-24", "CMU", "WSU", "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/washington-state-logo-color-out_2.png"),
        TeamObject("OREGON STATE", "5-4", "7-6", "L 13-24", "USU", "OSU", "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-oregon-state-color-2019.png"),
        TeamObject("CALIFORNIA", "4-5", "5-7", "W 24-14", "USC", "CAL", "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-california-color-2019.png"),
        TeamObject("WASHINGTON", "3-6", "4-8", "L 13-40", "WSU", "UW", "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-washington-color-2019.png"),
        TeamObject("STANFORD", "2-7", "3-9", "L 14-45", "ND", "SU", "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-stanford-color-2019.png")
    );
}

function getColorSelector(id) {
    // Write a getColorSelector function that takes an ID parameter and 
    // returns the CSS selector to use for a particular school's row; 
    // hint:  use branching to determine which selector to return 
    switch (id) {
        case "UO":
            return "#ducks";
        case "WSU":
            return "#cougs";
        case "OSU":
            return "#beavs";
        case "CAL":
            return "#oskis";
        case "UW":
            return "#huskies";
        case "SU":
            return "#trees";
        default:
            return "";
    }
}

function fillRow(team, tds) {
    // Write a fillRow function that takes a team object and the <td>s as 
    // paraemters, then fills <td> elements for the current team
    tds[0].innerHTML = `<img src="${team.logoURL}" alt="${team.name} logo" />`;
    tds[1].textContent = team.name;
    tds[2].textContent = team.conference;
    tds[3].textContent = team.overall;
    tds[4].textContent = team.lastGame;
}

function addTableRow(teamObj) {
    // Write an addTableRow function that takes a team object as its parameter; 
    // the function uses document.appendChild() to insert a new row to the 
    // <tbody> element
    // addTableRow should call getColorSelector to determine which ID to use to 
    // apply the CSS color to the row.
    // Hint:  Remember that in the object model, you select the object 
    // you want to work with, then manipulate it
    const table = document.getElementById("pac12-table");
    const tbody = table.getElementsByTagName("tbody")[0];
    const row = tbody.insertRow();
    const tds = [];

    for (let i = 0; i < 5; i++) {
        tds[i] = row.insertCell(i);
    }

    fillRow(teamObj, tds);
    // Write a fillRow function that takes a team object and the <td>s as 
    // paraemters, then fills <td> elements for the current team
    const colorSelector = getColorSelector(teamObj.logoID);
    if (colorSelector !== "") {
        row.setAttribute("id", colorSelector.substring(1));
    }
}

const pac12_data = [];

fillArray();
for (let i = 0; i < pac12_data.length; i++) {
    addTableRow(pac12_data[i]);
}

// Add event listener for mouseover
const messages = ["", "OREGON", "WASHINGTON STATE", "OREGON STATE", "CALIFORNIA", "WASHINGTON", "STANFORD"];
const rows = document.getElementsByTagName("tr");
const floatingText = document.createElement("div");
floatingText.textContent = "";

// Add styles to the floating text element
floatingText.style.position = "absolute";
floatingText.style.top = "0";
floatingText.style.left = "0";
floatingText.style.color = "white";
floatingText.style.fontSize = "20px";

// Add the floating text element to the document body
document.body.appendChild(floatingText);

for (let i = 0; i < rows.length; i++) {
    rows[i].addEventListener("mouseover", function (event) {
        // Change something on the page based on what row you moused over
        // For example, you can show text for the row
        floatingText.textContent = messages[i];

        // Get the position of the row
        const rowRect = event.target.getBoundingClientRect();

        // Set the top style property of the floating text element to half the height of the row plus the top offset of the row
        floatingText.style.top = `${rowRect.top + rowRect.height / 2.5 + window.scrollY}px`;

        // Set the position of the floating text element
        floatingText.style.left = `${rowRect.right + 40 + window.scrollX}px`;
    });
}

const table = rows[0].parentNode.parentNode;
table.addEventListener("mouseout", function () {
    floatingText.textContent = "";
});