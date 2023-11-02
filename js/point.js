function calculatePoints() {
    var distance = parseFloat(document.getElementById("distance").value);
    var carEmission = parseFloat(document.getElementById("car-emission").value);
    var otherTransportEmission = parseFloat(document.getElementById("other-transport-emission").value);
    
    var carFootprint = distance * carEmission;
    var otherTransportFootprint = distance * otherTransportEmission;
    var carbonSaved = otherTransportFootprint - carFootprint;
    var pointsEarned = Math.round(carbonSaved ); // 每減少10單位碳足跡獲得1積點
    
    document.getElementById("car-footprint").textContent = carFootprint.toFixed(2);
    document.getElementById("other-transport-footprint").textContent = otherTransportFootprint.toFixed(2);
    document.getElementById("carbon-saved").textContent = carbonSaved.toFixed(2);
    document.getElementById("points-earned").textContent = pointsEarned;
  }