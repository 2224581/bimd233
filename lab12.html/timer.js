function updateCounter() {
    var counterElement = document.getElementById("counter");
    var counterValue = parseInt(counterElement.textContent);
    counterValue++;
    counterElement.textContent = counterValue;
}

setInterval(updateCounter, 3000);