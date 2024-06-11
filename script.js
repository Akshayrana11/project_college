document.addEventListener("DOMContentLoaded", function() {
  const calculateButton = document.getElementById("calculate");
  calculateButton.addEventListener("click", calculatePremium);
});

function calculatePremium() {
  // Get input values
  const type = document.getElementById("type").value;
  const term = parseInt(document.getElementById("term").value);
  const age = parseInt(document.getElementById("age").value);
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const sum = parseInt(document.getElementById("sum").value);
  const smoke = document.querySelector('input[name="smoke"]:checked').value;

  // Perform calculation (dummy logic)
  let premium = 0;
  if (type === "Whole-life") {
      // Dummy calculation for Whole-life
      premium = sum / age;
  } else if (type === "Term") {
      // Dummy calculation for Term
      premium = sum / (age + term);
  } else if (type === "Endowment") {
      // Dummy calculation for Endowment
      premium = sum / (age + term) * 1.5;
  }

  // Apply smoking status adjustment
  if (smoke === "Smoker") {
      premium *= 1.3; // Increase premium by 30% for smokers
  }

  // Display result
  document.getElementById("premium").innerHTML = "&#8377;" + premium.toFixed(2);
}
