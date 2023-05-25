function calcCircleGeometries(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    var circumference = 2 * Math.PI * radius;
    var diameter = 2 * radius;
    return [area, circumference, diameter];
}

function displayResults() {
    var radiusInput = document.getElementById('radiusInput');
    var areaResult = document.getElementById('areaResult');
    var circumferenceResult = document.getElementById('circumferenceResult');
    var diameterResult = document.getElementById('diameterResult');

    var radius = parseFloat(radiusInput.value);

    var geometries = calcCircleGeometries(radius);

    areaResult.textContent = geometries[0];
    circumferenceResult.textContent = geometries[1];
    diameterResult.textContent = geometries[2];
}

var radiusInput = document.getElementById('radiusInput');
radiusInput.addEventListener('input', displayResults); 