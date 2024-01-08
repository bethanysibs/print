let footertable = document.getElementById("footer");
let headerTable = document.getElementById("header");
let bodyTable = document.getElementById("tableBody");

function rowsCalculate(cName, section) {
  let table = cName;
  let rows = table.rows.length;
  console.log(section + " Rows: " + rows);
}

rowsCalculate(headerTable, "Header");
rowsCalculate(bodyTable, "Body");
rowsCalculate(footertable, "Footer");
