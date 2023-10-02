function createTable() {
  // Prompt the user for the number of rows and columns
  const rn = parseInt(prompt("Input number of rows"));
  const cn = parseInt(prompt("Input number of columns"));

  // Get the table element by its id
  const table = document.getElementById("myTable");

  // Clear any existing content in the table
  table.innerHTML = "";

  // Create the table rows and cells
  for (let i = 0; i < rn; i++) {
    const row = table.insertRow(i);

    for (let j = 0; j < cn; j++) {
      const cell = row.insertCell(j);
      cell.textContent = `Row-${i} Column-${j}`;
    }
  }
}
// Get the button element by its id
const createTableButton = document.getElementById("createTableButton");

// Add a click event listener to the button
createTableButton.addEventListener("click", createTable);
