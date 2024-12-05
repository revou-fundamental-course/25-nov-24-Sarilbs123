// Event listener for the "Hitung BMI" button
document.getElementById("calculateButton").addEventListener("click", () => {
  // Get input values
  const gender = document.getElementById("gender").value;
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);

  // Validate inputs
  if (!gender || isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    alert("Harap isi semua data dengan benar.");
    return;
  }

  // Calculate BMI
  const bmi = calculateBMI(weight, height);

  // Interpret BMI
  const result = interpretBMI(bmi, gender);

  // Display results
  document.getElementById("bmiOutput").textContent = `BMI Anda: ${bmi}`;
  document.getElementById("bmiExplanation").textContent = result;

  // Reset form
  document.getElementById("bmiForm").reset();
});

// Function to calculate BMI
function calculateBMI(weight, height) {
  const heightInMeters = height / 100;
  return weight / (heightInMeters ** 2).toFixed(2); // Round to 2 decimal places
}

// Function to interpret BMI
function interpretBMI(bmi, gender) {
  let category;
  if (bmi < 18.5) {
    category = "Kekurangan berat badan";
  } else if (bmi < 25) {
    category = "Berat badan normal";
  } else if (bmi < 30) {
    category = "Kelebihan berat badan";
  } else {
    category = "Obesitas";
  }
  return `Sebagai ${gender}, hasil BMI Anda menunjukkan bahwa Anda berada dalam kategori: ${category}.`;
}
