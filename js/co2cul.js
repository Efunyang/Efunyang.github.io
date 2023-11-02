function calculateCarbonFootprint() {
    var distance = parseFloat(document.getElementById("distance").value);
    var fuelEfficiency = parseFloat(document.getElementById("fuelEfficiency").value);
  
    if (isNaN(distance) || isNaN(fuelEfficiency)) {
      alert("請輸入有效數字");
      return;
    }
  
    var carbonFootprint = (distance * fuelEfficiency * 2.31).toFixed(2); // 計算碳足跡，假設每公升汽油產生2.31公斤二氧化碳排放量
  
    document.getElementById("result").textContent = "每月的汽車碳足跡為：" + carbonFootprint + " 公斤二氧化碳";
  }